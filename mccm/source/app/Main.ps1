# File: Tools\src\app\Main.ps1

# ==========================================[ Parameter ]========================================= #

param(
    [Parameter(ParameterSetName = "Setup")]
    [switch]$Setup,
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
[console]::BackgroundColor = "Black"
Clear-Host

# =========================================[ Definition ]========================================= #

#region Definition
# Define Script path
[string]$MainPS1 = $MyInvocation.MyCommand.Path
[string]$appPath = $PSScriptRoot

# Set work directory
[string]$WorkPath = $appPath
Set-Location -Path $WorkPath

# Define modpack path
[string]$sourcePath = Split-Path -Path $appPath -Parent
[string]$mccmPath = Split-Path -Path $sourcePath -Parent
[string]$ModpackPath = Split-Path -Path $mccmPath -Parent

# Define constant
[string]$ModuleName = "NoveLib"
[string]$GoogleBaseURL = "https://drive.google.com/uc?export=download&id="

# Fine Modpack name
$ProjectName = Split-Path $ModpackPath -Leaf
if ($ProjectName -Like "*Anoxia*") {
    # Terminal Title
    [string]$PSTitle = "Project Anoxia Lunar Ruins"
    [string]$GitHubRepositoryName = "Anoxia"

    # SSH key url id
    [string]$GitSSHPrivateKeyURLID = "16nw7QJfa-BxG74haagu6x4UO_gFlPv6a"
    [string]$GitSSHPublicKeyURLID = "1Q2nL9ulE3s12coUepO4HPcJ4ULsbPCFU"

    # SSH key file name
    [string]$GitSSHPrivateKeyName = "anoxia_github_readonly"
    [string]$GitSSHPublicKeyName = "anoxia_github_readonly.pub"

    # Auto update
    [string]$AutoUpdateTXT = "anoxia_modpack_path.txt"
    [string]$AutoUpdateCMD = "anoxia_modpack_auto_update.cmd"
}
else {
    Write-Host "`nError: No project was found with name '$ProjectName'" -ForegroundColor Red
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    exit 1
}

# ============================================[ Path ]============================================ #

# Define .git path
[string]$GitPath = Join-Path -Path $ModpackPath -ChildPath ".git"

# Define logs path
[string]$logsPath = Join-Path -Path $mccmPath -ChildPath "logs"

# Define key, file and path
[string]$KeyPath = Join-Path -Path $mccmPath -ChildPath "key"
[string]$GitSSHPrivateKeyPath = Join-Path -Path $KeyPath -ChildPath $GitSSHPrivateKeyName
[string]$GitSSHPublicKeyPath = Join-Path -Path $KeyPath -ChildPath $GitSSHPublicKeyName

# Define repository path
[string]$RepoPath = Join-Path -Path $mccmPath -ChildPath "repo"
[string]$RepoModpackPath = Join-Path -Path $RepoPath -ChildPath $GitHubRepositoryName

# Define library, file and path
[string]$LibPath = Join-Path -Path $sourcePath -ChildPath "library"
[string]$NoveLibPath = Join-Path -Path $LibPath -ChildPath $ModuleName
[string]$ModuleManifest = Join-Path -Path $NoveLibPath -ChildPath "$ModuleName.psd1"

# ========================================[ Auto update ]========================================= #

# Shell:Startup
[string]$ShellStartup = [Environment]::GetFolderPath("Startup")

# Temp\NoveLib
[string]$UserPathLibTemp = Join-Path -Path $env:USERPROFILE -ChildPath $ModuleName
[string]$AutoUpdateTXTPath = Join-Path -Path $UserPathLibTemp -ChildPath $AutoUpdateTXT

# UpdateCMD
[string]$UpdatePath = Join-Path -Path $sourcePath -ChildPath "update"
[string]$AutoUpdateCMDPath = Join-Path -Path $UpdatePath -ChildPath $AutoUpdateCMD
[string]$ShellStartupAutoUpdateCMDPath = Join-Path -Path $ShellStartup -ChildPath $AutoUpdateCMD


# =======================================[ Import module ]======================================== #

#region Import module
try {
    # Import module NoveLib
    Import-Module -Name $ModuleManifest -Force -ErrorAction Stop
    Write-LogInfo "Inizialize..."
    Write-AsciiArt
    $Script:DefaultLogSetting = Set-DefaultLogSetting -Filename "Anoxia_mccm" -Path $logsPath -DateLogName Date -LogFormat Time -ConsoleOutput Message
}
catch {
    Write-Host "`nError: Failed to import module: '$ModuleName'." -ForegroundColor Red
    Write-Host "`nReason: $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}

# Check git is installed
$gitVer = git.exe --version
if (-not ($gitVer -like "git version 2.*")) {
    Write-LogFatal "Git is required. Please install Git to continue."
    Write-Host
    Write-LogInfo "https://git-scm.com/downloads/win"
    Write-Host
    Write-Host "Press Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}

# Check OpenSSH is installed
$sshVer = & ssh.exe -V 2>&1
if (-not ($sshVer.TargetObject -like "OpenSSH_for_Windows_9*")) {
    Write-LogFatal "OpenSSH is required. Please install Windows feature OpenSSH Client to continue."
    Write-Host
    Write-LogInfo "Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0"
    Write-Host
    Write-Host "Press Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}
#endregion

# ========================================[ Download ssh ]======================================== #

#region DL SSH Key
function Start-DownloadSSHKey {
    param (
        [string]$SSHKeyPath,
        [string]$SSHKeyURLID,
        [string]$SSHKeyName,
        [ValidateSet("private", "public")]
        [string]$KeyType
    )

    # Test key path and download if not exist - Log
    Write-LogInfo "Check SSH $KeyType key"
    if (-not (Test-Path -Path $SSHKeyPath -PathType Leaf)) {

        # Create key dir if not exist
        New-Item -Path $KeyPath -ItemType Directory -Force | Out-Null

        # Donwload ssh key
        $URL = $GoogleBaseURL + $SSHKeyURLID
        $OutFile = Join-Path -Path $KeyPath -ChildPath $SSHKeyName
        $ExitCode = Start-DownloadFile -URL $URL -OutFile $OutFile
        if ($ExitCode) { Write-LogInfo -Message "Download completed SSH $KeyType key" }
        else {
            Write-LogFatal -Message "Failed to download SSH $KeyType key"
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else { Write-LogInfo "Find SSH $KeyType key" }
}

# ========================================[ Download ssh ]======================================== #

# Ensure both key
function Invoke-DownloadSSHKey {

    # Ensure SSH private Key
    Start-DownloadSSHKey -SSHKeyPath $GitSSHPrivateKeyPath -SSHKeyURLID $GitSSHPrivateKeyURLID `
        -SSHKeyName $GitSSHPrivateKeyName -KeyType private

    # Ensure SSH public Key
    Start-DownloadSSHKey -SSHKeyPath $GitSSHPublicKeyPath -SSHKeyURLID $GitSSHPublicKeyURLID `
        -SSHKeyName $GitSSHPublicKeyName -KeyType public
}
#endregion

# ========================================[ Download repo ]======================================= #

#Region DL Repository
function Invoke-DownloadRepository {

    # Ensure SSH Key
    Invoke-DownloadSSHKey

    # Test repository path download if not exist - Log
    if (-not (Test-Path -Path $RepoModpackPath -PathType Container)) {

        # Create Repository dir if not exist
        New-Item -Path $RepoPath -ItemType Directory -Force | Out-Null

        # Download repository with ssh - Log
        Write-LogInfo "Prepare SSH Command"
        Invoke-UIGitTop
        $env:GIT_SSH_COMMAND = "ssh -i `"$GitSSHPrivateKeyPath`""
        & git clone -b 1.20 --depth 1 --single-branch "git@github.com:NoveIX/$GitHubRepositoryName.git" $RepoModpackPath
        $ExitCode = $LASTEXITCODE
        Invoke-UIGitBot

        # Log
        if ($ExitCode -eq 0) { Write-LogInfo "Download repository completed" }
        else {
            Write-LogInfo "Failed to download repository. Git clone exit code $ExitCode."
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else { Write-LogInfo  "Find repositoy folder" }
}
#endregion

# =========================================[ Setup repo ]========================================= #

#region Setup
function Invoke-Setup {
    param (
        [switch]$Repair
    )

    # Set title - Log
    [Console]::Title = "Setup $PSTitle"
    Write-LogInfo "Execute setup"

    # Ensure repository
    Invoke-DownloadRepository

    # Test .git path in modpack dir copy file if not exist - Log
    if (-not (Test-Path -Path $GitPath -PathType Container)) {

        # Copy file in modpack dir
        $ExitCode = Copy-File -Source $RepoModpackPath -Destination $ModpackPath -Force

        # Log
        if ($ExitCode) {
            Write-LogInfo "Copy repository file in modpack folder completed"
            Invoke-AutoUpdateSetup -Repair:$Repair
        }
        else {
            Write-LogFatal -Message "Failed to copy repository file in modpack folder"
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else {
        Write-LogInfo "Find .git folder"
        Write-Host "`nDev feature already installed"
    }
}
#endregion

# =====================================[ Self updates setup ]===================================== #

#region Setup AutoUp
function Invoke-AutoUpdateSetup {
    param (
        [switch]$Repair
    )

    if ($Repair) {
        [bool]$SelfAutoUpdate = $((Test-Path -Path $ShellStartupAutoUpdateCMDPath -PathType Leaf) -and (Test-Path -Path $AutoUpdateTXTPath -PathType Leaf))
    }
    else {
        Write-Host "`n# ==================== Auto update mode ===================== #`n"
        Write-Host "Enable auto update?"
        Write-Host "Every time your PC starts up with your user account, the system will check for updates to the modpack."
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?"
        Write-Host "`n# =========================================================== #`n"
    }

    if ($SelfAutoUpdate) {
        # Create NoveLib dir in %Temp% if not exist
        New-Item -Path $UserPathLibTemp -ItemType Directory -Force | Out-Null

        # Write update path in user local temp - Log
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($AutoUpdateTXTPath, $MainPS1, $utf8NoBom)

        if ($?) { Write-LogInfo "Write modpack path in $AutoUpdateTXT" }
        else { Write-LogError "Failed to write modpack path in $AutoUpdateTXT" }

        # Copy file execute update in Shell Startup
        $ExitCode = Copy-FileFast -Source $AutoUpdateCMDPath -Destination $ShellStartup
        if ($ExitCode) { Write-LogInfo "Copy completed $AutoUpdateCMD file in Shell:Starup" }
        else {
            Write-LogFatal "Failed to copy $AutoUpdateCMD in Shell:Starup"
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }

        Write-LogInfo "Setup completed."
        Write-Host
        Write-LogInfo "Auto update: ON"
    }
    else {
        Write-LogInfo "Setup completed."
        Write-Host
        Write-LogInfo "Auto update: OFF"
    }
}
#endregion

# ===========================================[ Update ]=========================================== #

#region Update
function Invoke-Update {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Location
    )

    # Set title - Log
    [Console]::Title = "Update $PSTitle"
    Write-LogInfo "Execute update"

    # Ensure SSH Key
    Invoke-DownloadSSHKey

    # Test .gir path in modpack dir copy file if not exist - Log
    if (Test-Path -Path $gitPath -PathType Container) {

        # Log - Change directory to execute git pull
        #Write-LogInfo "Change directory to: $Location"
        #Set-Location -Path $Location
        Write-LogInfo "Prepare SSH Command"
        Invoke-UIGitTop

        # Download Update with ssh
        $env:GIT_SSH_COMMAND = "ssh -i `"$GitSSHPrivateKeyPath`""
        & git -C $ModpackPath pull
        $ExitCode = $LASTEXITCODE
        #Set-Location -Path $WorkPath

        # Log
        Invoke-UIGitBot
        if ($ExitCode -eq 0) { Write-LogInfo "Check repository update completed" }
        else {
            Write-LogFatal "Failed get repository update"
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            exit 1
        }
    }
    else {
        Write-LogInfo "can't find .git folder in Modpack folder"
        $ExitCode = Confirm-Selection -Message "`nWould you like to proceed with the installation?"
        if ($ExitCode) {
            Write-Host "`nStarting setup..." -NoNewline
            Start-Sleep -Seconds 3
            Write-Host "`n"
            Invoke-Setup
        }
    }
}
#endregion

# ===========================================[ Repair ]=========================================== #

#region Repair
function Invoke-Repair {

    # Set title - Log
    [Console]::Title = "Repair $PSTitle"
    Write-LogInfo "Execute Repair"

    # Download update in repository dir
    if (Test-Path -Path $RepoModpackPath -PathType Container) {
        Invoke-Update -Location $RepoModpackPath
    }
    else {
        Invoke-DownloadRepository
    }

    # Get item from repository dir - Log
    $RepoModpackItems = Get-ChildItem -Path $RepoModpackPath -Force -ErrorAction SilentlyContinue
    foreach ($repoModpackItem in $repoModpackItems) {

        # Calculate the path relative to the repository folder
        [string]$relativePath = $repoModpackItem.FullName.Substring((Resolve-Path $repoModpackPath).Path.Length)
        [string]$destPath = Join-Path -Path $ModpackPath -ChildPath $relativePath
        [string]$destPath = Split-Path $destPath -Leaf

        # If the folder exist in the modpack dir, remove it - Skip Tools
        if ((Test-Path -Path $destPath) -and ($destPath -notlike "*Tools*")) {
            Remove-Item -Path $destPath -Recurse -Force

            if ($?) { Write-LogInfo "Deleted $destPath folder in modpak folder" }
            else { Write-LogWarn -Message "Don't exist $destPath folder in modpak folder" }
        }
        else { Write-LogInfo "Skip $destDir folder in modpak folder" }
    }

    # Remove SSH key dir - Log
    Remove-Item -Path $KeyPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo "Deleted key folder in src folder" }
    else { Write-LogWarn "Don't exist key folder in src folder" }

    # Remove Repo dir - Log
    Remove-Item -Path $RepoPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo "Deleted repo folder in src folder" }
    else { Write-LogWarn "Don't exist repo folder in src folder" }

    # Starting setup in repair mode - Log
    Write-LogInfo "Delete completed"
    Write-Host "`nStarting setup..." -NoNewline
    Start-Sleep -Seconds 3
    Write-Host "`n"
    Invoke-Setup -Repair
}
#endregion

# ===========================================[ Remove ]=========================================== #

#region Remove
function Invoke-Remove {

    # Set title - Log
    [Console]::Title = "Remove $PSTitle"
    Write-LogInfo "Execute Remove"

    # ========= #

    # Remove .git in modpack dir - Log
    Remove-Item -Path $GitPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo "Deleted .git folder in modpack folder" }
    else { Write-LogWarn "Don't exist .git folder in modpack folder" }

    # ========= #

    # Remove key dir - Log
    Remove-Item -Path $KeyPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo -Message "Deleted key folder in src folder" }
    else { Write-LogWarn -Message "Don't exist key folder in src folder" }

    # ========= #

    # Remove repo dir - Log
    Remove-Item -Path $RepoPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo -Message "Deleted repo folder in src folder" }
    else { Write-LogWarn -Message "Don't exist repo folder in src folder" }

    # ========= #

    # Remove download dir - Log
    Remove-Item -Path $DownloadPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo -Message "Deleted download folder in src folder" }
    else { Write-LogWarn -Message "Don't exist download folder in src folder" }

    # ========= #

    # Remove NoveLib in local user temp - Log
    Remove-Item -Path $UserPathLibTemp -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo -Message "Deleted NoveLib folder in %Temp% folder" }
    else { Write-LogWarn -Message "Don't exist NoveLib folder in %Temp% folder" }

    # ========= #

    # Remove auto update file in Shell:Startup - Log
    Remove-Item -Path $ShellStartupAutoUpdateCMDPath -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogInfo -Message "Deleted $AutoUpdateCMD file in Shell:Starup folder" }
    else { Write-LogWarn -Message "Don't exist $AutoUpdateCMD file in Shell:Starup folder" }
}
#endregion

