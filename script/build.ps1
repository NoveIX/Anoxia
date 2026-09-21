# Check PowerShell edition
if ($PSEdition -eq "Desktop") {
    throw [System.InvalidOperationException]::new(
        "Windows PowerShell is not supported. Please use PowerShell 7+."
    )
}

# Define context dir
try {
    $CtxDir = $PSScriptRoot
    $ProjectDir = Split-Path $CtxDir -Parent
    $VersionFile = Join-Path $ProjectDir "version.txt"
    $Version = (Get-Content $VersionFile -Raw).Trim()
}
catch {
    throw [System.IO.FileNotFoundException]::new(
        "Version file not found: '$VersionFile'.",
        $VersionFile
    )
}

# Set window console
[System.Console]::BackgroundColor = "Black"
[System.Console]::Title = "Anoxia - Build v$Version"
Clear-Host

# ====================================================================================== #

#region Function
function Read-Confirm {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    # Ask to user
    Write-Host "$Message [Y/n]: " -NoNewline
    $ans = Read-Host

    # Default = Yes if empty
    if ([string]::IsNullOrWhiteSpace($ans)) {
        return $true
    }

    # Normalize input
    return $ans.Trim().ToUpper() -eq "Y"
}

function Invoke-GitClone {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Url,

        [Parameter(Mandatory = $true, Position = 1)]
        [System.IO.DirectoryInfo]$Path,

        [Parameter(Position = 2)]
        [string]$Branch,

        [Parameter(Position = 3)]
        [System.IO.FileInfo]$PrivateKey
    )

    $gitSshCommand = $env:GIT_SSH_COMMAND

    try {
        # Configure SSH authentication
        if ($Url -like 'git@*') {
            if (-not $PrivateKey) {
                throw [System.ArgumentException]::new(
                    "SSH repository detected but no private key was provided."
                )
            }

            if (-not $PrivateKey.Exists) {
                throw [System.IO.FileNotFoundException]::new(
                    "Private key file not found: $($PrivateKey.FullName)",
                    $PrivateKey.FullName
                )
            }

            if ($PrivateKey.PSIsContainer) {
                throw [System.ArgumentException]::new(
                    "The provided private key path is a directory: $($PrivateKey.FullName)"
                )
            }

            if ($PrivateKey.Extension -eq '.pub') {
                throw [System.ArgumentException]::new(
                    "The provided private key appears to be a public key: $($PrivateKey.FullName)"
                )
            }

            $env:GIT_SSH_COMMAND = @(
                'ssh'
                '-i'
                "`"$($PrivateKey.FullName)`""
                '-o'
                'StrictHostKeyChecking=accept-new'
            ) -join ' '
        }

        # Clone only the latest commit
        $gitArgs = @(
            'clone'
            '--depth', '1'
            '--single-branch'
        )

        # Clone specified branch
        if ($Branch) {
            $gitArgs += @(
                '-b', $Branch
            )
        }

        # Repository and destination
        $gitArgs += @(
            $Url
            $Path.FullName
        )

        Write-Host "`n# ==========================[ Git ]========================== #`n"
        & git.exe @gitArgs

        if ($LASTEXITCODE -ne 0) {
            throw [System.ComponentModel.Win32Exception]::new(
                $LASTEXITCODE,
                "git clone failed with exit code $LASTEXITCODE."
            )
        }

        Write-Host "`n# =========================================================== #`n"
    }
    finally {
        # Restore previous SSH configuration
        $env:GIT_SSH_COMMAND = $gitSshCommand
    }
}

function New-Dir {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Path
    )

    ([System.IO.DirectoryInfo]$Path).Create()
}

function Clear-Dir {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Path,

        [switch]$Parent
    )

    $Directory = [System.IO.DirectoryInfo]$Path

    if (-not $Directory.Exists) {
        return
    }

    $Directory.EnumerateFileSystemInfos() | Remove-Item -Recurse -Force

    if ($Parent) {
        $Directory | Remove-Item -Recurse -Force
    }
}
#endregion

# ====================================[ Execution ]===================================== #


#region Setup build

# Define local Path
$RepoDir = Join-Path $CtxDir "repo"
$TempDir = Join-Path $CtxDir "temp"
$BuildDir = Join-Path $CtxDir "build"

# Define release path
$AnoxiOneDrive = [System.IO.Path]::Combine($env:OneDrive, "Games", "Minecraft", "Modpack", "Anoxia")
$ExportDir = Join-Path $AnoxiOneDrive "Export"
$ReleaseDir = Join-Path $AnoxiOneDrive "Release"

# Define File
$BaseName = "Anoxia-${Version}"
$ExportFileName = "$BaseName.zip"
$ExportFilePath = Join-Path $ExportDir $ExportFileName

# Define Release
$CurseClientFileRLS = Join-Path $BuildDir "$BaseName-CurseForge.zip"
$PrismClientRLS = Join-Path $BuildDir "$BaseName-Prism.zip"
$ServerRLS = Join-Path $BuildDir "$BaseName-Server.zip"


