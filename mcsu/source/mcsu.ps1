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

# Constants
$name = "anoxia"

# Set background black
[Console]::BackgroundColor = "Black"
Clear-Host


# =================================[ Definition path ]================================== #


# Resolve dir
$mcsuDir = Split-Path $PSScriptRoot -Parent
$ConfigDir = Join-Path $mcsuDir "config"
$LogDir = Join-Path $mcsuDir "logs"
$SourceDir = Join-Path $mcsuDir "source"
$ModuleDir = Join-Path $SourceDir "module"

# Create Context
$Context = [PSCustomObject]@{
    Name         = $name
    KeyDir       = Join-Path $mcsuDir "key"
    RepoDir      = Join-Path $mcsuDir "repo"
    StartupDir   = [Environment]::GetFolderPath("Startup")
    MCModpackDir = Split-Path $mcsuDir -Parent
}


# ==================================[ Import modules ]================================== #


# Import module
Write-Host "Initialization. Importing modules..."
try {
    $moduleManifest = Get-ChildItem -Path $ModuleDir -Recurse -Include "*.psd1" -ErrorAction Stop
    if (-not $moduleManifest) { throw [InvalidOperationException]::new("No module manifest was found.") }
    foreach ($manifest in $moduleManifest) { Import-Module $manifest.FullName -Force -ErrorAction Stop }
}
catch { throw [InvalidOperationException]::new("Failed to import module. Exception: $($_.Exception.Message)") }

# Show Logo
Write-AsciiArt -DisplaySeconds 1.5 -RandomColor -Clear


# ==================================[ Initialization ]=================================== #


# Read config
try { $Config = Read-Config -FilePath (Join-Path $ConfigDir "mcsu-$name.json") -ErrorAction Stop }
catch { throw [InvalidOperationException]::new("Failed to read config. Exception: $($_.Exception.Message)") }

# Initialize log setting
$null = New-LogSetting -Path $LogDir -Name "mcsu-$name" -LogFormat Simple -LogDate DateTimeHyphen -ConsolePrint -SetDefault


# ====================================[ Execution ]===================================== #


# Clear old logs
Remove-OldLog -Path $logDir -Days 30


# Check git and ssh
if (-not (Test-Git)) { Wait-BeforeExit }
if (-not (Test-SSH)) { Wait-BeforeExit }

# Execute
if ($Install) { Install-Project -Config $Config -Context $Context }
elseif ($Update) { Update-Project -Config $Config }
elseif ($Repair) { Repair-Project -Config $Config }
elseif ($Remove) { Remove-Project -Config $Config }
elseif ($Menu) { Show-Menu -Config $Config }

# Give time to read
Wait-ReadTime
exit 0
