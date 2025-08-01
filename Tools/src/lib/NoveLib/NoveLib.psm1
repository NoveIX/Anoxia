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

    try {
        Start-BitsTransfer -Source $URL -Destination $OutFile -ErrorAction Stop
        return 0
    }
    catch {
        try {
            Write-LogHost -Message "Failed to download with Start-BitsTransfer" -Level WARN
            Invoke-WebRequest -Uri $URL -OutFile $OutFile
            return 0
        }
        catch {
            try {
                Write-LogHost -Message "Failed to download with Invoke-WebRequest" -Level WARN
                curl.exe -# $URL -o $OutFile
                return 0
            }
            catch {
                return 1
            }
        }
    }
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
    Write-Host
    Write-Host "# ===================== Git log message ===================== #"
    Write-Host
}


# =================================================================================================== #

#region UI Git Bot
function Invoke-UIGitBot {
    [CmdletBinding()]
    param ()
    Write-Host
    Write-Host "# =========================================================== #"
    Write-Host
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

    if (-not ($Answer -eq "Y" -or [string]::IsNullOrWhiteSpace($Answer))) {
        Write-LogHost -Message "Operation canceled by user. Closing in 5 seconds..." -Level INFO
        Start-Sleep -Seconds 5
        Exit 1
    }
}
#endregion