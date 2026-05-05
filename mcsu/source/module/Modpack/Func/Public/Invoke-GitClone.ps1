# File: Modpack\Func\Public\Invoke-GitClone.ps1

using namespace System
using namespace System.IO

function Invoke-GitClone {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Url,

        [Parameter(Mandatory = $true, Position = 1)]
        [DirectoryInfo]$Path,

        [Parameter(Position = 2)]
        [string]$Branch,

        [Parameter(Position = 3)]
        [FileInfo]$PrivateKey
    )

    # Detect HTTPS or SSH Repository
    if ($Url -like 'git@*') {
        if (-not $PrivateKey) {
            throw [ArgumentException]::new("SSH repository detected but no private key provided.")
        }

        if (-not $PrivateKey.Exists) {
            throw [FileNotFoundException]::new("Private key file not found at path: $($PrivateKey.FullName)")
        }

        if (-not $PrivateKey.PSIsContainer) {
            throw [ArgumentException]::new("Provided private key path is not a file: $($PrivateKey.FullName)")
        }

        if ($PrivateKey.Extension -eq ".pub") {
            throw [ArgumentException]::new("Provided private key file appears to be a public key: $($PrivateKey.FullName)")
        }

        $env:GIT_SSH_COMMAND = "ssh -i `"$($PrivateKey.FullName)`" -o StrictHostKeyChecking=accept-new"
    }

    # Clone only the last commit
    $gitArgs = @("clone", "--depth", "1", "--single-branch")

    # Add branch to clone
    if ($Branch) { $gitArgs += @("-b", $Branch) }

    # Add Repo url and path
    $gitArgs += @($Url, $Path.FullName)

    # clone
    Write-GitHeader
    & git.exe @gitArgs
    Write-GitFooter
}
