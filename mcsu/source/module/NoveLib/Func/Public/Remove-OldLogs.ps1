# File: NoveLib\Func\Public\Remove-OldLogs.ps1

using namespace System.IO

function Remove-OldLog {
    param (
        [Parameter(Mandatory = $true)]
        [DirectoryInfo]$Path,
        [int]$Days = 30
    )

    # Calculate filter
    $limit = (Get-Date).AddDays(-$Days)

    # Delete logs
    Write-LogInfo "Removing logs older than: $($limit.ToString("yyyy/MM/dd HH:mm:ss"))"
    $oldLogs = Get-ChildItem -Path $Path -File | Where-Object { $_.LastWriteTime -lt $limit }

    # Remove logs
    $count = @($oldLogs).Count
    if ($count -gt 0) {
        $oldLogs | Remove-Item -Force -ErrorAction SilentlyContinue
        Write-LogInfo "Removed $count old log(s) from $Path"
    }
}
