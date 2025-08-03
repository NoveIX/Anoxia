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
    [switch]$Remove,
    [Parameter(ParameterSetName = 'Server')]
    [switch]$Server,
    [Parameter(ParameterSetName = 'Server')]
    [string]$InvokeCMD
)

# Set background black
[console]::BackgroundColor = 'Black'
Clear-Host

# =================================================================================================== #

#region Definition
# Module name
[string]$ModuleName = 'NoveLib'

# Google base url
[string]$GoogleBaseURL = 'https://drive.google.com/uc?export=download&id='

# Locate script file and dir
[string]$MainPS1 = $MyInvocation.MyCommand.Path
[string]$AppDir = $PSScriptRoot
[string]$WokrDir = $AppDir
Set-Location -Path $WokrDir

# Define parent path
[string]$SrcDir = Split-Path -Path $AppDir -Parent
[string]$ToolsDir = Split-Path -Path $SrcDir -Parent
[string]$ModpackDir = Split-Path -Path $ToolsDir -Parent

# Find project
if ($ModpackDir -Like "*\Moon*") {
    # Title
    [string]$PSTitle = 'Moon Base 2'

    # Github
    [string]$GitHub_RepositoryName = 'Moon-Base-2'

    # Moon Base ssh key
    [string]$SSHKey_PrivateURLID = '1JdE8tJ-PKKY39eK5I8qi9K5Hi-mg_68Z'
    [string]$SSHKey_PublicURLID = '1DIDDAJZk2L7UZiElQr05PP7lE83taae4'
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
[string]$AutoUpdate_PathTXT = Join-Path -Path $TempPath -ChildPath $AutoUpdate_FileNameTXT

# Define update, file and path
[string]$UpdateDir = Join-Path -Path $srcDir -ChildPath 'update'
[string]$AutoUpdateCMD = Join-Path -Path $UpdateDir -ChildPath $AutoUpdate_FileNameCMD
[string]$InShell_AutoUpdateCMD = Join-Path -Path $ShellStartup -ChildPath $AutoUpdate_FileNameCMD

# =================================================================================================== #

### Server
# Define Dir
$DownloadDir = Join-Path -Path $ToolsDir -ChildPath "download"
$ForgeLib = Join-Path -Path $DownloadDir -ChildPath "libraries"
$ForgeJVMArg = Join-Path -Path $DownloadDir -ChildPath "libraries"

# Forge
$MCVer = "1.20.1"
$ForgeVer = "47.4.0"
$MavenDirectLink = "https://maven.minecraftforge.net/net/minecraftforge/forge"
$ForgeFileName = "forge-$MCVer-$ForgeVer-installer.jar"
#endregion

# =================================================================================================== #

#region Import module
function Import-LibModule {
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
}

function Test-GitVer {
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
}

function Test-OpenSSH {
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
}

function Test-Prerequisites {
    Import-LibModule
    Test-GitVer
    Test-OpenSSH
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

    # Log
    Write-LogHost -Message "Check SSH $KeyType key" -Level INFO

    # Test key path download if not exist
    if (-not (Test-Path -Path $SSHKey_Path -PathType Leaf)) {

        # Create key dir if not exist
        if (-not (Test-Path -Path $keyDir -PathType Container)) {
            New-Item -Path $keyDir -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created key folder" -Level DONE }
            else { Write-LogHost -Message "Failed to create key folder" -Level FAIL }
        }

        # Download Key
        Write-LogHost -Message "Start download SSH $KeyType key" -Level INFO
        [string]$URL = $GoogleBaseURL + $SSHKey_URLID
        [string]$OutFile = Join-Path -Path $keyDir -ChildPath $SSHKey_Name
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
    # Download SSH key if not exist
    Invoke-DownloadSSHKey

    # Test repository path download if not exist
    Write-LogHost -Message "Check repositoy folder" -Level INFO
    if (-not (Test-Path -Path $RepoModpackDir -PathType Container)) {

        # Create Repository dir if not exist
        if (-not (Test-Path -Path $RepoDir -PathType Container)) {
            New-Item -Path $RepoDir -ItemType Directory -Force | Out-Null

            # Log
            if ($?) { Write-LogHost -Message "Created repositoy folder" -Level DONE }
            else { Write-LogHost -Message "Failed to create repositoy folder" -Level FAIL }
        }

        # Download repository with ssh - Log
        Invoke-UIGitTop
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        git clone -b 1.20 --depth 1 --single-branch "git@github.com:NoveIX/$GitHub_RepositoryName.git" $RepoModpackDir

        # Log
        Invoke-UIGitBot
        if ($LASTEXITCODE -ne 0) {
            Write-LogHost -Message "Failed to download repository. Git clone exit code $LASTEXITCODE." -Level FAIL
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
    # Set title - Log
    [Console]::Title = "Setup $PSTitle"
    Write-LogHost -Message "Execute setup" -Level INFO

    # Dowload repository
    Invoke-DownloadRepository

    # Test .git path in modpack dir copy file if not exist
    Write-LogHost -Message "Check .git folder in modpack folder" -Level INFO
    if (-not (Test-Path -Path $GitDir -PathType Container)) {

        # Copy file in modpack dir
        Write-LogHost -Message "Start copy repository file in modpack folder" -Level INFO
        $ExitCode = Copy-FileFast -Source $RepoModpackDir -Destination $ModpackDir

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Copy repository file completed" -Level DONE
            return 0
        }
        else {
            Write-LogHost -Message "Failed to copy repository" -Level FAIL
            return 1
        }
    }
    else {
        Write-LogHost -Message "Find .git folder" -Level DONE
        return 0
    }
}
#endregion

# =================================================================================================== #

#region Update
function Invoke-Update {
    # Set title - Log
    [Console]::Title = "Update $PSTitle"
    Write-LogHost -Message "Execute update" -Level INFO

    # Test .git path in modpack dir copy file if not exist
    Write-LogHost -Message "Check .git folder" -Level INFO
    if (Test-Path -Path $gitDir -PathType Container) {

        # Download ssh key if deleted
        Invoke-DownloadSSHKey

        # Change directory to execute git pull - Log
        Write-LogHost -Message "Change directory to: $ModpackDir" -Level INFO
        Set-Location -Path $ModpackDir
        Write-LogHost -Message "Prepare SSH Command" -Level INFO
        Invoke-UIGitTop

        # Download Update with ssh
        $env:GIT_SSH_COMMAND = "ssh -i `"$SSHKey_PrivatePath`""
        git pull

        # Log
        Invoke-UIGitBot
        if ($LASTEXITCODE -ne 0) {
            Write-LogHost -Message "Failed get update. git pull exit code $LASTEXITCODE." -Level FAIL
            return 1
        }
        else {
            Write-LogHost -Message "Completed check update" -Level DONE
            return 0
        }
    }
    else {
        Write-LogHost -Message "can't find .git folder in Modpack folder" -Level WARN
        return 2
    }
}
#endregion

# =================================================================================================== #

#region Repair
function Invoke-Repair {
    # Repair mode - Remove key
    if ($Repair) {
        Remove-Item -Path $keyDir -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted key folder" -Level DONE }
        else { Write-LogHost -Message "Don't exist the key folder" -Level INFO }
    }keyDir


    # Repair mode - Remove repository dir
    if ($Repair) {
        Remove-Item -Path $RepoDir -Recurse -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted repositoy folder" -Level DONE }
        else { Write-LogHost -Message "Don't exist repositoy folder" -Level INFO }
    }

    # Repair mode - Remove NoveLib in %Temp%
    if ($Repair) {
        Remove-Item -Path $TempPath -Recurse -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted folder $TempPath" -Level DONE }
        else { Write-LogHost -Message "Don't exist folder $TempPath" -Level INFO }
    }


    # Repair mode - Remove NoveLib in %Temp%
    if ($Repair) {
        Remove-Item -Path $InShell_AutoUpdateCMD -Force -ErrorAction SilentlyContinue

        # Log
        if ($?) { Write-LogHost -Message "Deleted in `"Shell:Starup`" file `"$AutoUpdate_FileNameCMD`"" -Level DONE }
        else { Write-LogHost -Message "Don't exist in `"Shell:Starup`" file `"$AutoUpdate_FileNameCMD`"" -Level INFO }
    }

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

#region remove
function Invoke-Remove {
    param ()

    # Set title
    [Console]::Title = "Remove $PSTitle"

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
    if ($?) { Write-LogHost -Message "Deleted file `"$AutoUpdate_FileNameCMD`" in `"Shell:Starup`" folder" -Level DONE }
    else { Write-LogHost -Message "Don't exist `"$AutoUpdate_FileNameCMD`" file in `"Shell:Starup`" folder" -Level INFO }

    # ========= #

    # Give time to read
    Start-Sleep -Seconds 15
    exit 0
}
#endregion

# =================================================================================================== #

#region Server
function Invoke-Server {
    param()

    Invoke-Update

    # Test java version
    Test-JavaVersion

    if (Test-Path -Path $DownloadDir -PathType Container) {
        New-Item -ItemType Directory -Path $DownloadDir -Force | Out-Null
    }

    # download Forge
    $URL = "$MavenDirectLink/$MCVer-$ForgeVer/$ForgeFileName"
    $OutFile = Join-Path -Path $DownloadDir -ChildPath $forgeFileName

    # Download Forge Installer
    if (-not (Test-Path -Path $OutFile -PathType Leaf)) {
        $ExitCode = Start-DownloadFile -URL $URL -OutFile $OutFile

        # Log
        if ($ExitCode -eq 0) {
            Write-LogHost -Message "Download completed Forge installer" -Level DONE
        }
        else {
            Write-LogHost -Message "Failed download Forge installer" -Level FAIL
            Write-Host
            Write-Host "Press Enter to exit..." -NoNewline
            Read-Host
            Exit 1
        }
    }

    if (-not (Test-Path -Path $ForgeLib -PathType Container) -and -not (Test-Path -Path $ForgeJVMArg -PathType Leaf)) {
        <# Action to perform if the condition is true #>
        Set-Location -Path $DownloadDir
        java.exe -jar $ForgeFileName --installServer
        Set-Location -Path $AppDir
    }

    $ExitCode = Copy-FileFast -Source $ForgeDir -Destination $ModpackDir

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
}

#endregion

# =================================================================================================== #

#region auto update
function Invoke-AutoUpdateSetup {

    Write-Host "`n# ==================== Auto update mode ===================== #`n"

    Write-Host "Enable auto update?"
    Write-Host "Every time your PC starts up with your user account, the system will check for updates to the modpack."
    if (Test-Path -Path $InShell_AutoUpdateCMD -PathType Leaf) {
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?" -Answer 'y'
        if ($ExitCode -eq 1) { return 1 }
    }
    else {
        $ExitCode = Confirm-Selection -Message "Do you want to enable auto update mode?"
        if ($ExitCode -eq 1) { return 1 }
    }

    Write-Host "`n# =========================================================== #`n"

    # Create NoveLib dir in %Temp% if not exist
    if (-not (Test-Path -Path $TempPath -PathType Container)) {
        New-Item -Path $TempPath -ItemType Directory -Force | Out-Null

        # Log
        if ($?) { Write-LogHost -Message "Created folder $TempPath" -Level DONE }
        else { Write-LogHost -Message "Failed to create folder $TempPath" -Level FAIL }
    }

    # Write update path in user local temp
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($AutoUpdate_PathTXT, $MainPS1, $utf8NoBom)

    if ($?) { Write-LogHost -Message "Write modpack path in $TempPath" -Level DONE }
    else { Write-LogHost -Message "Failed to write modpack path in $TempPath" -Level FAIL }

    # ========= #

    # Copy file execute update in Shell Startup
    $ExitCode = Copy-FileFast -Source $AutoUpdateCMD -Destination $ShellStartup

    # Log
    if ($ExitCode -eq 0) {
        Write-LogHost -Message "Completed copy `"$AutoUpdate_FileNameCMD`" in `"Shell:Starup`"" -Level DONE
        return 0
    }
    else {
        Write-LogHost -Message "Failed to copy `"$AutoUpdate_FileNameCMD`" in `"Shell:Starup`"" -Level FAIL
        return 1
    }
}
#endregion

# =================================================================================================== #

#region Validate JAVA
function Test-JavaVersion {
    param ()

    # Validate java
    try {
        # Prova prima con --version (Java 9+)
        $output = & java --version 2>$null
        if (-not $output) {
            # Prova con -version (Java 8)
            $output = & java -version 2>&1
        }

        # Se ancora non c'è output, Java non è disponibile
        if (-not $output) {
            Write-Host "Java non è installato o non è nel PATH."
            exit 1
        }
    }
    catch {
        Write-Host "Java non è installato o non è nel PATH."
        exit 1
    }

    # Estrai la versione dalla prima riga
    $firstLine = $output | Select-Object -First 1

    # Match per Java 9+ (es: 17.0.1)
    if ($firstLine -match '\b(\d{1,2}\.\d+\.\d+)\b') {
        $version = $matches[1]
    }
    # Match per Java 8 (es: "1.8.0_381")
    elseif ($firstLine -match '"(1\.\d+\.\d+(?:_\d+)?)"') {
        $version = $matches[1]
    }
    else {
        Write-Host "Impossibile determinare la versione Java."
        exit 1
    }

    Write-Host "Java è installato. Versione: $version"

    # Estrai la versione major
    if ($version -match '^1\.(\d+)') {
        $major = [int]$matches[1]
    }
    elseif ($version -match '^(\d+)\.') {
        $major = [int]$matches[1]
    }
    else {
        Write-Host "Impossibile determinare la major version."
        exit 1
    }

    Write-Host "Versione Java major: $major"

    # Controlla che sia almeno 17
    if ($major -lt 17) {
        Write-Host "⚠️  Java deve essere almeno versione 17. Versione rilevata: $major"
        exit 1
    }

    Write-Host "✅ Java soddisfa i requisiti (>= 17)"
}

#endregion

# =================================================================================================== #

#region Script code
Test-Prerequisites

if ($Setup) {
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
    else {
        Write-LogHost -Message "Setup failed" -Level FAIL
        Write-Host "`nPress Enter to exit..." -NoNewline
        Read-Host
        exit 1
    }
}
elseif ($Update) {
    $ExitCode = Invoke-Update
    if ($ExitCode -eq 1) {
        Write-LogHost -Message "Update failed" -Level FAIL
        Write-Host "`nPress Enter to exit..." -NoNewline
        Read-Host
        exit 1
    }
    elseif ($ExitCode -eq 2) {
        Write-LogHost -Message "Update failed. .git folder not found" -Level FAIL
        Write-LogHost -Message "Execute setup or try repair" -Level INFO
        Write-Host "`nPress Enter to exit..." -NoNewline
        Read-Host
        exit 1
    }
}
elseif ($Repair) {
    Invoke-Repair
}
elseif ($Remove) {
    Invoke-Remove
}
elseif ($Server) {
    if ($InvokeCMD -eq "run_dev.cmd") {
        Invoke-Server
    }
    else {
        Write-Host "`nError: Failed to install or run server" -ForegroundColor Red
        Write-Host "`nPlease use src/server/win/run_dev.cmd" -ForegroundColor Blue
        Write-Host "`nPress Enter to exit..." -NoNewline
        Read-Host
        Exit 1
    }
}

Write-Host "`nScript finished. Closing in 15 seconds.`n"
Start-Sleep -Seconds 15
exit 0
#endregion