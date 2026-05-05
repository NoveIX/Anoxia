#region UI Git
function Invoke-UIGitTop { Write-Host "`n# ====================[ Git log message ]==================== #`n" }
function Invoke-UIGitBot { Write-Host "`n# =========================================================== #`n" }
#endregion

# ================================================================================================ #

#region Selection
function Confirm-Selection {
    [CmdletBinding()]
    param (
        [string]$Message,
        [string]$Answer = $null
    )

    Write-Host "$Message (Y/n): " -NoNewline
    if ($null -ne $Answer) {
        $Answer = Read-Host
    }
    else {
        Write-Host "Y"
    }

    if ($Answer -eq "Y" -or [string]::IsNullOrWhiteSpace($Answer)) {
        return $true
    }
    else {
        return $false
    }
}
#endregion

# ================================================================================================ #

#region git pull
function Invoke-GitPull {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Location
    )

    [string]$origin = git -C $Location config --get remote.origin.url
    if ($origin -like "git@*") {
        $env:GIT_SSH_COMMAND = "ssh -i `"$PrivateKeyPath`""
        git -C $Location pull
    }
    else {
        git -C $Location pull
    }
}
#endregion

# ================================================================================================ #

#region git clone
function Invoke-GitClone {
    param (
        [Parameter(Mandatory = $true)]
        [string]$RepoUrl,
        [string]$RepoBranch,

        [Parameter(Mandatory = $true)]
        [string]$Location,

        [Parameter(Mandatory = $true)]
        [string]$PrivateKeyPath
    )


    if ($RepoUrl -like "git@*") {
        $env:GIT_SSH_COMMAND = "ssh -i `"$PrivateKeyPath`""
        if ($RepoBranch) { git clone -b $RepoBranch --depth 1 --single-branch $RepoUrl $Location }
        else { git clone --depth 1 --single-branch $RepoUrl $Location }
    }
    else {
        if ($RepoBranch) { git clone -b $RepoBranch --depth 1 --single-branch $RepoUrl $Location }
        else { git clone --depth 1 --single-branch $RepoUrl $Location }
    }
}
#endregion