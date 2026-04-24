# File: NoveLib\Func\Public\Write-AsciiArt.ps1

function Write-AsciiArt {
    param (
        [Parameter(Position = 0)]
        [ValidateRange(0, 10)]
        [double]$DisplaySeconds = 2,
        [switch]$RandomColor,
        [switch]$Clear
    )

    # Get module version
    $ver = $MyInvocation.MyCommand.Module.Version.ToString()

    # Define ASCII Art
    $AsciiArt = @'
 /$$   /$$                               /$$       /$$ /$$      
| $$$ | $$                              | $$      |__/| $$      
| $$$$| $$  /$$$$$$  /$$    /$$ /$$$$$$ | $$       /$$| $$$$$$$ 
| $$ $$ $$ /$$__  $$|  $$  /$$//$$__  $$| $$      | $$| $$__  $$
| $$  $$$$| $$  \ $$ \  $$/$$/| $$$$$$$$| $$      | $$| $$  \ $$
| $$\  $$$| $$  | $$  \  $$$/ | $$_____/| $$      | $$| $$  | $$
| $$ \  $$|  $$$$$$/   \  $/  |  $$$$$$$| $$$$$$$$| $$| $$$$$$$/
|__/  \__/ \______/     \_/    \_______/|________/|__/|_______/ 
'@

    # Display ASCII Art
    $color = if ($RandomColor) { Get-RandomColor } else { "DarkCyan" }
    Write-Host "`n$AsciiArt" -ForegroundColor $color
    Write-Host "`nBy NoveIX - Module Ver. $ver`n"
    Start-Sleep -Seconds $DisplaySeconds
    if ($Clear) { Clear-Host }
}
