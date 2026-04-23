# File: Modpack.psm1

# Module Var
$moduleRoot = Split-Path $PSCommandPath -Parent

# =====================================[ Function ]===================================== #

# Get function dir
$funcDir = Join-Path $moduleRoot "Func"

# Load all function
$allFunc = Get-ChildItem $funcDir -Recurse -File -Filter "*.ps1"
foreach ($func in $allFunc) { . $func }