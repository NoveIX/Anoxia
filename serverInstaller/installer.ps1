param (
    # Java
    [Parameter(Mandatory = $true, Position = 0, ParameterSetName = "Java")]
    [switch]$InstallJava,

    [Parameter(Mandatory = $true, Position = 1, ParameterSetName = "Java")]
    [string]$JavaVersion,

    # Forge
    [Parameter(Mandatory = $true, Position = 0, ParameterSetName = "Forge")]
    [switch]$InstallForge,

    [Parameter(Mandatory = $true, Position = 1, ParameterSetName = "Forge")]
    [string]$JavaExe,

    [Parameter(Mandatory = $true, Position = 2, ParameterSetName = "Forge")]
    [string]$MinecraftVersion,

    [Parameter(Mandatory = $true, Position = 3, ParameterSetName = "Forge")]
    [string]$ForgeVersion
)

# Change working dir to server root dir
$WorkDir = Split-Path -Path $PSScriptRoot -Parent
Set-Location -Path $WorkDir


#region Logging functions
function Write-LogInfo {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "INFO" -ForegroundColor DarkCyan -NoNewline
    Write-Host "]: $Message"
}

function Write-LogWarn {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "WARN" -ForegroundColor DarkYellow -NoNewline
    Write-Host "]: $Message"
}

function Write-LogError {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "ERROR" -ForegroundColor DarkRed -NoNewline
    Write-Host "]: $Message"
}
#endregion


#region Utility functions
# Copy file or directory with progress bar
function Copy-File {
    param (
        [Parameter(Mandatory)]
        [ValidateScript({ Test-Path $_ })]
        [string]$Source,

        [Parameter(Mandatory)]
        [string]$Destination,

        # Overwrite files at the destination
        [switch]$Force,

        [ValidateNotNullOrEmpty()]
        [int]$DecimalPlace = 2
    )

    # Create the destination or check if contains files
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

    # Get all items to copy
    [array]$items = Get-ChildItem -Path $Source -Recurse -Force

    #Counter
    [int]$curItem = 0
    [int]$totItem = $items.Count

    [int]$curByte = 0
    [double]$totByte = 0
    foreach ($item in $items) { $totByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 } }

    # Iterate through all items and copy them to the destination
    foreach ($item in $items) {
        # Progress bar
        $curItem++
        $curByte += if (-not $item.PSIsContainer) { $item.Length } else { 1 }
        [double]$percent = ((($curItem / $totItem) + ($curByte / $totByte)) / 2) * 100
        [double]$percentComplete = [math]::Round($percent, $DecimalPlace)
        [string]$status = "Item $curItem of $totItem ($($percentComplete.ToString("N$DecimalPlace")) `%) - $($item.Name)"
        Write-Progress -Id 0 -Activity "Copy file in progress..." -Status $status -PercentComplete $percentComplete

        # Build the destination path using the relative path from the source
        [string]$DestinationFullPath = Join-Path -Path $Destination -ChildPath $item.FullName.Substring((Resolve-Path $Source).Path.Length)

        # Copy item to destination (handle directories and files differently)
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
        Write-Host "Detected architecture: $env:PROCESSOR_ARCHITECTURE"
        Write-Host "Required architecture: 64-bit (x64 or ARM64)"
        Write-Host "============================================`n"
        exit 1
    }

    return $arch
}

# Attempt file download via BITS, falling back to Invoke-WebRequest on failure
function Invoke-DonwloadFile {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Url,

        [Parameter(Mandatory = $true, Position = 1)]
        [string]$File
    )

    try {
        Write-LogInfo "(BITS) Downloading $File"
        Start-BitsTransfer -Source $Url -Destination $File -ErrorAction Stop
        Write-LogInfo "Download completed"
    }
    catch {
        Write-LogWarn "BITS failed, trying WebRequest"
        try {
            Write-LogInfo "(WebRequest) Downloading $File"
            Invoke-WebRequest -Uri $Url -OutFile $File -UseBasicParsing -ErrorAction Stop
            Write-LogInfo "Download completed"
        }
        catch { Write-LogError "Download failed $File. Exception: $($_.Exception.Message)" ; exit 1 }
    }
}
#endregion


