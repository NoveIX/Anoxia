#region AsciiArt
function Write-AsciiArt {
    [CmdletBinding()]
    param ()

    $AsciiArt = @'
                                                                
 /$$   /$$                               /$$       /$$ /$$      
| $$$ | $$                              | $$      |__/| $$      
| $$$$| $$  /$$$$$$  /$$    /$$ /$$$$$$ | $$       /$$| $$$$$$$ 
| $$ $$ $$ /$$__  $$|  $$  /$$//$$__  $$| $$      | $$| $$__  $$
| $$  $$$$| $$  \ $$ \  $$/$$/| $$$$$$$$| $$      | $$| $$  \ $$
| $$\  $$$| $$  | $$  \  $$$/ | $$_____/| $$      | $$| $$  | $$
| $$ \  $$|  $$$$$$/   \  $/  |  $$$$$$$| $$$$$$$$| $$| $$$$$$$/
|__/  \__/ \______/     \_/    \_______/|________/|__/|_______/ 
                                                                
By NoveIX                                                       
                                                                
'@

    Write-Host $AsciiArt
    Start-Sleep -Seconds 2
}
#endregion

# =================================================================================================== #

#region Log color map
function Get-LogColorMap {
    [CmdletBinding()]
    param (
        # Log level - restricted to specific set of valid values
        [Parameter(Mandatory = $true)]
        [ValidateSet("TRACE", "DEBUG", "INFO", "WARN", "FAIL", "DONE")]
        [string]$Level
    )

    # Define a map from log levels to console colors
    $colorMap = @{
        "TRACE" = 'DarkGray'
        "DEBUG" = 'Gray'
        "INFO"  = 'DarkCyan'
        "WARN"  = 'Yellow'
        "FAIL"  = 'Red'
        "DONE"  = 'Green'
    }

    # Return the color corresponding to the log level
    return $colorMap[$Level]
}
#endregion

# =================================================================================================== #

#Region Log Host
function Write-LogHost {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]$Message,
        [Parameter(Mandatory = $true)]
        [ValidateSet("TRACE", "DEBUG", "INFO", "WARN", "FAIL", "DONE")]
        [string]$Level
    )

    $color = Get-LogColorMap -Level $Level
    Write-Host "[" -NoNewline
    Write-Host "$Level" -ForegroundColor $color -NoNewline
    Write-Host "]" -NoNewline
    Write-Host " - $Message"
}
#endregion

# =================================================================================================== #

#region Download File
function Start-DownloadFile {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]$URL,
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]$OutFile
    )

    # Try Start-BitsTransfer
    try {
        Start-BitsTransfer -Source $URL -Destination $OutFile -ErrorAction Stop
        return 0 # 0 = Success
    }
    catch {
        Write-LogHost -Message "Failed download with 'Start-BitsTransfer'" -Level WARN
    }

    # Try Invoke-WebRequest
    try {
        Invoke-WebRequest -Uri $URL -OutFile $OutFile -ErrorAction Stop
        return 0 # 0 = Success
    }
    catch {
        Write-LogHost -Message "Failed download with 'Invoke-WebRequest'" -Level WARN
    }

    # Try curl.exe
    & curl.exe --fail $URL -o $OutFile *> $null
    if ($LASTEXITCODE -eq 0) {
        return 0 # 0 = Success
    }
    else {
        Write-LogHost -Message "Failed download with 'curl.exe'" -Level WARN
    }


    # Try System.Net.WebClient
    try {
        $wc = New-Object System.Net.WebClient
        $wc.DownloadFile($URL, $OutFile)
        return 0 # 0 = Success
    }
    catch {
        Write-LogHost -Message "Failed download with 'System.Net.WebClient'" -Level WARN
    }

    # all methods have failed
    return 1 # 1 = Failed
}
#endregion

# =================================================================================================== #

