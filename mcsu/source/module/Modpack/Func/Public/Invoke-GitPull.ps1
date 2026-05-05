# File: Modpack\Func\Public\Invoke-GitPull.ps1

using namespace System.IO

function Invoke-GitPull {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [DirectoryInfo]$Path,

        [Parameter(Position = 1)]
        [FileInfo]$PrivateKey
    )

    # Detect HTTPS or SSH Repository
    [string]$origin = git.exe -C $Path.FullName config --get remote.origin.url

    # Prepare SSH Commnand
    if ($origin -like "git@*") { $env:GIT_SSH_COMMAND = "ssh -i `"$($PrivateKey.FullName)`" StrictHostKeyChecking=accept-new" }

    # Update repository
    Write-GitHeader
    git.exe -C $Path.FullName pull
    Write-GitFooter
}
