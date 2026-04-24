# File: NoveLib\Func\Public\Invoke-PathCombine.ps1
using namespace System.IO

function Invoke-PathCombine {
    param(
        [Parameter( Mandatory = $true, ValueFromRemainingArguments)]
        [object[]]$Path
    )

    return [Path]::Combine([string[]](@($Path | ForEach-Object { $_ })))
}