# Wait for CurseForge Export
Write-Host "Check export zip $ExportFileName"
if (Test-Path -Path $ExportFilePath -PathType Leaf) {

    $ans = Read-Confirm "Found $ExportFileName. Proceed to generate release ${Version}"

    if (-not $ans) {
        Write-Host "Operation cancelled by user."
        exit 1
    }
}
else {
    Write-Host "Export file not found."
    exit 1
}


# Pull repository from github
Write-Host "Clone Anoxia repository from github"
Invoke-GitClone -Url "https://github.com/NoveIX/Anoxia.git" -Path $RepoDir -Branch 1.20

#endregion


# ====================================================================================== #


#region Curse Client

# Expand CurseForge zip
Write-Host "Expand CurseForge export zip"
New-Dir -Path $TempDir
Expand-Archive -Path $ExportFilePath -DestinationPath $TempDir

# Select client dirs
$ClientDirs = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"
    "tacz"
    "LICENSE"
    #"README.md"
    "version.txt"
)


# Remove profile image from client zip
Write-Host "Remove profile image from client"
Clear-Dir -Path $(Join-Path $TempDir "profileImage") -Parent


# Copy repository client file to overrides dir
Write-Host "Copy repository client file to overrides dir"
$ClientItems = $ClientDirs | ForEach-Object { Join-Path $RepoDir $_ }
Copy-Item -Path $ClientItems -Destination $(Join-Path $TempDir "overrides") -Recurse

New-Dir $BuildDir

# Compress zip file client
Write-Host "Create CurseForge client release zip"
$ClientItems = Get-ChildItem -Path $TempDir -Force | ForEach-Object { $_.FullName }
Compress-Archive -Path $ClientItems -DestinationPath $CurseClientFileRLS


# Clean temp dir
Write-Host "Clean up temp dir"
Clear-Dir -Path $TempDir

#endregion


# ====================================================================================== #


#region Prism Client
$MinecraftDir = Join-Path $TempDir "minecraft"
$InstanceCFG = Join-Path $TempDir "instance.cfg"
New-Dir -Path $MinecraftDir

Write-Host "Get client mods from client profile"
$ProjectCoreDir = @(
    "mods",
    "resourcepacks",
    "shaderpacks"
) | ForEach-Object { Join-Path $ProjectDir $_ }

@"
[General]
ConfigVersion=1.3
InstanceType=OneSix
name=Project Anoxia Lunar Ruins v$Version
iconKey=anoxia_icon
"@ | Set-Content -Path $InstanceCFG


# Copy repository client file
Write-Host "Copy repository client file to minecraft dir"
$ClientItems = $ClientDirs | ForEach-Object { Join-Path $RepoDir $_ }
Copy-Item -Path $ClientItems -Destination $MinecraftDir -Recurse
Copy-Item -Path $ProjectCoreDir -Destination $MinecraftDir -Recurse
Copy-Item -Path $([System.IO.Path]::Combine($CtxDir, "prism", "anoxia_icon.png")) -Destination $TempDir
Copy-Item -Path $([System.IO.Path]::Combine($CtxDir, "prism", "mmc-pack.json")) -Destination $TempDir


# Compress zip file client
Write-Host "Create Prism client release zip"
$ClientItems = Get-ChildItem -Path $TempDir -Force | ForEach-Object { $_.FullName }
Compress-Archive -Path $ClientItems -DestinationPath $PrismClientRLS


# Clean temp dir
Write-Host "Clean up temp dir"
Clear-Dir -Path $TempDir

#endregion


# ====================================================================================== #


#region Server

# Compress zip file server
$ServerDirs = @(
    "config"
    "defaultconfigs"
    "kubejs"
    "local"
    "serverInstaller"
    "tacz"
    "default-server.properties"
    "LICENSE"
    #"README.md"
    "server-icon.png"
    "startserver.bat"
    "startserver.sh"
    "user_jvm_args.txt"
    "version.txt"
)


# Take server mod from server profile
Write-Host "Get server mods from server profile"
$modsDir = [System.IO.Path]::Combine((Split-Path $ProjectDir -Parent), "Project Anoxia Lunar Ruins Server", "mods")
Copy-Item -Path $modsDir -Destination $TempDir -Recurse -Exclude "*.disabled"


# Copy repository client file to temp dir
Write-Host "Copy repository server file to temp dir"
$serverItems = $ServerDirs | ForEach-Object { Join-Path $RepoDir $_ }
Copy-Item -Path $serverItems -Destination $TempDir -Recurse


# Generate CurseForge zip
Write-Host "Create server release zip"
$serverItems = Get-ChildItem -Path $TempDir -Force | ForEach-Object { $_.FullName }
Compress-Archive -Path $serverItems -DestinationPath $ServerRLS

#endregion


# ====================================================================================== #


#region Upload

# Copy item to archive release
Get-ChildItem -Path $BuildDir -Force | ForEach-Object {
    Write-Host "Copy $([System.IO.Path]::GetFileName($_)) to release dir (OneDrive)"
    Copy-Item -Path $_ -Destination $ReleaseDir
}

#endregion


# Clean up dir
Write-Host "Clear build, repo and temp dir"
Clear-Dir -Path $BuildDir -Parent
Clear-Dir -Path $RepoDir -Parent
Clear-Dir -Path $TempDir -Parent
