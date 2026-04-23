# File: Modpack\Func\Invoke-GitPull.ps1

function Invoke-GitPull {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Path,

        [Parameter(Position = 1)]
        [string]$PrivateKey
    )

    # Detect HTTPS or SSH Repository
    [string]$origin = git.exe -C $Path config --get remote.origin.url

    # Prepare SSH Commnand
    if ($origin -like "git@*") { $env:GIT_SSH_COMMAND = "ssh -i `"$PrivateKeyPath`" StrictHostKeyChecking=accept-new" }

    # Update repository
    Write-GitLogHeader
    git.exe -C $Path pull
    Write-GitLogFooter
}