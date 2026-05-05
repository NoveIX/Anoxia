# File: Modpack\Func\Public\Read-Config.ps1

using namespace System.IO

function Read-Config {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [FileInfo]$FilePath
    )

    # Read and convert config file
    $raw = Get-Content -Path $FilePath -Raw
    $json = $raw | ConvertFrom-Json

    # Return mcsu config
    return $json.mcsu
}
