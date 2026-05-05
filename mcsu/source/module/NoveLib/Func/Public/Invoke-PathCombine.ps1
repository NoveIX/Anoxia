# File: NoveLib\Func\Public\Invoke-PathCombine.ps1

using namespace System.IO

function Invoke-PathCombine {
    param(
        [Parameter(Mandatory = $true, Position = 0, ValueFromRemainingArguments = $true)]
        [string[]]$Path
    )

    return [string][Path]::Combine($Path)
}