#region Installation functions
# Install Java locally by downloading and extracting a JRE ZIP archive
function Install-LocalJava {
    param (
        [Parameter(Mandatory)]
        [string]$MajorVersion
    )

    # Determine Java download Url and archive name based on version and system architecture
    $Arch = Get-SysArch
    $JavaZip = "OpenJDK${MajorVersion}U-jre_${Arch}_windows.zip"
    $JavaUrl = "https://api.adoptium.net/v3/binary/latest/${MajorVersion}/ga/windows/${Arch}/jre/hotspot/normal/eclipse"

    # Download Java ZIP archive if it does not already exist locally
    if (-not (Test-Path -Path $JavaZip -PathType Leaf)) { Invoke-DonwloadFile -Url $JavaUrl -File $JavaZip }

    # Extract Java ZIP archive if target directory does not already exist
    if (-not (Test-Path -Path "java" -PathType Container)) {
        try {
            $JavaUnzip = "OpenJDK${MajorVersion}U"
            Write-LogInfo "Extracting $JavaZip"
            Expand-Archive -Path $JavaZip -DestinationPath $JavaUnzip -Force -ErrorAction Stop
            Write-LogInfo "Extraction completed in $JavaUnzip"
        }
        catch { Write-LogError "Java extraction failed. Archive: $JavaZip. Exception: $($_.Exception.Message)"; exit 1 }

        try {
            # Locate extracted Java installation directory (JDK/JRE) within destination folder
            #$JavaUnzip = Get-Item -Path $JavaUnzip
            $JRESource = Get-ChildItem -Path $JavaUnzip -Directory | Where-Object { $_.Name -match "(jdk|jre)-?${MajorVersion}" } | Select-Object -First 1

            # Validate that the Java source directory was found before proceeding
            if (-not $JRESource) { Write-LogError "Failed to locate Java JDK/JRE directory in $JavaUnzip for version $MajorVersion"; exit 1 }

            # Copy extracted Java directory content into "java" and clean up temporary folder
            $DestDir = "java"
            Copy-File -Source $JRESource.FullName -Destination $DestDir
            Remove-Item -Path $JavaUnzip -Force -Recurse
            Write-LogInfo "Local java setup completed. Installed in $DestDir"
        }
        catch { Write-LogError "Local Java setup failed. Exception: $($_.Exception.Message)" ; exit 1 }
    }
    else { Write-LogInfo "Local java already installed (java directory exists)" }
}

# Download and run the Forge installer JAR to set up the server
function Install-Forge {
    param (
        [Parameter(Mandatory)]
        [string]$JavaExe,

        [Parameter(Mandatory)]
        [string]$MCVersion,

        [Parameter(Mandatory)]
        [string]$Version
    )

    # Build Forge installer Url and filename based on Minecraft and Forge versions
    $ForgeInstaller = "forge-${MCVersion}-${Version}-installer.jar"
    $ForgeUrl = "https://maven.minecraftforge.net/net/minecraftforge/forge/${MCVersion}-${Version}/${ForgeInstaller}"

    # Download Forge installer if it does not already exist locally
    if (-not (Test-Path -Path $ForgeInstaller -PathType Leaf)) { Invoke-DonwloadFile -Url $ForgeUrl -File $ForgeInstaller }

    # Run Forge installer if Forge is not already installed (based on libraries directory)
    if (-not (Test-Path -Path "libraries" -PathType Container)) {
        Write-LogInfo "Starting Forge server installer: $ForgeInstaller"
        & $javaExe -jar $ForgeInstaller --installServer
        if ($LASTEXITCODE -ne 0) { Write-LogError "Forge server installation failed. Exit code: $LASTEXITCODE"; exit 1 }
        Write-LogInfo "Forge server installation completed"
    }
    else { Write-LogInfo "Forge server is already installed (libraries directory exists)" }
}
#endregion

# Main execution
if ($InstallJava) { Install-LocalJava -MajorVersion $JavaVersion; exit 0 }
if ($InstallForge) { Install-Forge -JavaExe $JavaExe -MCVersion $MinecraftVersion -Version $ForgeVersion; exit 0 }
