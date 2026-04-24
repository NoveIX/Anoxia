# File: NoveLib\Func\Private\Get-RandomColor.ps1

$colors = @(
    "Red", "Green", "Yellow", "Blue",
    "Magenta", "Cyan", "White", "DarkRed",
    "DarkGreen", "DarkYellow", "DarkBlue",
    "DarkMagenta", "DarkCyan"
)

function Get-RandomColor {
    # All write host foreground color
    return Get-Random -InputObject $colors
}
