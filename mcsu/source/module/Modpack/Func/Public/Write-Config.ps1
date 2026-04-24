# File: Modpack\Func\Public\Write-Config.ps1
using namespace System.IO

function Write-Config {
    Param (
        [Parameter(Mandatory = $true, Position = 0)]
        [FileInfo]$FilePath,

        [Parameter(Mandatory = $true, Position = 1)]
        [PSCustomObject]$Config
    )

    # Create mcsu config
    $mcsuConfig = [PSCustomObject]@{ mcsu = $Config }
    $json = $mcsuConfig | ConvertTo-Json -Depth 10

    # ensure directory exist
    New-Directory -Path $FilePath.Directory

    $json | Out-File -FilePath $FilePath -Encoding utf8
}
