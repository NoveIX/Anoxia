# File: NoveLib\Func\Public\Write-LogInfo.ps1

function Write-LogInfo {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "INFO" -ForegroundColor Blue -NoNewline
    Write-Host "]: $Message"
}
