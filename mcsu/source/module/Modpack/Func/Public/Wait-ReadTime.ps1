# File: Modpack\Func\Public\Wait-ReadTime.ps1

function Wait-ReadTime {
    Write-Host "`nScript finished. Closing in 15 seconds."
    Start-Sleep -Seconds 12
    Write-Host "`nClosing: 3 " -NoNewline
    Start-Sleep -Seconds 1
    Write-Host "2 " -NoNewline
    Start-Sleep -Seconds 1
    Write-Host "1 " -NoNewline
    Start-Sleep -Seconds 1
    Write-Host "0 " -NoNewline
}
