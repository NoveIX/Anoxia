# File: Modpack\Func\Public\Wait-BeforeExit.ps1

function Wait-BeforeExit {
    Write-Host "`nPress any key to exit " -NoNewline
    Read-Host
    exit 0
}
