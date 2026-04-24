# File: NoveLib\Func\Public\Remove-OldLogs.ps1
using namespace System.IO

function Remove-OldLog {
    param (
        [int]$Days = 30,
        [DirectoryInfo]$Path
    )

    # Calculate filter
    $limit = (Get-Date).AddDays(-$Days)

    # Delete logs
    Write-LogInfo "Clearing logs older than $Days days"
    $oldLogs = Get-ChildItem -Path $Path -File | Where-Object { $_.LastWriteTime -lt $limit }
    $oldLogs | Remove-Item -Force

    # Remove logs
    $count = @($oldLogs).Count
    if ($count -gt 0) { $oldLogs | Remove-Item -Force }

    Write-LogInfo "Deleted $count logs"
}
