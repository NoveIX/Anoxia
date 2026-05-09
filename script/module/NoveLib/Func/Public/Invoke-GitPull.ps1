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

    # Prepare SSH Command
    if ($origin -like 'git@*') {
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

    # Update repository
    Write-GitHeader
    & git.exe -C $Path.FullName pull
    Write-GitFooter
}
