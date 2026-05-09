# File: NoveLib\Func\Public\Write-LogInfo.ps1

function Write-LogWarn {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "WARN" -ForegroundColor DarkYellow -NoNewline
    Write-Host "]: $Message"
}
