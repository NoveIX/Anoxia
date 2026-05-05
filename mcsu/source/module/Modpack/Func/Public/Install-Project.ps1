# File: Modpack\Func\Public\Install-Project.ps1

using namespace System

function Install-Project {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [pscustomobject]$Config,

        [Parameter(Mandatory = $true, Position = 1)]
        [pscustomobject]$Context
    )

    [Console]::Title = "Installing $($Config.Project.Name)"
    Write-LogInfo "Starting installation: $($Config.Project.Name)"

    # Check if the repository URL is SSH and download SSH keys if necessary
    if ($Config.Project.Repository.Url -like "git@*") {

        # Create key directory if it doesn't exist
        New-Directory -Path $Context.KeyDir | Out-Null

        # SSH private key
        $url = $Config.Project.Git.SSH.PrivateKey.Url
        $privateKey = Join-Path $Context.KeyDir $Config.Project.Git.SSH.PrivateKey.Name

        Write-LogInfo "Downloading SSH private key from $url to $privateKey"
        Invoke-DownloadFile -Url $url -File $privateKey

        if (-not (Test-Path -Path $privateKey -PathType Leaf)) {
            Write-LogError "Failed to download SSH private key."
            throw [InvalidOperationException]::new("Failed to download SSH private key.")
        }



        # SSH public key
        $url = $Config.Project.Git.SSH.PublicKey.Url
        $publicKey = Join-Path $Context.KeyDir $Config.Project.Git.SSH.PublicKey.Name

        Write-LogInfo "Downloading SSH public key from $url to $publicKey"
        Invoke-DownloadFile -Url $url -File $publicKey

        if (-not (Test-Path -Path $publicKey -PathType Leaf)) {
            Write-LogError "Failed to download SSH public key."
            throw [InvalidOperationException]::new("Failed to download SSH public key.")
        }
    }



    if (-not (Test-Path -Path $Context.RepoDir)) {

        # Create repository directory
        New-Directory -Path $Context.RepoDir | Out-Null

        # Clone the repository
        $url = $Config.Project.Repository.Url
        $branch = $Config.Project.Repository.Branch
        $repoDest = Join-Path $Context.RepoDir $Context.Name

        Write-LogInfo "Cloning repository from: $url (branch: $branch)"
        Invoke-GitClone -Url $url -Branch $branch -Path $repoDest -PrivateKey $privateKey
    }



    if (-not (Test-Path -Path (Join-Path $Context.MCModpackDir ".git"))) {

        # Copy repository to modpack directory
        $source = $repoDest
        $destination = $Context.MCModpackDir

        Write-LogInfo "Copying repository to modpack directory"
        Copy-File -Source $source -Destination $destination -Force -ProgressBar -PreserveAttributes
    }
    else {
        Write-LogInfo "Find .git folder. Dev feature already installed."
    }
}
