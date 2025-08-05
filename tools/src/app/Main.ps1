# File: Tools\src\app\Main.ps1

# Parameter
param(
    [Parameter(ParameterSetName = "Setup")]
    [switch]$Setup,
    [Parameter(ParameterSetName = "Update")]
    [switch]$Update,
    [Parameter(ParameterSetName = "Repair")]
    [switch]$Repair,
    [Parameter(ParameterSetName = "Remove")]
    [switch]$Remove,
    [Parameter(ParameterSetName = "Server")]
    [switch]$Server,
    [Parameter(ParameterSetName = "Server")]
    [string]$InvokeCMD
)

# Set background black
[console]::BackgroundColor = "Black"
Clear-Host

# =================================================================================================== #

### DEV
# [string]$AppDir = "$env:USERPROFILE\Source\Repos\Anoxia\tools\src\app"

#region Definition

# Locate script path
[string]$MainPS1 = $MyInvocation.MyCommand.Path
[string]$AppDir = $PSScriptRoot
[string]$WokrDir = $AppDir
Set-Location -Path $WokrDir

# Define parent path
[string]$SrcDir = Split-Path -Path $AppDir -Parent
[string]$ToolsDir = Split-Path -Path $SrcDir -Parent
[string]$ModpackDir = Split-Path -Path $ToolsDir -Parent

# Module name
[string]$ModuleName = "NoveLib"

# Google direct link
[string]$GoogleBaseURL = "https://drive.google.com/uc?export=download&id="

# Find modpack name
$ProjectName = Split-Path $ModpackDir -Leaf
if ($ProjectName -Like "*Anoxia*") {
    # Title - GitHub repository name
    [string]$PSTitle = "Project Anoxia - Lunar Ruins"
    [string]$GitHub_RepositoryName = "Anoxia"

    # Moon Base ssh key
    [string]$SSHKey_PrivateURLID = "1GmWulfVRzqmd6smBK0DzJZcPIKw8ti__"
    [string]$SSHKey_PrivateName = "anoxia_github_readonly"
    [string]$SSHKey_PublicURLID = "1cg216BH7fghtu6-jDb95sgW5vOShx8nK"
    [string]$SSHKey_PublicName = "anoxia_github_readonly.pub"

    # Moon base auto update
    [string]$AutoUpdateTXT_Name = "anoxia_modpack_path.txt"
    [string]$AutoUpdateCMD_Name = "anoxia_modpack_auto_update.cmd"
}
else {
    Write-Host "`nError: No project was found with name '$ProjectName'" -ForegroundColor Red
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    exit 1
}

# =================================================================================================== #

### Universal path
# Define .git path
[string]$GitDir = Join-Path -Path $ModpackDir -ChildPath ".git"

# Define key, file and path
[string]$KeyDir = Join-Path -Path $SrcDir -ChildPath "key"
[string]$SSHKey_PrivatePath = Join-Path -Path $KeyDir -ChildPath $SSHKey_PrivateName
[string]$SSHKey_PublicPath = Join-Path -Path $KeyDir -ChildPath $SSHKey_PublicName

# Define repository path
[string]$RepoDir = Join-Path -Path $SrcDir -ChildPath "repo"
[string]$RepoModpackDir = Join-Path -Path $RepoDir -ChildPath $GitHub_RepositoryName

# Define library, file and path
[string]$LibDir = Join-Path -Path $SrcDir -ChildPath "lib"
[string]$NoveLibDir = Join-Path -Path $LibDir -ChildPath $ModuleName
[string]$ModuleManifest = Join-Path -Path $NoveLibDir -ChildPath "$ModuleName.psd1"

# =================================================================================================== #

### Auto update
# Define Shell:Startup
[string]$ShellStartup = [Environment]::GetFolderPath("Startup")

# Define %temp%\NoveLib
[string]$LocalTemp = Join-Path -Path $env:TEMP -ChildPath $ModuleName
[string]$AutoUpdateTXT = Join-Path -Path $LocalTemp -ChildPath $AutoUpdateTXT_Name

# Define update, file and path
[string]$UpdateDir = Join-Path -Path $SrcDir -ChildPath "update"
[string]$AutoUpdateCMD = Join-Path -Path $UpdateDir -ChildPath $AutoUpdateCMD_Name
[string]$InShell_AutoUpdateCMD = Join-Path -Path $ShellStartup -ChildPath $AutoUpdateCMD_Name

