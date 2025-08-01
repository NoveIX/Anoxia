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

# Module name
[string]$ModuleName = 'NoveLib'

# Google direct link
[string]$GoogleDirectLink = 'https://drive.google.com/uc?export=download&id='


# DEV => [string]$AppDir = "C:\Users\stefy\Source\Repos\MoonBase\Tools\src\app"

# Locate script path
[string]$MainPS1 = $MyInvocation.MyCommand.Path
[string]$AppDir = $PSScriptRoot
Set-Location -Path $AppDir

# Define parent path
[string]$SrcDir = Split-Path -Path $AppDir -Parent
[string]$ToolsDir = Split-Path -Path $SrcDir -Parent
[string]$ModpackDir = Split-Path -Path $ToolsDir -Parent

# Find modpack dir
if ($ModpackDir -Like "*\Moon*") {
    # Title
    [string]$Modpack_PSTitle = 'Moon Base 2'
    # Github
    [string]$GitHub_RepositoryName = 'MoonBase2'

    # Moon Base ssh key
    [string]$SSHKey_PrivateURLID = '1NQBNCotC3-pcMcZRLzwxxLost_WgKaPl'
    [string]$SSHKey_PublicURLID = '1H-98PGCJhcaKIWX1VwV0YhYF9iOn2tUc'
    [string]$SSHKey_PrivateName = 'MoonBase2-RepositoryKey'
    [string]$SSHKey_PublicName = 'MoonBase2-RepositoryKey.pub'

    # Moon base auto update
    [string]$AutoUpTXTFileName = 'MoonBase2_ModpackPath.txt'
    [string]$AutoUpCMDFileName = 'Moon Base 2 - auto update.cmd'

}
else {
    $ModpackDir_IsolateName = Split-Path $ModpackDir -Leaf
    Write-Host "`nError: No project was found with Name '$ModpackDir_IsolateName'" -ForegroundColor Red
    Write-Host "`nPress Enter to exit..." -NoNewline
    Read-Host
    exit 1
}

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

### Auto update

# Define Shell:Startup
[string]$ShellStartup = $shellStartup = [Environment]::GetFolderPath('Startup')

# Define %temp%\NoveLib
[string]$TempPath = Join-Path -Path $env:TEMP -ChildPath $ModuleName
[string]$AutoUpTXTPath = Join-Path -Path $TempPath -ChildPath $AutoUpTXTFileName

# Define update, file and path
[string]$UpdateDir = Join-Path -Path $srcDir -ChildPath 'update'
[string]$AutoUpdateCMD = Join-Path -Path $UpdateDir -ChildPath $AutoUpCMDFileName
[string]$InShell_AutoUpdateCMD = Join-Path -Path $ShellStartup -ChildPath $AutoUpCMDFileName
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
        [string]$KeyType,
        [switch]$Repair
    )

    # Log
    Write-LogHost -Message "Control SSH $KeyType key" -Level INFO

    # Test key path download if not exist
    if (-not (Test-Path -Path $SSHKey_Path -PathType Leaf) -or $Repair) {

        # Repair mode - Remove key
        if ($Repair) {
            Remove-Item -Path $SSHKey_Path -Force -ErrorAction SilentlyContinue

            # Log
            if ($?) { Write-LogHost -Message "Deleted SSH $KeyType key" -Level DONE }
            else { Write-LogHost -Message "Don't exist file SSH $KeyType key" -Level INFO }
        }

        # Create key dir if not exist
        if (-not (Test-Path -Path $keyDir -PathType Container)) {
            New-Item -Path $keyDir -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created key folder" -Level DONE }
            else { Write-LogHost -Message "Failed to create key folder" -Level FAIL }
        }

        # Construct full URL for key
        Write-LogHost -Message "Construct full URL for $KeyType key" -Level INFO
        [string]$URL = $GoogleDirectLink + $SSHKey_URLID

        # Download Key
        Write-LogHost -Message "Start download SSH $KeyType key" -Level INFO
        [string]$OutFile = Join-Path -Path $keyDir -ChildPath $SSHKey_Name
        $ExitCode = Start-DownloadFile -URL $URL -OutFile $OutFile

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Download completed SSH $KeyType key" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed download SSH $KeyType key" -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }
    else {
        # Log
        Write-LogHost -Message "Find SSH $KeyType key" -Level DONE
    }
}

# =================================================================================================== #

