# File: mcsu.ps1
using namespace System


# ====================================[ Parameter ]===================================== #


param (
    [Parameter(ParameterSetName = "Install")]
    [switch]$Install,

    [Parameter(ParameterSetName = "Update")]
    [switch]$Update,

    [Parameter(ParameterSetName = "Repair")]
    [switch]$Repair,

    [Parameter(ParameterSetName = "Remove")]
    [switch]$Remove,

    [Parameter(ParameterSetName = "Menu")]
    [switch]$Menu
)


# Set background black
[Console]::BackgroundColor = "Black"
Clear-Host


# =================================[ Definition path ]================================== #


# Resolve dir
$mcsuDir = Split-Path $PSScriptRoot -Parent
$logDir = Join-Path $mcsuDir "logs"
$SourceDir = Join-Path $mcsuDir "source"
$ModuleDir = Join-Path $SourceDir "module"


# =================================[ Definition path ]================================== #


# Import module
Write-Host "Initialization. Importing modules..."
try {
    $moduleManifest = Get-ChildItem -Path $ModuleDir -Recurse -Include "*.psd1" -ErrorAction Stop
    if (-not $moduleManifest) { throw [InvalidOperationException]::new("No module manifest was found.") }
    foreach ($manifest in $moduleManifest) { Import-Module $manifest.FullName -Force -ErrorAction Stop }
}
catch { throw [InvalidOperationException]::new("Failed to import module. SysErr: $($_.Exception.Message)") }

# Show Logo
Write-AsciiArt -DisplaySeconds 1.5 -RandomColor -Clear
$LogSetting = New-LogSetting -Path $logDir -LogDate DateTimeHyphen -ConsolePrint -SetDefault


# ====================================[ Execution ]===================================== #


# Clear old logs
Remove-OldLog -Path $logDir -Days 0


# Check git is installed
if (-not (Test-Git)) { Wait-BeforeExit }
