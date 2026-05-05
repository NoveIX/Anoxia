# File: Modpack\Func\Public\Test-SSH.ps1

function Test-SSH {
    $sshVer = & ssh.exe -V 2>&1

    # Ensure Git is installed (required dependency)
    if (-not ($sshVer.TargetObject -like "OpenSSH_for_Windows_9*")) {
        Write-LogFatal "OpenSSH is required. Please install Windows feature OpenSSH Client to continue."
        Write-Host "`nAdd-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0"
        return $false
    }

    return $true
}