# Ensure both key
function Invoke-DownloadSSHKey {
    param (
        [switch]$Repair
    )

    # Ensure SSH private Key
    Start-DownloadSSHKey -SSHKey_Path $SSHKey_PrivatePath -SSHKey_URLID $SSHKey_PrivateURLID `
        -SSHKey_Name $SSHKey_PrivateName -KeyType private -Repair:$Repair

    # Ensure SSH public Key
    Start-DownloadSSHKey -SSHKey_Path $SSHKey_PublicPath -SSHKey_URLID $SSHKey_PublicURLID `
        -SSHKey_Name $SSHKey_PublicName -KeyType public -Repair:$Repair
}
#endregion

# =================================================================================================== #

#Region DL Repository
function Invoke-DownloadRepository {
    param (
        [switch]$Repair
    )

    # Ensure SSH Key
    Invoke-DownloadSSHKey -Repair:$Repair

    # Log
    Write-LogHost -Message "Control repositoy folder" -Level INFO

    # Test repository path download if not exist
    if (-not (Test-Path -Path $RepoModpackDir -PathType Container) -or $Repair) {

        # Repair mode - Remove repository dir
        if ($Repair) {
            Remove-Item -Path $RepoDir -Recurse -Force -ErrorAction SilentlyContinue

            # Log
            if ($?) { Write-LogHost -Message "Deleted repositoy folder" -Level DONE }
            else { Write-LogHost -Message "Don't exist repositoy folder" -Level INFO }
        }

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

        # Log
        Invoke-UIGitBot
        if ($LASTEXITCODE -ne 0) {
            Write-LogHost -Message "Failed to download repository. Git clone exit code $LASTEXITCODE." -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
        else {
            Write-LogHost -Message "Download repository completed" -Level DONE
        }
    }
    else {
        # Log
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

    # Log - set title
    if ($Repair) {
        [Console]::Title = "Repair $Modpack_PSTitle"
        Write-LogHost -Message "Execute Repair" -Level INFO
    }
    else {
        [Console]::Title = "Setup $Modpack_PSTitle"
        Write-LogHost -Message "Execute setup" -Level INFO
    }

    # Ensure repository
    Invoke-DownloadRepository -Repair:$Repair

    # Log
    Write-LogHost -Message "Control .git folder" -Level INFO

    # Test .git path in modpack dir copy file if not exist
    if (-not (Test-Path -Path $GitDir -PathType Container) -or $Repair) {

        # Repair mode - remove in modpack dir if equal to repository
        if ($Repair) { Invoke-RepairDeleteFile }

        # Copy file in modpack dir
        Write-LogHost -Message "Start copy repository file in modpack folder" -Level INFO
        $ExitCode = Copy-FileFast -Source $RepoModpackDir -Destination $ModpackDir

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy repository file completed" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed to copy repository" -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }

        # Ask if you want auto update
        if ($Repair) { Invoke-AutoUpdate -Repair:$Repair -answer 'y' }
        else { Invoke-AutoUpdate }
    }
    else {
        # Log
        Write-LogHost -Message "Find .git folder" -Level DONE
    }

    # Give time to read
    Start-Sleep -Seconds 10
    exit 0
}
#endregion

# =================================================================================================== #

#region Update
function Invoke-Update {
    param ()

    # Set title
    [Console]::Title = "Update $Modpack_PSTitle"

    # Log
    Write-LogHost -Message "Execute update" -Level INFO

    # Ensure SSH Key
    Invoke-DownloadSSHKey

    #Log
    Write-LogHost -Message "Control .git folder" -Level INFO

    # Test .gir path in modpack dir copy file if not exist
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
        # Log
        Write-LogHost -Message "can't find .git folder in Modpack folder" -Level WARN
        Write-Host

        # Ask if want execute setup
        Confirm-Selection -Message "Would you like to proceed with the installation?"
        Invoke-Setup
    }

    # Give time to read
    Start-Sleep -Seconds 10
    exit 0
}
#endregion

# =================================================================================================== #

#region Delete File
function Invoke-RepairDeleteFile {
    param ()

    # Log
    Write-LogHost -Message "get items in repository modpack dir" -Level INFO

    # Get item from repository dir
    $repoModpackItems = Get-ChildItem -Path $RepoModpackDir -Force

    # remove all item in modpack dir if exist in repository dir
    foreach ($repoModpackItem in $repoModpackItems) {

        # Calculate the path relative to the repository folder
        [string]$relativePath = $repoModpackItem.FullName.Substring((Resolve-Path $repoModpackDir).Path.Length)

        # Builds the corresponding path in the modpack dir
        [string]$destPath = Join-Path -Path $ModpackDir -ChildPath $relativePath

        # If the folder exist in the modpack dir, remove it - Skip Tools
        if ((Test-Path -Path $destPath) -and ($destPath -notlike "*Tools*")) {
            Remove-Item -Path $destPath -Recurse -Force

            # Log
            if ($?) { Write-LogHost -Message "Deleted folder $destPath" -Level TRACE }
            else { Write-LogHost -Message "Don't exist folder $destPath" -Level INFO }
        }
        else {
            # Log
            Write-LogHost -Message "Skip folder $destPath" -Level TRACE
        }
    }

    #Log
    Write-LogHost -Message "Delete completed" -Level DONE
}
#endregion

