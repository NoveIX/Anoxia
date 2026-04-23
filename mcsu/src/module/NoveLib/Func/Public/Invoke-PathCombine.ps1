# File: NoveLib\Func\Invoke-PathCombine.ps1

function Invoke-PathCombine {
    param(
        [Parameter( Mandatory = $true, ValueFromRemainingArguments)]
        [object[]]$Path
    )

    return [System.IO.Path]::Combine([string[]](@($Path | ForEach-Object { $_ })))
}