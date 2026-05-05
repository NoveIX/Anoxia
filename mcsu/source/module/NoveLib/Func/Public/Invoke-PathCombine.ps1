# File: NoveLib\Func\Public\Invoke-PathCombine.ps1

using namespace System.IO

function Invoke-PathCombine {
    param(
        [Parameter(Mandatory = $true, Position = 0, ValueFromRemainingArguments = $true)]
        [string[]]$Path
    )

    # Call Path.Combine with the provided paths and return the result as a string
    return [string][Path]::Combine($Path)
}