# =================================================================================================== #

#region auto update
function Invoke-AutoUpdate {
    param (
        [switch]$Repair,
        [string]$answer
    )

    Write-Host "`n# ==================== Auto update mode ===================== #`n"

    Write-Host "Enable auto update?"
    Write-Host "Every time your PC starts up with your user account, the system will check for updates to the modpack."
    if (Test-Path -Path $InShell_AutoUpdateCMD -PathType Leaf) {
        Confirm-Selection -Message "Do you want to enable auto update mode?" -Answer 'y'
    }
    else {
        Confirm-Selection -Message "Do you want to enable auto update mode?"
    }

    Write-Host "`n# =========================================================== #`n"

    # Repair mode - Remove NoveLib in %Temp%
    if ($Repair) {
        Remove-Item -Path $TempPath -Recurse -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted folder $TempPath" -Level DONE }
        else { Write-LogHost -Message "Don't exist folder $TempPath" -Level INFO }
    }

    # Create NoveLib dir in %Temp% if not exist
    if (-not (Test-Path -Path $TempPath -PathType Container)) {
        New-Item -Path $TempPath -ItemType Directory -Force | Out-Null

        # Log
        if ($?) { Write-LogHost -Message "Created folder $TempPath" -Level DONE }
        else { Write-LogHost -Message "Failed to create folder $TempPath" -Level FAIL }
    }

    # Write update path in user local temp
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($AutoUpTXTPath, $MainPS1, $utf8NoBom)

    if ($?) { Write-LogHost -Message "Write modpack path in $TempPath" -Level DONE }
    else { Write-LogHost -Message "Failed to write modpack path in $TempPath" -Level FAIL }

    # ========= #

    # Repair mode - Remove NoveLib in %Temp%
    if ($Repair) {
        Remove-Item -Path $InShell_AutoUpdateCMD -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted in `"Shell:Starup`" file `"$AutoUpCMDFileName`"" -Level DONE }
        else { Write-LogHost -Message "Don't exist in `"Shell:Starup`" file `"$AutoUpCMDFileName`"" -Level INFO }
    }

    # Copy file execute update in Shell Startup
    $ExitCode = Copy-FileFast -Source $AutoUpdateCMD -Destination $ShellStartup

    # Log
    if ($ExitCode -eq 0) {
        Write-LogHost -Message "Copy `"$AutoUpCMDFileName`" in `"Shell:Starup`"" -Level DONE
    }
    else {
        Write-LogHost -Message "Failed to copy `"$AutoUpCMDFileName`" in `"Shell:Starup`"" -Level FAIL
        Write-Host
        Write-Host "Press Enter to exit..." -NoNewline
        Read-Host
        Exit 1
    }

    # Give time to read
    Start-Sleep -Seconds 10
    exit 0
}
#endregion

# =================================================================================================== #

#region remove
function Invoke-Remove {
    param ()

    # Set title
    [Console]::Title = "Remove $Modpack_PSTitle"

    # ========= #

    # Remove .git in modpack dir
    Remove-Item -Path $GitDir -Recurse -Force -ErrorAction SilentlyContinue

    # Log
    if ($?) { Write-LogHost -Message "Deleted folder .git in modpack folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist .git folder in modpack folder" -Level INFO }

    # ========= #

    # Remove NoveLib in local user temp
    Remove-Item -Path $TempPath -Recurse -Force -ErrorAction SilentlyContinue

    # Log
    if ($?) { Write-LogHost -Message "Deleted folder $TempPath" -Level DONE }
    else { Write-LogHost -Message "Don't exist folder $TempPath" -Level INFO }

    # ========= #

    # Remove auto update file in Shell:Startup
    Remove-Item -Path $InShell_AutoUpdateCMD -Force -ErrorAction SilentlyContinue

    # Log
    if ($?) { Write-LogHost -Message "Deleted file `"$AutoUpCMDFileName`" in `"Shell:Starup`" folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist `"$AutoUpCMDFileName`" file in `"Shell:Starup`" folder" -Level INFO }

    # ========= #

    # Give time to read
    Start-Sleep -Seconds 10
    exit 0
}
#endregion

# =================================================================================================== #

#region Script code
if ($Update) {
    Invoke-Update
}
elseif ($Setup) {
    Invoke-Setup
}
elseif ($Repair) {
    Invoke-Setup -Repair
}
elseif ($Remove) {
    Invoke-Remove
}
#endregion
