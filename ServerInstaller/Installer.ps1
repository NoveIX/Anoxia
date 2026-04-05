param (
    [switch]$InstallJava,
    [string]$JavaVer,
    [switch]$InstallForge,
    [string]$JavaExe,
    [string]$MCVer,
    [string]$ForgeVer
)

# Change dir to server root dir
$WorkDir = Split-Path -Path $PSScriptRoot -Parent
Set-Location -Path $WorkDir


#region logging functions
function Write-LogInfo {
    param (
        [Parameter(Mandatory)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "INFO" -ForegroundColor DarkCyan -NoNewline
    Write-Host "]: " -NoNewline
    Write-Host $Message
}

function Write-LogWarn {
    param (
        [Parameter(Mandatory)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "WARN" -ForegroundColor DarkYellow -NoNewline
    Write-Host "]: " -NoNewline
    Write-Host $Message
}

function Write-LogError {
    param (
        [Parameter(Mandatory)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "ERROR" -ForegroundColor DarkRed -NoNewline
    Write-Host "]: " -NoNewline
    Write-Host $Message
}

function Invoke-PathCombine {
    [CmdletBinding()]
    param(
        [Parameter(ValueFromRemainingArguments)]
        [object[]]$Path
    )

    return [System.IO.Path]::Combine([string[]](@($Path | ForEach-Object { $_ })))
}
#endregion


#region utility functions
# Copy file or directory with progress bar
function Copy-File {
    param (
        [Parameter(Mandatory)]
        [ValidateScript({ Test-Path $_ })]
        [string]$Source,

        [Parameter(Mandatory)]
        [string]$Destination,

        # Overwrite files at the destination if they already exist
        [switch]$Force,

        [ValidateNotNullOrEmpty()]
        [int]$DecimalPlace = 2
    )

    # Create the destination if it does not exist
    if (-not (Test-Path -Path $Destination -PathType Container)) { New-Item -Path $Destination -ItemType Directory -Force | Out-Null }
    else {
        if ((Get-ChildItem -Path $Destination -Force).Count -gt 0 -and -not $Force) {
            $sysMsg = "The path '$Destination' already exists and is not empty. Operation aborted to prevent data loss. Use the 'Force' parameter to overwrite the existing contents."
            throw [System.InvalidOperationException]::new($sysMsg)
        }
    }

    # Resolve full path
    $Source = Resolve-Path -LiteralPath $Source
    $Destination = Resolve-Path -LiteralPath $Destination

    # Recursive copy with attribute preservation
    [array]$items = Get-ChildItem -Path $Source -Recurse -Force

    #Counter
    [int]$curItem = 0
    [int]$totItem = $items.Count

    [int]$curByte = 0
    [double]$totByte = 0
    foreach ($item in $items) { $totByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 } }

    # Copy items
    foreach ($item in $items) {
        # Progress bar
        $curItem++
        $curByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 }
        [double]$percent = ((($curItem / $totItem) + ($curByte / $totByte)) / 2) * 100
        [double]$percentComplete = [math]::Round($percent, $DecimalPlace)
        [string]$status = "Item $curItem of $totItem ($($percentComplete.ToString("N$DecimalPlace")) `%) - $($item.Name)"
        Write-Progress -Id 0 -Activity "Copy in file progress..." -Status $status -PercentComplete $percentComplete

        # Calculate path relative path on destination path
        [string]$SourceRelativePath = $item.FullName.Substring((Resolve-Path $Source).Path.Length)
        [string]$DestinationFullPath = Join-Path -Path $Destination -ChildPath $SourceRelativePath

        # Copy item to destination
        if ($item.PSIsContainer) { Copy-Item -Path $item.FullName -Destination (Split-Path $DestinationFullPath -Parent) -Force }
        else { Copy-Item -Path $item.FullName -Destination $DestinationFullPath -Force }
    }

    Start-Sleep -Milliseconds 50
    Write-Progress -Id 0 -Activity "Copy completed" -Completed
}

# Get system architecture (x64 or ARM64)
function Get-SysArch {
    if ($env:PROCESSOR_ARCHITECTURE -eq "AMD64") { $arch = "x64" }
    elseif ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") { $arch = "aarch64" }
    else {
        Write-Host "`n============================================"
        Write-Host "SYSTEM NOT SUPPORTED"
        Write-Host "Detected architecture: $arch"
        Write-Host "Required architecture: 64-bit (x64 or ARM64)"
        Write-Host "============================================`n"
        Pause; exit 1
    }

    return $arch
}

# Download file with fallback to BITS if WebRequest fails
function Invoke-DonwloadFiles {
    param (
        [Parameter(Mandatory)]
        [string]$File,
        [Parameter(Mandatory)]
        [string]$URL
    )

    try {
        Write-LogInfo "(WebRequest) Downloading $File"
        Invoke-WebRequest -Uri $URL -OutFile $File -UseBasicParsing -ErrorAction Stop
        Write-LogInfo "Download completed: $File"
    }
    catch {
        Write-LogWarn "WebRequest failed, trying BITS"
        try {
            Write-LogInfo "(BITS) Downloading $File"
            Start-BitsTransfer -Source $URL -Destination $File
            Write-LogInfo "Download completed: $File"
        }
        catch { Write-LogError "Download failed: $File. SysErr: $($_.Exception.Message)" ; Pause; exit 1 }
    }
}
#endregion


#region installation functions
# Install Java locally by downloading and extracting the JRE zip file
function Install-LocalJava {
    param (
        [Parameter(Mandatory)]
        [string]$Version
    )

    # Set Java download URL and file name based on architecture and version
    $SystemArch = Get-SysArch
    $JavaZip = "OpenJDK17U-jre_${SystemArch}_windows.zip"
    $JavaUrl = "https://api.adoptium.net/v3/binary/latest/${Version}/ga/windows/${SystemArch}/jre/hotspot/normal/eclipse"

    # Download Java zip file
    if (-not (Test-Path -Path $JavaZip -PathType Leaf)) { Invoke-DonwloadFiles -File $JavaZip -URL $JavaUrl }

    # Extract Java zip file
    if (-not (Test-Path -Path "java" -PathType Container)) {
        try {
            Write-LogInfo "Extracting $JavaZip"
            Expand-Archive -Path $JavaZip -DestinationPath "OpenJDK${Version}" -Force
            Write-LogInfo "Extraction completed located in OpenJDK${Version}"
        }
        catch { Write-LogError "Failed to extract $JavaZip. SysErr: $($_.Exception.Message)"; Pause; exit 1 }

        # Move extracted Java directory to "java"
        try {
            $dir = Get-Item -Path "OpenJDK${Version}"
            $Source = Get-ChildItem -Path $dir.FullName -Directory | Where-Object { $_.Name -match "jdk-${Version}|jre-${Version}" } | Select-Object -First 1
            Copy-File -Source $Source.FullName -Destination "java"
            Remove-Item -Path $dir -Force -Recurse
            Write-LogInfo "Java setup completed copied in java"
        }
        catch { Write-LogError "Failed to set up java directory. SysErr: $($_.Exception.Message)" ; Pause; exit 1 }
    }
    else { Write-LogInfo "Java is already set up (java directory exists)" }
}

# Install Forge server by downloading the installer jar and running it with Java
function Install-Forge {
    param (
        [Parameter(Mandatory)]
        [string]$JavaExe,
        [Parameter(Mandatory)]
        [string]$MCVersion,
        [Parameter(Mandatory)]
        [string]$Version
    )

    # Set Forge installer URL and file name based on version
    $ForgeInstaller = "forge-${MCVersion}-${Version}-installer.jar"
    $ForgeUrl = "https://maven.minecraftforge.net/net/minecraftforge/forge/${MCVersion}-${Version}/${ForgeInstaller}"

    # Download Forge installer
    if (-not (Test-Path -Path $ForgeInstaller -PathType Leaf)) { Invoke-DonwloadFiles -File $ForgeInstaller -URL $ForgeUrl }

    # Run Forge installer
    if (-not (Test-Path -Path "libraries" -PathType Container)) {
        try {
            Write-LogInfo "Running Forge installer: $ForgeInstaller"
            $localJava = Invoke-PathCombine -Path $WorkDir, "java", "bin", "java.exe"
            $javaExe = if (-not (Test-Path -Path $javaExe -PathType Leaf)) { $localJava } else { $JavaExe }
            Start-Process -FilePath $javaExe -ArgumentList "-jar `"$ForgeInstaller`" --installServer" -Wait -NoNewWindow
            Write-LogInfo "Forge installation completed"
        }
        catch { Write-LogError "Failed to install Forge. SysErr: $($_.Exception.Message)"; Pause; exit 1 }
    }
    else { Write-LogInfo "Forge is already installed (libraries directory exists)" }
}
#endregion

# Main execution
if ($InstallJava) { Install-LocalJava -Version $JavaVer; exit 0 }
if ($InstallForge) { Install-Forge -JavaExe $JavaExe -MCVersion $MCVer -Version $ForgeVer; exit 0 }