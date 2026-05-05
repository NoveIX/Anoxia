# File: NoveLib\Func\Public\Write-AsciiArt.ps1

function Write-AsciiArt {
    param (
        [Parameter(Position = 0)]
        [ValidateRange(0, 10)]
        [double]$DisplaySeconds = 2,

        # ValidateSet for Write-Host foreground colors
        [Parameter(Position = 1)]
        [ValidateSet("Black", "DarkBlue", "DarkGreen", "DarkCyan", "DarkRed", "DarkMagenta", "DarkYellow", "Gray", "DarkGray", "Blue", "Green", "Cyan", "Red", "Magenta", "Yellow", "White")]
        [string]$Color = "DarkCyan",

        # Switch to enable random color
        [switch]$RandomColor,
        [switch]$Clear
    )

    # Get module information
    $ver = $MyInvocation.MyCommand.Module.Version.ToString()
    $author = $MyInvocation.MyCommand.Module.Author.ToString()

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
    $ForegroundColor = if ($RandomColor) { Get-RandomColor } else { $Color }
    Write-Host "`n$AsciiArt" -ForegroundColor $ForegroundColor
    Write-Host "`nBy $author - Module Ver. $ver`n"
    Start-Sleep -Seconds $DisplaySeconds
    if ($Clear) { Clear-Host }
}
