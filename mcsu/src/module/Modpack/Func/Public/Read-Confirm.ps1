# File: Modpack\Func\Read-Confirm.ps1

function Read-Confirm {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    # Ask to user
    Write-Host "$Message [Y/n]: " -NoNewline
    $ans = Read-Host

    # Default = Yes if empty
    if ([string]::IsNullOrWhiteSpace($ans)) { return $true }

    # Normalize input
    return $ans.Trim().ToUpper() -eq "Y"
}