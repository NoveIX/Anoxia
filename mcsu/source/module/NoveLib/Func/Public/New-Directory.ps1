# File: NoveLib\Func\Public\New-Directory.ps1

using namespace System.IO

function New-Directory {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [DirectoryInfo[]]$Path
    )

    # Ensure directory exist
    if (-not (Test-Path -Path $Path -PathType Container)) { New-Item -Path $Path -ItemType Directory | Out-Null }
}