# ============================================[ Menu ]============================================ #

#region Menu
function Invoke-Menu {

    # Set title - Log
    [Console]::Title = "Menu $PSTitle"
    Write-LogInfo "Execute Menu"
    Start-Sleep -Seconds 2

    # Menu
    [bool]$ExitWhile = $false
    do {
        Clear-Host
        Write-Host "`n# =======================[ Main Menu ]======================= #`n"
        Write-Host "1. Install modpack dev feature"
        Write-Host "2. Check dev feature update"
        Write-Host "3. Repair installation dev feature"
        Write-Host "4. Remove Installation and Auto Update"
        Write-Host "`n0. Exit Main Menu"
        Write-Host "`n# =========================================================== #`n"

        # Logic
        Write-Host "Select an option: " -NoNewline
        [string]$MenuAnswer = Read-Host
        Write-Host

        switch ($MenuAnswer) {
            "1" {
                Invoke-Setup
                Start-Sleep -Seconds 5
            }
            "2" {
                Invoke-Update -Location $ModpackPath
                Start-Sleep -Seconds 5
            }
            "3" {
                Invoke-Repair
                Start-Sleep -Seconds 5
            }
            "4" {
                Invoke-Remove
                Start-Sleep -Seconds 5
            }
            "0" {
                Write-Host "Exit Menu..."
                $ExitWhile = $true
            }
            Default {
                Write-Host "Select a valid option" -NoNewline
                Start-Sleep -Seconds 3
            }
        }
    } while (-not $ExitWhile)
}
#endregion

# ===========================================[ Script ]=========================================== #

#region Script code
if ($Update) {
    Invoke-Update -Location $ModpackPath
}
elseif ($Setup) {
    Invoke-Setup
}
elseif ($Repair) {
    Invoke-Repair
}
elseif ($Remove) {
    Invoke-Remove
}
elseif ($Menu) {
    Invoke-Menu
}
else {
    Write-LogInfo "Fueature not write yet"
}

# Give time to read
Write-Host "`n# Script finished. Closing in 15 seconds. #"
Start-Sleep -Seconds 12
Write-Host "`nClosing: 3 " -NoNewline
Start-Sleep -Seconds 1
Write-Host "2 " -NoNewline
Start-Sleep -Seconds 1
Write-Host "1 " -NoNewline
Start-Sleep -Seconds 1
Write-Host "0 " -NoNewline
exit 0
#endregion