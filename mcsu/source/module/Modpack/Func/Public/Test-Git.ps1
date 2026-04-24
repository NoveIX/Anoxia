# File: Modpack\Func\Public\Test-Git.ps1

function Test-Git {
    $gitVer = git.exe --version 2>$null

    # Ensure Git is installed (required dependency)
    if (-not $gitVer) {
        Write-LogFatal "Git is required. Please install Git to continue."
        Write-Host "`nhttps://git-scm.com/downloads/win"
        return $false
    }

    return $true
}
