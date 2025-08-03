# File: Tools\src\app\Main.ps1

# Parameter
param(
    [Parameter(ParameterSetName = 'Setup')]
    [switch]$Setup,
    [Parameter(ParameterSetName = 'Update')]
    [switch]$Update,
    [Parameter(ParameterSetName = 'Repair')]
    [switch]$Repair,
    [Parameter(ParameterSetName = 'Remove')]
    [switch]$Remove
)

# Set background black
[console]::BackgroundColor = 'Black'
Clear-Host

# =================================================================================================== #

#region Definition
# DEV => [string]$AppDir = "C:\Users\stefy\Source\Repos\Moon-Base-2\tools\src\app"

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
[string]$ModuleName = 'NoveLib'

# Google direct link
[string]$GoogleBaseURL = 'https://drive.google.com/uc?export=download&id='

# Find modpack dir
if ($ModpackDir -Like "*\Moon*") {
    # Title - GitHub repository name
    [string]$PSTitle = 'Moon Base 2'
    [string]$GitHub_RepositoryName = 'mb2-modpack'

    # Moon Base ssh key
    [string]$SSHKey_PrivateURLID = '1NQBNCotC3-pcMcZRLzwxxLost_WgKaPl'
    [string]$SSHKey_PublicURLID = '1H-98PGCJhcaKIWX1VwV0YhYF9iOn2tUc'
    [string]$SSHKey_PrivateName = 'moonbase2_github_readonly'
    [string]$SSHKey_PublicName = 'moonbase2_github_readonly.pub'

    # Moon base auto update
    [string]$AutoUpdate_FileNameTXT = 'MoonBase2_modpack_path.txt'
    [string]$AutoUpdate_FileNameCMD = 'MoonBase2_auto_update.cmd'
}
else {
    $ProjectName = Split-Path $ModpackDir -Leaf
    Write-Host "`nError: No project was found with Name '$ProjectName'" -ForegroundColor Red
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    exit 1
}

# =================================================================================================== #

### Universal path

# Define .git path
[string]$GitDir = Join-Path -Path $ModpackDir -ChildPath ".git"

# Define key, file and path
[string]$keyDir = Join-Path -Path $ToolsDir -ChildPath 'key'
[string]$SSHKey_PrivatePath = Join-Path -Path $keyDir -ChildPath $SSHKey_PrivateName
[string]$SSHKey_PublicPath = Join-Path -Path $keyDir -ChildPath $SSHKey_PublicName

# Define repository path
[string]$RepoDir = Join-Path -Path $ToolsDir -ChildPath 'repo'
[string]$RepoModpackDir = Join-Path -Path $RepoDir -ChildPath $GitHub_RepositoryName

# Define library, file and path
[string]$LibDir = Join-Path -Path $SrcDir -ChildPath 'lib'
[string]$NoveLibDir = Join-Path -Path $LibDir -ChildPath $ModuleName
[string]$ModuleManifest = Join-Path -Path $NoveLibDir -ChildPath "$ModuleName.psd1"

# =================================================================================================== #

### Auto update
# Define Shell:Startup
[string]$ShellStartup = $shellStartup = [Environment]::GetFolderPath('Startup')

# Define %temp%\NoveLib
[string]$TempPath = Join-Path -Path $env:TEMP -ChildPath $ModuleName
[string]$AutoUpTXTPath = Join-Path -Path $TempPath -ChildPath $AutoUpdate_FileNameTXT

