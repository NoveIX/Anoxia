# File: build.ps1

# ====================================[ Parameter ]===================================== #

param (
    [Parameter(Mandatory = $true)]
    [string]$Version
)

# Set background black
[Console]::BackgroundColor = "Black"
Clear-Host

# ==================================[ Import modules ]================================== #

# Resolve dir
$scriptDir = $PSScriptRoot
$modpackDir = Split-Path $scriptDir -Parent
$ModuleDir = Join-Path $scriptDir "module"
$repoDir = Join-Path $scriptDir "repo"
$buildDir = Join-Path $scriptDir "build"

# Import module
Write-Host "Initialization. Importing modules..."
try {
    $moduleManifest = Get-ChildItem -Path $ModuleDir -Recurse -Include "*.psd1" -ErrorAction Stop
    if (-not $moduleManifest) { throw [InvalidOperationException]::new("No module manifest was found.") }
    foreach ($manifest in $moduleManifest) { Import-Module $manifest.FullName -Force -ErrorAction Stop }
}
catch { throw [InvalidOperationException]::new("Failed to import module. Exception: $($_.Exception.Message)") }

# Show Logo
Write-AsciiArt -RandomColor -Clear

# ====================================[ Execution ]===================================== #

$dirToCopy = @(
    "mods"
    "resourcepacks"
    "shaderpacks"
)

# Pull repository from github
if (-not (Test-Path $repoDir -PathType Container)) {
    Invoke-GitClone -Url "https://github.com/NoveIX/Anoxia.git" -Path $repoDir -Branch 1.20
}
else {
    Invoke-GitPull -Path $repoDir
}

# Copy directory mods to repository
foreach ($dir in $dirToCopy) {
    $source = Join-Path $modpackDir $dir
    $destination = Join-Path $repoDir $dir
    Copy-File -Source $source -Destination $destination -Force -PreserveAttributes -ProgressBar
}

# Compress zip file client
$clientItems = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"
    "mods"
    "resourcepacks"
    "shaderpacks"
    "tacz"
    "LICENSE"
    "README.md"
    "version.txt"
)

$client = $clientItems | ForEach-Object { Join-Path $repoDir $_ }
$build = Join-Path $buildDir "Anoxia-${Version}.zip"

New-Directory -Path $buildDir
Compress-Archive -Path $client -DestinationPath $build -Force

# Copy item to archive release
$exportDir = Invoke-PathCombine $env:OneDrive, "Games", "Minecraft", "Modpack", "Anoxia", "GitHub"
Copy-Item -Path $build -Destination $exportDir -Force



# Compress zip file server
$serverItems = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"
    "mods"
    "serverInstaller"
    "tacz"
    "default-server.properties"
    "LICENSE"
    "README.md"
    "server-icon.png"
    "startserver.bat"
    "startserver.sh"
    "user_jvm_args.txt"
    "version.txt"
)

# Take server mod from server profile
$instancesDir = Split-Path $modpackDir -Parent
$modsDirServer = Invoke-PathCombine $instancesDir, "Project Anoxia Lunar Ruins Server", "mods"

# clear mods dir
$source = $modsDirServer
$destination = Join-Path $repoDir "mods"
Remove-Item -Path $destination -Recurse -Force
Copy-File -Source $source -Destination $destination -Force -PreserveAttributes -ProgressBar
Remove-Item -Path $destination -Recurse -Force -Include "*.disabled"


$server = $serverItems | ForEach-Object { Join-Path $repoDir $_ }
$build = Join-Path $buildDir "Anoxia-${Version}-Server.zip"

New-Directory -Path $buildDir
Compress-Archive -Path $server -DestinationPath $build -Force

# Copy item to archive release
$exportDir = Invoke-PathCombine $env:OneDrive, "Games", "Minecraft", "Modpack", "Anoxia", "GitHub"
Copy-Item -Path $build -Destination $exportDir -Force

