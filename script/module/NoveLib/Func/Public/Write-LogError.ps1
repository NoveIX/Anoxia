# File: NoveLib\Func\Public\Write-LogError.ps1

function Write-LogError {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Host "[" -NoNewline
    Write-Host "ERROR" -ForegroundColor DarkRed -NoNewline
    Write-Host "]: $Message"
}
