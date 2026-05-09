# File: NoveLib\Func\Public\Invoke-PathCombine.ps1

function Invoke-PathCombine {
    param(
        [Parameter(Mandatory = $true, Position = 0, ValueFromRemainingArguments = $true)]
        [string[]]$Path
    )

    # Call Path.Combine with the provided paths and return the result as a string
    return [string][System.IO.Path]::Combine($Path)
}
