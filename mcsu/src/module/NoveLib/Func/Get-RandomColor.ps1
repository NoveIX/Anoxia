# File: NoveLib\Func\Get-RandomColor.ps1

function Get-RandomColor {
    # All write host foreground color
    $colors = @(
        "Red", "Green", "Yellow", "Blue",
        "Magenta", "Cyan", "White", "DarkRed",
        "DarkGreen", "DarkYellow", "DarkBlue",
        "DarkMagenta", "DarkCyan"
    )

    return Get-Random -InputObject $colors
}