# Define update, file and path
[string]$UpdateDir = Join-Path -Path $srcDir -ChildPath 'update'
[string]$AutoUpdateCMD = Join-Path -Path $UpdateDir -ChildPath $AutoUpdate_FileNameCMD
[string]$InShell_AutoUpdateCMD = Join-Path -Path $ShellStartup -ChildPath $AutoUpdate_FileNameCMD
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
        [ValidateSet('private', 'public')]
        [string]$KeyType
    )

    # Test key path download if not exist - Log
    Write-LogHost -Message "Check SSH $KeyType key" -Level INFO
    if (-not (Test-Path -Path $SSHKey_Path -PathType Leaf) -or $Repair) {

        # Create key dir if not exist
        if (-not (Test-Path -Path $keyDir -PathType Container)) {
            New-Item -Path $keyDir -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created key folder" -Level DONE }
            else { Write-LogHost -Message "Failed to create key folder" -Level FAIL }
        }

        # Download Key
        Write-LogHost -Message "Start download SSH $KeyType key" -Level INFO
        $URL = $GoogleBaseURL + $SSHKey_URLID
        $OutFile = Join-Path -Path $keyDir -ChildPath $SSHKey_Name
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
    if (-not (Test-Path -Path $RepoModpackDir -PathType Container) -or $Repair) {

        # Create Repository dir if not exist
        if (-not (Test-Path -Path $RepoDir -PathType Container)) {
            New-Item -Path $RepoDir -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created repositoy folder" -Level DONE }
            else { Write-LogHost -Message "Failed to create repositoy folder" -Level FAIL }
        }

        # Log
        Write-LogHost -Message "Prepare SSH Command" -Level INFO
        Invoke-UIGitTop

        # Download repository with ssh
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        git clone -b 1.20 --depth 1 --single-branch "git@github.com:NoveIX/$GitHub_RepositoryName.git" $RepoModpackDir
        $ExitCode = $LASTEXITCODE

        # Log
        Invoke-UIGitBot
        if ($ExitCode -ne 0) {
            Write-LogHost -Message "Failed to download repository. Git clone exit code $ExitCode." -Level FAIL
            Write-Host "`nPress Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
        else {
            Write-LogHost -Message "Download repository completed" -Level DONE
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

    # Set title
    [Console]::Title = "Setup $PSTitle"
    Write-LogHost -Message "Execute setup" -Level INFO

    # Ensure repository
    Invoke-DownloadRepository -Repair:$Repair

    # Test .git path in modpack dir copy file if not exist - Log
    Write-LogHost -Message "Check .git folder" -Level INFO
    if (-not (Test-Path -Path $GitDir -PathType Container) -or $Repair) {

        # Copy file in modpack dir
        Write-LogHost -Message "Start copy repository file in modpack folder" -Level INFO
        $ExitCode = Copy-FileFast -Source $RepoModpackDir -Destination $ModpackDir

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy repository file completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed to copy repository" -Level FAIL
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

    Write-Host "`n# ==================== Auto update mode ===================== #`n"
    Write-Host "Enable auto update?"
    Write-Host "Every time your PC starts up with your user account, the system will check for updates to the modpack."
    if (Test-Path -Path $InShell_AutoUpdateCMD -PathType Leaf) {
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?" -Answer 'Y'
    }
    else {
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?"
    }
    Write-Host "`n# =========================================================== #`n"

    if ($ExitCode -eq 0) {
        # Create NoveLib dir in %Temp% if not exist
        if (-not (Test-Path -Path $TempPath -PathType Container)) {
            New-Item -Path $TempPath -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created folder $TempPath" -Level DONE }
            else { Write-LogHost -Message "Failed to create folder $TempPath" -Level FAIL }
        }

        # Write update path in user local temp - Log
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($AutoUpdate_PathTXT, $MainPS1, $utf8NoBom)
        if ($?) { Write-LogHost -Message "Write modpack path in $AutoUpdate_PathTXT" -Level DONE }
        else { Write-LogHost -Message "Failed to write modpack path in $AutoUpdate_PathTXT" -Level FAIL }

        # Copy file execute update in Shell Startup
        Write-LogHost -Message "Start copy $AutoUpdate_FileNameCMD file in `"Shell:Starup`"" -Level INFO
        $ExitCode = Copy-FileFast -Source $AutoUpdateCMD -Destination $ShellStartup

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy `"$AutoUpdate_FileNameCMD`" in `"Shell:Starup`" completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed to copy `"$AutoUpdate_FileNameCMD`" in `"Shell:Starup`"" -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
        return 0
    }
    else {
        return 1
    }
}
#endregion

# =================================================================================================== #

#region Update
function Invoke-Update {
    param ()

    # Set title - Log
    [Console]::Title = "Update $Modpack_PSTitle"
    Write-LogHost -Message "Execute update" -Level INFO

    # Ensure SSH Key
    Invoke-DownloadSSHKey

    # Test .gir path in modpack dir copy file if not exist - Log
    Write-LogHost -Message "Control .git folder" -Level INFO
    if (Test-Path -Path $gitDir -PathType Container) {

        # Log - Change directory to execute git pull
        Write-LogHost -Message "Change directory to: $ModpackDir" -Level INFO
        Set-Location -Path $ModpackDir

        # Log
        Write-LogHost -Message "Prepare SSH Command" -Level INFO
        Invoke-UIGitTop

        # Download Update with ssh
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        git pull

        # Log
        Invoke-UIGitBot
        if ($LASTEXITCODE -eq 0) {
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
        return 1
    }

    return 0
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
        [string]$destDir = Split-Path $destPath -Parent

        # If the folder exist in the modpack dir, remove it - Skip Tools
        if ((Test-Path -Path $destPath) -and ($destPath -notlike "*Tools*")) {
            Remove-Item -Path $destPath -Recurse -Force

            # Log
            if ($?) { Write-LogHost -Message "Deleted folder $destDir" -Level DONE }
            else { Write-LogHost -Message "Don't exist folder $destDir" -Level INFO }
        }
        else {
            Write-LogHost -Message "Skip folder $destPath" -Level TRACE
        }
    }

    # Remove SSH key dir - Log
    Remove-Item -Path $keyDir -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted key folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist the key folder" -Level INFO }

    # Remove Repo dir - Log
    Remove-Item -Path $RepoDir -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted repositoy folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist repositoy folder" -Level INFO }

    # Log
    Write-LogHost -Message "Delete completed" -Level DONE

    return 0
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
    if ($?) { Write-LogHost -Message "Deleted folder .git in modpack folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist .git folder in modpack folder" -Level INFO }

    # ========= #

    # Remove NoveLib in local user temp - Log
    Remove-Item -Path $TempPath -Recurse -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted folder $TempPath" -Level DONE }
    else { Write-LogHost -Message "Don't exist folder $TempPath" -Level INFO }

    # ========= #

    # Remove auto update file in Shell:Startup - Log
    Remove-Item -Path $InShell_AutoUpdateCMD -Force -ErrorAction SilentlyContinue
    if ($?) { Write-LogHost -Message "Deleted file `"$AutoUp_CMDFileName`" in `"Shell:Starup`" folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist `"$AutoUp_CMDFileName`" file in `"Shell:Starup`" folder" -Level INFO }

    # ========= #

    return 0
}
#endregion

# =================================================================================================== #

#region Script code
if ($Update) {
    $ExitCode = Invoke-Update
    if ($ExitCode -eq 1) {
        Write-LogHost -Message "can't find .git folder in Modpack folder`n" -Level WARN
        $ExitCode = Confirm-Selection -Message "Would you like to proceed with the installation?"
        if ($ExitCode -eq 0) {
            Write-Host "`nStarting setup..." -NoNewline
            Start-Sleep -Seconds 3
            . $MainPS1 -Setup
            exit 0
        }
    }
}
elseif ($Setup) {
    $ExitCode = Invoke-Setup
    if ($ExitCode -eq 0) {
        $ExitCode = Invoke-AutoUpdateSetup
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Setup completed. Auto update: ON" -Level INFO
        }
        else {
            Write-LogHost -Message "Setup completed. Auto update: OFF" -Level INFO
        }
    }
}
elseif ($Repair) {
    $ExitCode = Invoke-Repair
    Write-Host "`nStarting setup..." -NoNewline
    Start-Sleep -Seconds 3
    . $MainPS1 -Setup
    exit 0
}
elseif ($Remove) {
    $ExitCode = Invoke-Remove
}
else {
    Write-LogHost -Message "Fueature not write yet" -Debug
}

# Give time to read
Write-Host "`n# Script finished. Closing in 15 seconds. #" -NoNewline
Start-Sleep -Seconds 15
exit 0
#endregion