# =================================================================================================== #

### Server
[string]$DownloadDir = Join-Path -Path $ToolsDir -ChildPath "download"
[string]$ForgeLib = Join-Path -Path $DownloadDir -ChildPath "libraries"
[string]$ForgeJVMArg = Join-Path -Path $DownloadDir -ChildPath "libraries"

# Forge
[string]$MCVer = "1.20.1"
[string]$ForgeVer = "47.4.0"
[string]$MavenBaseURL = "https://maven.minecraftforge.net/net/minecraftforge/forge"
[string]$ForgeFileName = "forge-$MCVer-$ForgeVer-installer.jar"
[string]$URL = "$MavenBaseURL/$MCVer-$ForgeVer/$ForgeFileName"
#endregion

# =================================================================================================== #

#region Import module
try {
    # Import module NoveLib
    Import-Module -Name $ModuleManifest -Force -ErrorAction Stop
    Write-LogHost -Message "Inizialize..." -Level INFO
    Write-AsciiArt
}
catch {
    # User response
    Write-Host "`nError: Failed to import module: '$ModuleName'." -ForegroundColor Red
    Write-Host "`nReason: $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}

# Check git is installed
$gitVer = git.exe --version
if (-not ($gitVer -like "git version 2.*")) {
    Write-LogHost -Message "Git is required. Please install Git to continue." -Level FAIL
    Write-Host
    Write-LogHost -Message "https://git-scm.com/downloads/win" -Level DEBUG
    Write-Host
    Write-Host "Press Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}

# Check OpenSSH is installed
$sshVer = & ssh.exe -V 2>&1
if (-not ($sshVer.TargetObject -like "OpenSSH_for_Windows_9*")) {
    Write-LogHost -Message "OpenSSH is required. Please install Windows feature OpenSSH Client to continue." -Level FAIL
    Write-Host
    Write-LogHost -Message "Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0" -Level DEBUG
    Write-Host
    Write-Host "Press Enter to exit..." -NoNewline
    Read-Host
    Exit 1
}
#endregion

# =================================================================================================== #

#region DL SSH Key
function Start-DownloadSSHKey {
    param (
        [string]$SSHKey_Path,
        [string]$SSHKey_URLID,
        [string]$SSHKey_Name,
        [ValidateSet("private", "public")]
        [string]$KeyType
    )

    # Test key path download if not exist - Log
    Write-LogHost -Message "Check SSH $KeyType key" -Level INFO
    if (-not (Test-Path -Path $SSHKey_Path -PathType Leaf)) {

        # Create key dir if not exist
        if (-not (Test-Path -Path $KeyDir -PathType Container)) {
            New-Item -Path $KeyDir -ItemType Directory -Force | Out-Null
        }

        # Download Key
        Write-LogHost -Message "Start download SSH $KeyType key" -Level INFO
        $URL = $GoogleBaseURL + $SSHKey_URLID
        $OutFile = Join-Path -Path $KeyDir -ChildPath $SSHKey_Name
        $ExitCode = Start-DownloadFile -URL $URL -OutFile $OutFile

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Download completed SSH $KeyType key" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed download SSH $KeyType key" -Level FAIL
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else {
        Write-LogHost -Message "Find SSH $KeyType key" -Level DONE
    }
}

# =================================================================================================== #

# Ensure both key
function Invoke-DownloadSSHKey {

    # Ensure SSH private Key
    Start-DownloadSSHKey -SSHKey_Path $SSHKey_PrivatePath -SSHKey_URLID $SSHKey_PrivateURLID `
        -SSHKey_Name $SSHKey_PrivateName -KeyType private

    # Ensure SSH public Key
    Start-DownloadSSHKey -SSHKey_Path $SSHKey_PublicPath -SSHKey_URLID $SSHKey_PublicURLID `
        -SSHKey_Name $SSHKey_PublicName -KeyType public
}
#endregion

# =================================================================================================== #

#Region DL Repository
function Invoke-DownloadRepository {

    # Ensure SSH Key
    Invoke-DownloadSSHKey

    # Test repository path download if not exist - Log
    Write-LogHost -Message "Check repositoy folder" -Level INFO
    if (-not (Test-Path -Path $RepoModpackDir -PathType Container)) {

        # Create Repository dir if not exist
        if (-not (Test-Path -Path $RepoDir -PathType Container)) {
            New-Item -Path $RepoDir -ItemType Directory -Force | Out-Null
        }

        # Download repository with ssh - Log
        Write-LogHost -Message "Prepare SSH Command" -Level INFO
        Invoke-UIGitTop
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        & git clone -b 1.20 --depth 1 --single-branch "git@github.com:NoveIX/$GitHub_RepositoryName.git" $RepoModpackDir
        $ExitCode = $LASTEXITCODE
        Invoke-UIGitBot

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Download repository completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed to download repository. Git clone exit code $ExitCode." -Level FAIL
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else {
        Write-LogHost -Message "Find repositoy folder" -Level DONE
    }
}
#endregion

# =================================================================================================== #

#region Setup
function Invoke-Setup {
    param (
        [switch]$Repair
    )

    # Set title
    [Console]::Title = "Setup $PSTitle"
    Write-LogHost -Message "Execute setup" -Level INFO

    # Ensure repository
    Invoke-DownloadRepository

    # Test .git path in modpack dir copy file if not exist - Log
    Write-LogHost -Message "Check .git folder" -Level INFO
    if (-not (Test-Path -Path $GitDir -PathType Container)) {

        # Copy file in modpack dir
        Write-LogHost -Message "Start copy repository file in modpack folder" -Level INFO
        $ExitCode = Copy-FileFast -Source $RepoModpackDir -Destination $ModpackDir

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy repository file in modpack folder completed" -Level DONE
            Invoke-AutoUpdateSetup -Repair:$Repair
        }
        else {
            Write-LogHost -Message "Failed to copy repository file in modpack folder" -Level FAIL
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else {
        Write-LogHost -Message "Find .git folder" -Level DONE
    }
}
#endregion

# =================================================================================================== #

#region Setup AutoUp
function Invoke-AutoUpdateSetup {
    param (
        [switch]$Repair
    )

    if ($Repair) {
        [bool]$SelfAutoUpdate = $((Test-Path -Path $InShell_AutoUpdateCMD -PathType Leaf) -and (Test-Path -Path $AutoUpdateTXT -PathType Leaf))
        if ($SelfAutoUpdate) { $ExitCode = 0 } # True
        else { $ExitCode = 1 } # False
    }
    else {
        Write-Host "`n# ==================== Auto update mode ===================== #`n"
        Write-Host "Enable auto update?"
        Write-Host "Every time your PC starts up with your user account, the system will check for updates to the modpack."
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?"
        Write-Host "`n# =========================================================== #`n"
    }

    if ($ExitCode -eq 0) {
        # Create NoveLib dir in %Temp% if not exist
        if (-not (Test-Path -Path $LocalTemp -PathType Container)) {
            New-Item -Path $LocalTemp -ItemType Directory -Force | Out-Null
        }

        # Write update path in user local temp - Log
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($AutoUpdateTXT, $MainPS1, $utf8NoBom)
        if ($?) { Write-LogHost -Message "Write modpack path in $AutoUpdateTXT" -Level DONE }
        else { Write-LogHost -Message "Failed to write modpack path in $AutoUpdateTXT" -Level FAIL }

        # Copy file execute update in Shell Startup
        Write-LogHost -Message "Start copy $AutoUpdateCMD_Name file in Shell:Starup" -Level INFO
        $ExitCode = Copy-FileFast -Source $AutoUpdateCMD -Destination $ShellStartup

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy $AutoUpdateCMD_Name in Shell:Starup completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed to copy $AutoUpdateCMD_Name in Shell:Starup" -Level FAIL
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }

        Write-LogHost -Message "Setup completed." -Level INFO
        Write-Host "`nAuto update: ON"
    }
    else {
        Write-LogHost -Message "Setup completed." -Level INFO
        Write-Host "`nAuto update: OFF"
    }
}
#endregion

# =================================================================================================== #

#region Update
function Invoke-Update {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Location
    )

    # Set title - Log
    [Console]::Title = "Update $PSTitle"
    Write-LogHost -Message "Execute update" -Level INFO

    # Test .gir path in modpack dir copy file if not exist - Log
    Write-LogHost -Message "Check .git folder in modpack folder" -Level INFO
    if (Test-Path -Path $gitDir -PathType Container) {

        # Log - Change directory to execute git pull
        Write-LogHost -Message "Change directory to: $Location" -Level INFO
        Set-Location -Path $Location
        Write-LogHost -Message "Prepare SSH Command" -Level INFO
        Invoke-UIGitTop

        # Download Update with ssh
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        & git pull
        $ExitCode = $LASTEXITCODE
        Set-Location -Path $WokrDir

        # Log
        Invoke-UIGitBot
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Check repository update completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed get update " -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            exit 1
        }
    }
    else {
        Write-LogHost -Message "can't find .git folder in Modpack folder" -Level WARN
        $ExitCode = Confirm-Selection -Message "`nWould you like to proceed with the installation?"
        if ($ExitCode -eq 0) {
            Write-Host "`nStarting setup..." -NoNewline
            Start-Sleep -Seconds 3
            Clear-Host
            Invoke-Setup
        }
    }
}
#endregion

# =================================================================================================== #

#region Repair
function Invoke-Repair {
    # Set title
    [Console]::Title = "Repair $PSTitle"
    Write-LogHost -Message "Execute Repair" -Level INFO

    # Get item from repository dir - Log
    Write-LogHost -Message "get items in repository modpack dir" -Level INFO
    $RepoModpackItems = Get-ChildItem -Path $RepoModpackDir -Force -ErrorAction SilentlyContinue
    foreach ($repoModpackItem in $repoModpackItems) {

        # Calculate the path relative to the repository folder
        [string]$relativePath = $repoModpackItem.FullName.Substring((Resolve-Path $repoModpackDir).Path.Length)
        [string]$destPath = Join-Path -Path $ModpackDir -ChildPath $relativePath
        [string]$destDir = Split-Path $destPath -Leaf

        # If the folder exist in the modpack dir, remove it - Skip Tools
        if ((Test-Path -Path $destPath) -and ($destPath -notlike "*Tools*")) {
            Remove-Item -Path $destPath -Recurse -Force
            if ($?) { Write-LogHost -Message "Deleted $destDir folder in modpak folder" -Level DONE }
            else { Write-LogHost -Message "Don't exist $destDir folder in modpak folder" -Level INFO }
        }
        else {
            Write-LogHost -Message "Skip $destDir folder in modpak folder" -Level TRACE
        }
    }

    # Remove SSH key dir - Log
    Remove-Item -Path $KeyDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted key folder in src folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist key folder in src folder" -Level INFO }

    # Remove Repo dir - Log
    Remove-Item -Path $RepoDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted repo folder in src folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist repo folder in src folder" -Level INFO }

    # Starting setup in repair mode - Log
    Write-LogHost -Message "Delete completed" -Level DONE
    Write-Host "`nStarting setup..." -NoNewline
    Start-Sleep -Seconds 3
    Clear-Host
    Invoke-Setup -Repair
}
#endregion

# =================================================================================================== #

#region Remove
function Invoke-Remove {

    # Set title
    [Console]::Title = "Remove $PSTitle"
    Write-LogHost -Message "Execute Remove" -Level INFO

    # ========= #

    # Remove .git in modpack dir - Log
    Remove-Item -Path $GitDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted .git folder in modpack folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist .git folder in modpack folder" -Level INFO }

    # ========= #

    # Remove key dir - Log
    Remove-Item -Path $KeyDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted key folder in src folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist key folder in src folder" -Level INFO }

    # ========= #

    # Remove repo dir - Log
    Remove-Item -Path $RepoDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted repo folder in src folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist repo folder in src folder" -Level INFO }

    # ========= #

    # Remove NoveLib in local user temp - Log
    Remove-Item -Path $LocalTemp -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted NoveLib folder in %Temp% folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist NoveLib folder in %Temp% folder" -Level INFO }

    # ========= #

    # Remove auto update file in Shell:Startup - Log
    Remove-Item -Path $InShell_AutoUpdateCMD -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted $AutoUpdateCMD_Name file in Shell:Starup folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist $AutoUpdateCMD_Name file in Shell:Starup folder" -Level INFO }
}
#endregion

# =================================================================================================== #

#region Script code
if ($Update) {
    Invoke-Update -Location $ModpackDir
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
else {
    Write-LogHost -Message "Fueature not write yet" -Debug
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