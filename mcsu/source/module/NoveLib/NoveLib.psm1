# File: NoveLib.psm1

using namespace System.IO

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
else { throw [FileNotFoundException]::new("Required assembly not found: $dllPath.") }

# =====================================[ Function ]===================================== #

# Get function dir
$funcDir = Join-Path $moduleRoot "Func"

# Load all function
$allFunc = Get-ChildItem $funcDir -Recurse -File -Filter "*.ps1"
foreach ($func in $allFunc) { . $func.FullName }
