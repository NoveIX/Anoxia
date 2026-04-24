# File: Modpack\Func\Public\Invoke-GitClone.ps1
using namespace System.IO

function Invoke-GitClone {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Url,

        [Parameter(Position = 1)]
        [string]$Branch,

        [Parameter(Mandatory = $true, Position = 2)]
        [DirectoryInfo]$Path,

        [Parameter(Position = 3)]
        [FileInfo]$PrivateKey
    )

    # Detect HTTPS or SSH Repository
    if ($Url -like "git@*") { $env:GIT_SSH_COMMAND = "ssh -i `"$($PrivateKey.FullName)`" StrictHostKeyChecking=accept-new" }

    # Clone only the last commit
    $gitArgs = @("clone", "--depth", "1", "--single-branch")

    # Add branch to clone
    if ($Branch) { $gitArgs += @("-b", $Branch) }

    # Add Repo url and path
    $gitArgs += @($Url, $Path.FullName)

    # clone
    Write-GitLogHeader
    git.exe @args
    Write-GitLogFooter
}
