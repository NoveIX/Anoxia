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
                                                                
By NoveIX - Ver. 1.1.0                                          
                                                                
'@

    Write-Host $AsciiArt
    Start-Sleep -Seconds 2
}
#endregion

# ================================================================================================ #

#region Log Class
class LogSetting {
    # Class properties
    [string]$FilePath
    [string]$LogMinLevel
    [string]$LogFormat
    [string]$ConsoleOutput
    [bool]$useMillisecond
    [bool]$useDotNET

    # Constructor
    LogSetting(
        [string]$FilePath,
        [string]$LogMinLevel,
        [string]$LogFormat,
        [string]$ConsoleOutput,
        [bool]$useMillisecond,
        [bool]$useDotNET
    ) {
        $this.FilePath = $FilePath
        $this.LogMinLevel = $LogMinLevel
        $this.LogFormat = $LogFormat
        $this.ConsoleOutput = $ConsoleOutput
        $this.useMillisecond = $useMillisecond
        $this.useDotNET = $useDotNET
    }
}
#endregion

# ================================================================================================ #

#region Log color map
function Write-LogColorMap {
    param (
        [Parameter(Mandatory = $true)]
        [ValidateSet("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")]
        [string]$Level
    )

    # Define log color map
    [hashtable]$colorMap = @{
        "TRACE" = 'DarkGray'
        "DEBUG" = 'Gray'
        "INFO"  = 'DarkCyan'
        "WARN"  = 'Yellow'
        "ERROR" = 'Red'
        "FATAL" = 'DarkRed'
        "DONE"  = 'Green'
    }

    return $colorMap[$Level]
}
#endregion

# ================================================================================================ #