#region File Fast
function Copy-FileFast {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [ValidateScript({ Test-Path $_ })]
        [string]$Source,

        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]$Destination
    )

    # Create the destination if it does not exist
    if (-not (Test-Path -Path $Destination -PathType Container)) {
        New-Item -ItemType Directory -Path $Destination -Force | Out-Null
    }

    # Resolve full path
    $Source = Resolve-Path -LiteralPath $Source
    $Destination = Resolve-Path -LiteralPath $Destination

    # Recursive copy with attribute preservation
    [array]$items = Get-ChildItem -Path $Source -Recurse -Force

    #Counter
    [int]$currentItem = 0
    [int]$totalItem = $items.Count
    [int]$decimalPlaces = 2

    foreach ($item in $items) {
        # Progress bar
        $currentItem++
        [double]$averagePercent = (($currentItem / $totalItem) * 100)
        [double]$percentComplete = [math]::Round($averagePercent, $decimalPlaces)
        [string]$percentString = $percentComplete.ToString("N$decimalPlaces")
        [string]$status = "Item $currentItem of $totalItem ($percentString `%) - $($item.Name)"
        Write-Progress -Id 0 -Activity "Copy in progress..." -Status $status -PercentComplete $percentComplete

        # Calculate path relative path on destination path
        [string]$SourceRelativePath = $item.FullName.Substring((Resolve-Path $Source).Path.Length)
        [string]$DestinationFullPath = Join-Path -Path $Destination -ChildPath $SourceRelativePath

        # Copy item to destination
        if ($item.PSIsContainer) {
            # Copy folder
            [string]$DestinationFullPathParent = Split-Path $DestinationFullPath -Parent
            Copy-Item -Path $item.FullName -Destination $DestinationFullPathParent -Force
        }
        else {
            # Copy item
            Copy-Item -Path $item.FullName -Destination $DestinationFullPath -Force
        }

        # restore attribute
        [System.IO.FileSystemInfo]$sourceItem = Get-Item -LiteralPath $item.FullName -Force
        [System.IO.FileSystemInfo]$destinationItem = Get-Item -LiteralPath $DestinationFullPath -Force
        if ($sourceItem -and $destinationItem) {
            try {
                $destinationItem.Attributes = $sourceItem.Attributes
            }
            catch {
                Write-LogHost -Message "($currentItem / $totalItem) Failed to set attributes on: $DestinationFullPath - $_" -Level FAIL
            }
        }
    }

    Start-Sleep -Milliseconds 200
    Write-Progress -Id 0 -Activity "Copy completed" -Completed
    return 0
}
#endregion

# =================================================================================================== #

#region UI Git Top
function Invoke-UIGitTop {
    [CmdletBinding()]
    param ()
    Write-Host "`n# ===================== Git log message ===================== #`n"
}


# =================================================================================================== #

#region UI Git Bot
function Invoke-UIGitBot {
    [CmdletBinding()]
    param ()
    Write-Host "`n# =========================================================== #`n"
}
#endregion

# =================================================================================================== #

#region Selection
function Confirm-Selection {
    [CmdletBinding()]
    param (
        [string]$Message,
        [string]$Answer = $null
    )

    Write-Host "$Message (Y/n): " -NoNewline
    if ($null -ne $Answer) {
        $Answer = Read-Host
    }
    else {
        Write-Host "Y"
    }

    if ($Answer -eq "Y" -or [string]::IsNullOrWhiteSpace($Answer)) {
        return 0
    }
    else {
        return 1
    }
}
#endregion

# =================================================================================================== #

#region Test JAVA
function Test-JavaVersion {

    # get java version
    $output = & java --version 2>$null
    if (-not $output) {
        Write-Host "Java 11+ is not installed or is not in the PATH."
        return 1
    }

    # Extract the first line (e.g., openjdk version “17.0.8” 2024-01-16)
    $firstLine = $output | Select-Object -First 1

    # Try extracting the major version from formats such as “17.0.8” or “21.0.2”
    if ($firstLine -match '(\d+)\.\d+(\.\d+)?') {
        $major = [int]$matches[1]
        return $major
    }
    else {
        Write-Host “Unable to determine Java version from string: $firstLine”
        return 2
    }
}
#endregion