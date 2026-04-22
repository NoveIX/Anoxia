# File: NoveLib.psm1

# Module Var
$moduleRoot = Split-Path $PSCommandPath -Parent

# ======================================[ Cmdlet ]====================================== #

# Get binary dir
$binDir = Join-Path $moduleRoot "Bin"

# Select the .NET target based on the environment
$dllName = if ($IsCoreCLR) { 'NoveLib.net8.0.dll' } else { 'NoveLib.net48.dll' }
$dllPath = Join-Path $binDir $dllName

# Load dll
if (Test-Path $dllPath) { Import-Module $dllPath }
else { throw "Assembly not found: $dllPath" }

# =====================================[ Function ]===================================== #

# Get function dir
$funcDir = Join-Path $moduleRoot "Func"

# Load all function
$allFunc = Get-ChildItem $funcDir -Recurse -File -Filter "*.ps1"
foreach ($func in $allFunc) { . $func }