#Region Default LogSetting
function Set-DefaultLogSetting {
    [CmdletBinding()]
    param (
        # Log Definition
        [string]$Filename,
        [string]$Path,
        [ValidateSet('TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'DONE')]
        [string]$LogMinLevel = "INFO",

        # log User
        [switch]$LogUser,
        [switch]$LogUserSubPath,

        # Insert date in the name
        [ValidateSet('None', 'Date', 'Datetime')]
        [string]$DateLogName = "None",
        [ValidateSet('Time', 'Datetime')]
        [string]$LogFormat = "Time",
        [switch]$UseMillisecond,

        # Print in console
        [ValidateSet("None", "Message", "Timestamp")]
        [string]$ConsoleOutput = "None",

        # use .NET to write in the file
        [bool]$UseDotNET = $true
    )

    # Set Module scope default log setting
    $Script:DefaultLogSetting = New-LogSetting -Filename $Filename -Path $Path -LogMinLevel $LogMinLevel -LogUser:$LogUser `
        -LogUserSubPath:$LogUserSubPath -DateLogName $DateLogName -LogFormat $LogFormat -UseMillisecond:$UseMillisecond `
        -ConsoleOutput $ConsoleOutput -UseDotNET:$UseDotNET

    return $DefaultLogSetting
}
#endregion

# ================================================================================================ #

#region New LogSetting
function New-LogSetting {
    [CmdletBinding()]
    param (
        # Log Definition
        [string]$Filename,
        [string]$Path,
        [ValidateSet('TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'DONE')]
        [string]$LogMinLevel = "INFO",

        # log User
        [switch]$LogUser,
        [switch]$LogUserSubPath,

        # Insert log format
        [ValidateSet('None', 'Date', 'Datetime')]
        [string]$DateLogName = "None",
        [ValidateSet('Time', 'Datetime')]
        [string]$LogFormat = "Time",
        [switch]$UseMillisecond,

        # Console mode
        [ValidateSet("None", "Message", "Timestamp")]
        [string]$ConsoleOutput = "None",

        # Write with .net
        [bool]$UseDotNET = $true
    )

    # =======================================================[ Handle path ]======================================================== #

    # Log Path
    if (-not $Path) {
        # If the script was not started from a file, use the current folder.
        $basePath = if ($MyInvocation.ScriptName) { $PSScriptRoot } else { $PWD }
        $Path = Join-Path -Path $basePath -ChildPath "logs"
    }
    elseif (-not ([System.IO.Path]::IsPathRooted($Path))) {
        # Converts to absolute path if relative
        $Path = (Resolve-Path -Path (Join-Path -Path $PWD -ChildPath $Path)).Path
    }

    # =====================================================[ Handle Filename ]====================================================== #

    # Defines a log file name if missing
    if (-not $Filename) {
        $Filename = if ($MyInvocation.ScriptName) {
            [System.IO.Path]::GetFileNameWithoutExtension($MyInvocation.MyCommand.Path)
        }
        else { "log" }
    }
    else { $Filename = [System.IO.Path]::GetFileNameWithoutExtension($Filename) }

    # ====================================================[ Construct log path ]==================================================== #

    # Start dialing the filename
    $file = $Filename

    # Add username if required
    if ($LogUser) { $file += "_$env:USERNAME" }

    # Date management in file name
    if ($DateLogName -eq "Date") { $file += "_$(Get-Date -Format "yyyy-MM-dd")" }
    elseif ($DateLogName -eq "Datetime") { $file += "_$(Get-Date -Format "yyyy-MM-dd_hh-mm-ss")" }

    # Add extension to file
    $file += ".log"

    # Construct the full path to the file
    if ($LogUserSubPath) { $FilePath = Join-Path -Path $LogUserSubPath -ChildPath $file }
    else { $FilePath = Join-Path -Path $Path -ChildPath $file }

    # ================================================[ Return NoveLib.LogSetting ]================================================= #

    # Create and return an instance of the NoveLib.LogSetting class with the provided configuration parameters
    $logSettingObject = [LogSetting]::new(
        $FilePath,
        $LogMinLevel,
        $LogFormat,
        $ConsoleOutput,
        $useMillisecond,
        $UseDotNET
    )

    return $logSettingObject
}
#endregion

# ================================================================================================ #

#region Log
function Write-Log {
    [CmdletBinding()]
    param (
        # Log Parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        [Parameter(Mandatory = $true)]
        [ValidateSet('TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'DONE')]
        [string]$Level,

        [Parameter(Mandatory = $true)]
        [LogSetting]$LogSetting,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime
    )

    # ========================================================[ Definition ]======================================================== #

    # Separate LogSetting
    [string]$FilePath = $LogSetting.FilePath
    [string]$LogFormat = $LogSetting.LogFormat
    [string]$ConsoleOutput = $LogSetting.ConsoleOutput
    [bool]$useMilliseconds = $LogSetting.useMilliseconds
    [bool]$useDotNET = $LogSetting.useDotNET

    # =======================================================[ Console mode ]======================================================= #

    # Console output configuration
    [hashtable]$outMap = @{
        "None"      = @{ msg = $false; time = $false }
        "Message"   = @{ msg = $true; time = $false }
        "Timestamp" = @{ msg = $true; time = $true }
    }

    # Return the corresponding mapping if the mode is valid
    [hashtable]$consoleConfig = $outMap[$ConsoleOutput]

    # Prepare time output
    $format = switch ($LogFormat) {
        "Time" { if ($useMilliseconds) { "HH:mm:ss.fff" } else { "HH:mm:ss" } }
        "Datetime" { if ($useMilliseconds) { "yyyy-MM-dd HH:mm:ss.fff" } else { "yyyy-MM-dd HH:mm:ss" } }
    }

    $timeStamp = Get-Date -Format $format

    # ======================================================[ Write console ]======================================================= #

    # Print messages in Console
    if ($consoleConfig.msg -or $Print) {

        # Print Time
        if ($consoleConfig.time -or $PrintTime) { Write-Host "[$timeStamp] " -NoNewline }

        # Retrieves color for level, defaulting to no color
        [string]$color = Write-LogColorMap -Level $Level

        Write-Host "[" -NoNewline
        Write-Host "$Level" -ForegroundColor $color -NoNewline
        Write-Host "]" -NoNewline
        Write-Host " - $Message"
    }

    # ======================================================[ Write log file ]====================================================== #

    # Create file if not exist
    if (-not (Test-Path -Path $FilePath)) { New-Item -Path $FilePath -ItemType File -Force | Out-Null }

    # Log file output format
    [string]$logFormat = "[$timeStamp] [$Level] - $Message"

    # Write log format level and message to the log file, using .NET to enable file sharing
    $fs = $null
    $sw = $null

    try {
        if ($useDotNET) {
            $fs = [System.IO.File]::Open($FilePath, [System.IO.FileMode]::Append, [System.IO.FileAccess]::Write, [System.IO.FileShare]::Read)
            $sw = New-Object System.IO.StreamWriter($fs, [System.Text.Encoding]::UTF8)
            $sw.WriteLine($logFormat)
            $sw.Flush()
        }

        # Use Powershell Add-Content
        else { Add-Content -Path $FilePath -Value $logFormat }
    }
    catch { Write-Error "Error while writing to log file: $($_.Exception.Message)" }
    finally {
        if ($sw) { $sw.Close() }
        if ($fs) { $fs.Close() }
    }
}
#endregion

# ================================================================================================ #

#region Log DONE
function Write-LogDone {
    [CmdletBinding()]
    param(
        # Log parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime,

        # Force use another log setting
        [LogSetting]$LogSetting = $DefaultLogSetting
    )

    # ======================================================[ Validate object ]===================================================== #

    if (-not $LogSetting) {
        [string]$functionName = $MyInvocation.MyCommand.Name
        [int]$scriptLine = $MyInvocation.ScriptLineNumber

        $sysMsg = "[$functionName] line [$scriptLine]: DefaultLogSetting is not defined. "
        $sysMsg += "Use Set-DefaultLogSetting at the start of your script."
        throw [System.InvalidOperationException]::new($sysMsg)
    }

    # ======================================================[ Break function ]====================================================== #

    # Validate Level
    [string]$MyLevel = "DONE"
    [string]$LogMinLevel = $LogSetting.LogMinLevel
    [array]$levelOrder = @("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")
    [int]$curIndex = $levelOrder.IndexOf($MyLevel)
    [int]$minIndex = $levelOrder.IndexOf($LogMinLevel)

    # Skip this log if its level is below the minimum
    if ($curIndex -lt $minIndex) { return }

    # ======================================================[ Core function ]======================================================= #

    if ($Print -and $PrintTime) { $Print = $false }

    # Call Main function
    Write-Log -Message $Message -Level $MyLevel -LogSetting $LogSetting -Print:$Print -PrintTime:$PrintTime
}
#endregion

# ================================================================================================ #

#region Log INFO
function Write-LogInfo {
    [CmdletBinding()]
    param(
        # Log parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime,

        # Force use another log setting
        [LogSetting]$LogSetting = $DefaultLogSetting
    )

    # ======================================================[ Validate object ]===================================================== #

    if (-not $LogSetting) {
        [string]$functionName = $MyInvocation.MyCommand.Name
        [int]$scriptLine = $MyInvocation.ScriptLineNumber

        $sysMsg = "[$functionName] line [$scriptLine]: DefaultLogSetting is not defined. "
        $sysMsg += "Use Set-DefaultLogSetting at the start of your script."
        throw [System.InvalidOperationException]::new($sysMsg)
    }

    # ======================================================[ Break function ]====================================================== #

    # Validate Level
    [string]$MyLevel = "INFO"
    [string]$LogMinLevel = $LogSetting.LogMinLevel
    [array]$levelOrder = @("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")
    [int]$curIndex = $levelOrder.IndexOf($MyLevel)
    [int]$minIndex = $levelOrder.IndexOf($LogMinLevel)

    # Skip this log if its level is below the minimum
    if ($curIndex -lt $minIndex) { return }

    # ======================================================[ Core function ]======================================================= #

    if ($Print -and $PrintTime) { $Print = $false }

    # Call Main function
    Write-Log -Message $Message -Level $MyLevel -LogSetting $LogSetting -Print:$Print -PrintTime:$PrintTime
}
#endregion

# ================================================================================================ #

#region Log WARN
function Write-LogWarn {
    [CmdletBinding()]
    param(
        # Log parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime,

        # Force use another log setting
        [LogSetting]$LogSetting = $DefaultLogSetting
    )

    # ======================================================[ Validate object ]===================================================== #

    if (-not $LogSetting) {
        [string]$functionName = $MyInvocation.MyCommand.Name
        [int]$scriptLine = $MyInvocation.ScriptLineNumber

        $sysMsg = "[$functionName] line [$scriptLine]: DefaultLogSetting is not defined. "
        $sysMsg += "Use Set-DefaultLogSetting at the start of your script."
        throw [System.InvalidOperationException]::new($sysMsg)
    }

    # ======================================================[ Break function ]====================================================== #

    # Validate Level
    [string]$MyLevel = "WARN"
    [string]$LogMinLevel = $LogSetting.LogMinLevel
    [array]$levelOrder = @("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")
    [int]$curIndex = $levelOrder.IndexOf($MyLevel)
    [int]$minIndex = $levelOrder.IndexOf($LogMinLevel)

    # Skip this log if its level is below the minimum
    if ($curIndex -lt $minIndex) { return }

    # ======================================================[ Core function ]======================================================= #

    if ($Print -and $PrintTime) { $Print = $false }

    # Call Main function
    Write-Log -Message $Message -Level $MyLevel -LogSetting $LogSetting -Print:$Print -PrintTime:$PrintTime
}
#endregion

# ================================================================================================ #

#region Log ERROR
function Write-LogError {
    [CmdletBinding()]
    param(
        # Log parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime,

        # Force use another log setting
        [LogSetting]$LogSetting = $DefaultLogSetting
    )

    # ======================================================[ Validate object ]===================================================== #

    if (-not $LogSetting) {
        [string]$functionName = $MyInvocation.MyCommand.Name
        [int]$scriptLine = $MyInvocation.ScriptLineNumber

        $sysMsg = "[$functionName] line [$scriptLine]: DefaultLogSetting is not defined. "
        $sysMsg += "Use Set-DefaultLogSetting at the start of your script."
        throw [System.InvalidOperationException]::new($sysMsg)
    }

    # ======================================================[ Break function ]====================================================== #

    # Validate Level
    [string]$MyLevel = "ERROR"
    [string]$LogMinLevel = $LogSetting.LogMinLevel
    [array]$levelOrder = @("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")
    [int]$curIndex = $levelOrder.IndexOf($MyLevel)
    [int]$minIndex = $levelOrder.IndexOf($LogMinLevel)

    # Skip this log if its level is below the minimum
    if ($curIndex -lt $minIndex) { return }

    # ======================================================[ Core function ]======================================================= #

    if ($Print -and $PrintTime) { $Print = $false }

    # Call Main function
    Write-Log -Message $Message -Level $MyLevel -LogSetting $LogSetting -Print:$Print -PrintTime:$PrintTime
}
#endregion

# ================================================================================================ #

#region Log FATAL
function Write-LogFatal {
    [CmdletBinding()]
    param(
        # Log parameter
        [Parameter(Mandatory = $true)]
        [string]$Message,

        # Force console print
        [switch]$Print,
        [switch]$PrintTime,

        # Force use another log setting
        [LogSetting]$LogSetting = $DefaultLogSetting
    )

    # ======================================================[ Validate object ]===================================================== #

    if (-not $LogSetting) {
        [string]$functionName = $MyInvocation.MyCommand.Name
        [int]$scriptLine = $MyInvocation.ScriptLineNumber

        $sysMsg = "[$functionName] line [$scriptLine]: DefaultLogSetting is not defined. "
        $sysMsg += "Use Set-DefaultLogSetting at the start of your script."
        throw [System.InvalidOperationException]::new($sysMsg)
    }

    # ======================================================[ Break function ]====================================================== #

    # Validate Level
    [string]$MyLevel = "FATAL"
    [string]$LogMinLevel = $LogSetting.LogMinLevel
    [array]$levelOrder = @("TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "DONE")
    [int]$curIndex = $levelOrder.IndexOf($MyLevel)
    [int]$minIndex = $levelOrder.IndexOf($LogMinLevel)

    # Skip this log if its level is below the minimum
    if ($curIndex -lt $minIndex) { return }

    # ======================================================[ Core function ]======================================================= #

    if ($Print -and $PrintTime) { $Print = $false }

    # Call Main function
    Write-Log -Message $Message -Level $MyLevel -LogSetting $LogSetting -Print:$Print -PrintTime:$PrintTime
}
#endregion

# ================================================================================================ #

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

    # Try Invoke-WebRequest
    try {
        Invoke-WebRequest -Uri $URL -OutFile $OutFile -ErrorAction Stop
        return $true
    }
    catch {
        Write-LogHost -Message "Failed download with 'Invoke-WebRequest'" -Level WARN
    }

    # Try Start-BitsTransfer
    try {
        Start-BitsTransfer -Source $URL -Destination $OutFile -ErrorAction Stop
        return $true
    }
    catch {
        Write-LogHost -Message "Failed download with 'Start-BitsTransfer'" -Level WARN
    }

    # Try curl.exe
    & curl.exe --fail $URL -o $OutFile *> $null
    if ($LASTEXITCODE -eq 0) {
        return $true
    }
    else {
        Write-LogHost -Message "Failed download with 'curl.exe'" -Level WARN
    }


    # Try System.Net.WebClient
    try {
        $wc = New-Object System.Net.WebClient
        $wc.DownloadFile($URL, $OutFile)
        return $true
    }
    catch {
        Write-LogHost -Message "Failed download with 'System.Net.WebClient'" -Level WARN
    }

    # all methods have failed
    return $false
}
#endregion

# ================================================================================================ #

#region File Fast
function Copy-File {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [ValidateScript({ Test-Path $_ })]
        [string]$Source,

        [Parameter(Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]$Destination,

        # Overwrite files at the destination if they already exist
        [switch]$Force,

        [ValidateNotNullOrEmpty()]
        [int]$decimalPlaces = 2
    )

    # Create the destination if it does not exist
    if (-not (Test-Path -Path $Destination -PathType Container)) {
        New-Item -Path $Destination -ItemType Directory -Force | Out-Null
    }
    else {
        if ((Get-ChildItem -Path $Destination -Force).Count -gt 0 -and -not $Force) {
            $sysMsg = "The path '$Destination' already exists and is not empty. "
            $sysMsg += "Operation aborted to prevent data loss. Use the 'Force' parameter to overwrite the existing contents."
            throw [System.InvalidOperationException]::new($sysMsg)
        }
    }

    # Resolve full path
    $Source = Resolve-Path -LiteralPath $Source
    $Destination = Resolve-Path -LiteralPath $Destination

    # Recursive copy with attribute preservation
    [array]$items = Get-ChildItem -Path $Source -Recurse -Force

    #Counter
    [int]$currentItem = 0
    [int]$totalItems = $items.Count

    [int]$currentByte = 0
    [double]$totalBytes = 0
    foreach ($item in $items) { $totalBytes += $item.Length }

    foreach ($item in $items) {
        # Progress bar
        $currentItem++
        $currentByte += $item.Length
        [double]$averagePercent = (((($currentItem / $totalItems) + ($currentByte / $totalBytes)) / 2) * 100)
        [double]$percentComplete = [math]::Round($averagePercent, $decimalPlaces)
        [string]$percentString = $percentComplete.ToString("N$decimalPlaces")
        [string]$status = "Item $currentItem of $totalItems ($percentString `%) - $($item.Name)"
        Write-Progress -Id 0 -Activity "Copy in item progress..." -Status $status -PercentComplete $percentComplete

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
            try { $destinationItem.Attributes = $sourceItem.Attributes }
            catch { Write-Warning -Message "($currentItem / $totalItem) Failed to set attributes on: $DestinationFullPath - $($_.Exception.Message)" }
        }
    }

    Start-Sleep -Milliseconds 200
    Write-Progress -Id 0 -Activity "Copy completed" -Completed
    return $true
}

#endregion

# ================================================================================================ #