# File: NoveLib\Func\Public\Write-AsciiArt.ps1

function Write-AsciiArt {
    param (
        [Parameter(Position = 0)]
        [ValidateRange(0, 10)]
        [double]$DisplaySeconds = 2,

        # ValidateSet for Write-Host foreground colors
        [Parameter(Position = 1)]
        [ValidateSet("Red", "Green", "Yellow", "Blue",
            "Magenta", "Cyan", "White", "DarkRed",
            "DarkGreen", "DarkYellow", "DarkBlue",
            "DarkMagenta", "DarkCyan")]
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
