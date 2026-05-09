# File: build.ps1

# ====================================[ Parameter ]===================================== #

param (
    [Parameter(Mandatory = $true)]
    [string]$Version
)

if ($PSEdition -eq "Desktop") {
    throw [System.InvalidOperationException]::new(
        "Windows PowerShell is not supported. Please use PowerShell 7+."
    )
}

# Set background black
[Console]::BackgroundColor = "Black"
Clear-Host

# =================================[ Definition path ]================================== #

# Resolve dir
$scriptDir = $PSScriptRoot
$modpackDir = Split-Path $scriptDir -Parent
$moduleDir = Join-Path $scriptDir "module"
$repoDir = Join-Path $scriptDir "repo"
$tempDir = Join-Path $scriptDir "temp"
$buildDir = Join-Path $scriptDir "build"

# ==================================[ Import modules ]================================== #

# Import module
Write-Host "Initialization. Importing modules..."
try {
    $moduleManifest = Get-ChildItem -Path $moduleDir -Recurse -Include "*.psd1" -ErrorAction Stop
    if (-not $moduleManifest) { throw [InvalidOperationException]::new("No module manifest was found.") }
    foreach ($manifest in $moduleManifest) { Import-Module $manifest.FullName -Force -ErrorAction Stop }
}
catch { throw [InvalidOperationException]::new("Failed to import module. Exception: $($_.Exception.Message)") }

# Show Logo
Write-AsciiArt -RandomColor -Clear

# ====================================[ Execution ]===================================== #

$anoxiOneDrive = Invoke-PathCombine -Path $env:OneDrive, "Games", "Minecraft", "Modpack", "Anoxia"
$exportDir = Join-Path $anoxiOneDrive "Export"
$exportName = "Anoxia-${Version}.zip"
$exportFile = Join-Path $exportDir $exportName

# Wait for curse export
$exitWhile = $false
Write-LogInfo "Check export zip Anoxia-${Version}.zip"
do {
    if (Test-Path $exportFile) {
        $ans = Read-Confirm "Found Anoxia-${Version}.zip. Proceed to generate release ${Version}"
        if (-not $ans) { Write-LogInfo "Operation cancelled by user."; exit 1 }
        $exitWhile = $true
    }
    else {
        Start-Sleep -Seconds 1
    }
} while (-not $exitWhile)

# Pull repository from github
if (-not (Test-Path $repoDir -PathType Container)) {
    Write-LogInfo "Clone Anoxia repository from github"
    Invoke-GitClone -Url "https://github.com/NoveIX/Anoxia.git" -Path $repoDir -Branch 1.20
}
else {
    Write-LogInfo "Update Anoxia repository from github"
    Invoke-GitPull -Path $repoDir
}

# Expand CurseForge zip
Write-LogInfo "Expand CurseForge export zip"
New-Directory -Path $tempDir | Out-Null
Expand-Archive -Path $exportFile -DestinationPath $tempDir

# Compress zip file client
$clientItems = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"

    # CurseForge zip
    # "mods"
    # "resourcepacks"
    # "shaderpacks"

    "tacz"
    "LICENSE"
    "README.md"
    "version.txt"
)


# Copy repository client file to overrides dir
Write-LogInfo "Copy repository client file to overrides dir"
$client = $clientItems | ForEach-Object { Join-Path $repoDir $_ }
Copy-Item -Path $client -Destination $(Join-Path $tempDir "overrides") -Force -Recurse


# Generate CurseForge zip
Write-LogInfo "Create CurseForge release zip"
New-Directory -Path $buildDir | Out-Null

$clientRelease = Get-ChildItem -Path $tempDir -Force | ForEach-Object { $_.FullName }
$build = Join-Path $buildDir "Anoxia-${Version}.zip"
Compress-Archive -Path $clientRelease -DestinationPath $build -Force


# Copy item to archive release
Write-LogInfo "Copy Anoxia-${Version}.zip to release dir (OneDrive)"
$releaseDir = Join-Path $anoxiOneDrive "Release"
Copy-Item -Path $build -Destination $releaseDir -Force

# Clean temp dir
Write-LogInfo "Clean up temp dir to generate server zip"
Remove-Item -Path $clientRelease -Recurse -Force



# Compress zip file server
$serverItems = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"
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
Write-LogInfo "Get server mod from server profile"
$modsDirServer = Invoke-PathCombine -Path (Split-Path $modpackDir -Parent), "Project Anoxia Lunar Ruins Server", "mods"
Copy-Item -Path $modsDirServer -Destination $tempDir -Recurse -Force -Exclude "*.disabled"


# Copy repository client file to temp dir
Write-LogInfo "Copy repository server file to temp dir"
$server = $serverItems | ForEach-Object { Join-Path $repoDir $_ }
Copy-Item -Path $server -Destination $tempDir -Force -Recurse

# Generate CurseForge zip
Write-LogInfo "Create server release zip"
$serverRelease = Get-ChildItem -Path $tempDir -Force | ForEach-Object { $_.FullName }
$build = Join-Path $buildDir "Anoxia-${Version}-Server.zip"
Compress-Archive -Path $serverRelease -DestinationPath $build -Force

# Copy item to archive release
Write-LogInfo "Copy Anoxia-${Version}-Server.zip to release dir (OneDrive)"
$releaseDir = Join-Path $anoxiOneDrive "Release"
Copy-Item -Path $build -Destination $releaseDir -Force

# Copy item to archive release
Write-LogInfo "Clear temp dir"
Remove-Item -Path $serverRelease -Recurse -Force
