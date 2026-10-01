param (
    # Java
    [Parameter(Mandatory = $true, ParameterSetName = 'java')]
    [switch]$InstallJava,

    # Mod Loader
    [Parameter(Mandatory = $true, ParameterSetName = 'ModLoader')]
    [switch]$InstallModLoader
)


# ====================================================================================== #


#region Logging
function Write-Log {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [ValidateSet("Info", "Warn", "Error")]
        [string]$Level,

        [Parameter(Mandatory = $true, Position = 1)]
        [string]$Message
    )

    $Color = switch ($Level) {
        "Info" { "Blue" }
        "Warn" { "DarkYellow" }
        "Error" { "DarkRed" }
    }

    Write-Host "[" -NoNewline
    Write-Host $Level.ToUpper() -ForegroundColor $Color -NoNewline
    Write-Host "]: $Message"
}

function Write-LogInfo {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Log -Level Info -Message $Message
}

function Write-LogError {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Message
    )

    Write-Log -Level Error -Message $Message
}
#endregion


# ====================================================================================== #


#region Utility func
# Get system architecture (x64 or ARM64)
function Get-SystemArch {

    switch ($env:PROCESSOR_ARCHITECTURE) {

        'AMD64' { return 'x64' }
        'ARM64' { return 'arm64' }

        Default {
            throw [System.PlatformNotSupportedException]::new(
                "Unsupported processor architecture $env:PROCESSOR_ARCHITECTURE. Required architecture: AMD64 or ARM64."
            )
        }
    }
}

function Get-JavaApiArch {

    switch ($env:PROCESSOR_ARCHITECTURE) {

        'AMD64' { return 'x64' }
        'ARM64' { return 'aarch64' }

        Default {
            throw [System.PlatformNotSupportedException]::new(
                "Unsupported processor architecture $env:PROCESSOR_ARCHITECTURE. Required architecture: AMD64 or ARM64."
            )
        }
    }
}

# Download a file from a URL
function Invoke-FileDownload {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [string]$Path,

        [Parameter(Mandatory = $true, Position = 1)]
        [string]$Url
    )

    $FileInfo = [System.IO.FileInfo]::new($Path)

    # Try BITS
    try {
        Write-LogInfo "BITS: Downloading $($FileInfo.Name)"
        Start-BitsTransfer -Source $Url -Destination $FileInfo.FullName -ErrorAction Stop

        Write-LogInfo "BITS: Download completed"
        return
    }
    catch {
        $ex = $_.Exception
        Write-LogError "BITS: download failed: $($ex.Message)"
    }

    # Try WebRequest
    try {
        Write-LogInfo "WebRequest: Downloading $($FileInfo.Name)"
        Invoke-WebRequest -Uri $Url -OutFile $FileInfo.FullName -UseBasicParsing -ErrorAction Stop

        Write-LogInfo "WebRequest: Download completed"
        return
    }
    catch {
        $ex = $_.Exception
        Write-LogError "WebRequest: download failed: $($ex.Message)"
    }

    # If both methods fail, throw an exception
    throw [System.InvalidOperationException]::new(
        "Failed to download '$($FileInfo.Name)' using both BITS and WebRequest."
    )
}
#endregion


# ====================================================================================== #


#region Install java
# Download and install Java from Adoptium Temurin
function Install-Java {

    # Get system architecture
    $Arch = Get-SystemArch
    $JavaArch = Get-JavaApiArch

    # Get Java package metadata from environment variables
    $Major = $env:JAVA_VERSION
    $Variant = $env:JAVA_VARIANT.ToLower()

    # Build Java archive name and download URL
    $JavaArchive = "Adoptium-OpenJDK${Major}U-${Variant}-${Arch}-windows.zip"
    $JavaUrl = "https://api.adoptium.net/v3/binary/latest/${Major}/ga/windows/${JavaArch}/${Variant}/hotspot/normal/eclipse"

    # Build local Java paths
    $JavaZip = Join-Path -Path $env:ROOT -ChildPath $JavaArchive
    $JavaTemp = Join-Path -Path $env:ROOT -ChildPath "OpenJDK${Major}U"
    $JavaRoot = [System.IO.Path]::Combine($env:ROOT, "java", "windows-${Arch}-${Variant}-${Major}")
    #$JavaRoot = [System.IO.Path]::Combine($env:ROOT, "java", "windows", $Arch, $Variant, $Major)


    # Download Java archive if not already present
    if (-not (Test-Path -Path $JavaZip -PathType Leaf)) {
        Invoke-FileDownload -Path $JavaZip -Url $JavaUrl
    }


    # Install java if not already installed
    if (-not (Test-Path -Path $JavaRoot -PathType Container)) {

        # Expand Java Archive
        try {
            Write-LogInfo "Extracting $JavaArchive"
            Expand-Archive -Path $JavaZip -DestinationPath $JavaTemp -Force -ErrorAction Stop

            Write-LogInfo "Extraction completed"
        }
        catch {
            $ex = $_.Exception
            Write-LogError "Java extraction failed: $($ex.Message)"
            throw
        }


        try {
            # Locate the extracted Java installation directory
            $JavaSource = Get-ChildItem -Path $JavaTemp -Directory -ErrorAction Stop |
            Where-Object { $_.Name -match "(jdk|jre)-?${Major}" } |
            Select-Object -First 1

            # Validate that the Java installation directory was found
            if (-not $JavaSource) {
                throw [System.IO.DirectoryNotFoundException]::new(
                    "Failed to locate Java installation directory in '$JavaTemp' for version $Major."
                )
            }


            # Ensure the final Java directory exists
            if (-not (Test-Path -Path $JavaRoot -PathType Container)) {
                New-Item -Path $JavaRoot -ItemType Directory -Force -ErrorAction Stop | Out-Null
            }

            # Copy Java installation contents to the final destination
            Write-LogInfo "Copying Java installation"
            Get-ChildItem -Path $JavaSource.FullName -Force -ErrorAction Stop |
            Copy-Item -Destination $JavaRoot -Recurse -Force -ErrorAction Stop

            Write-LogInfo "Copy completed"


            # Remove temporary extraction directory
            Remove-Item -Path $JavaTemp -Force -Recurse -ErrorAction Stop

            Write-LogInfo "Java installation completed. Installed in '$JavaRoot'"
        }
        catch {
            $ex = $_.Exception
            Write-LogError "Java installation failed. Exception: $($ex.Message)"
            throw
        }
    }
    else {
        Write-LogInfo "Java already installed"
    }
}
#endregion


# ====================================================================================== #


#region Install Mod loader
# Download and install Minecraft mod loader
function Install-ModLoader {

    # Get mod loader metadata
    $McVer = $env:MINECRAFT_VERSION
    $ModLoader = $env:MINECRAFT_MOD_LOADER.ToLower()
    $ModLoaderVer = $env:MINECRAFT_MOD_LOADER_VERSION

    # Build mod loader archive name and download URL
    switch ($ModLoader) {
        'Forge' {
            $ModLoaderName = "Forge"
            $ModLoaderArchive = "forge-${McVer}-${ModLoaderVer}-installer.jar"
            $ModLoaderUrl = "https://maven.minecraftforge.net/net/minecraftforge/forge/${McVer}-${ModLoaderVer}/${ModLoaderArchive}"
        }
        <#         'NeoForge' {
        $ModLoaderName = "NeoForge"
            $ModLoaderArchive = "neoforge-${McVer}-${ModLoaderVer}-installer.jar"
            $ModLoaderUrl = "https://maven.neoforge.net/net/neoforge/neoforge/${McVer}-${ModLoaderVer}/${ModLoaderArchive}"
        }
        'Fabric' {
        $ModLoaderName = "Fabric"
            $ModLoaderArchive = "fabric-installer-${McVer}-${ModLoaderVer}.jar"
            $ModLoaderUrl = "https://maven.fabricmc.net/net/fabricmc/fabric-installer/${ModLoaderVer}/${ModLoaderArchive}"
        }
        'Quilt' {
        $ModLoaderName = "Quilt"
            $ModLoaderArchive = "quilt-installer-${McVer}-${ModLoaderVer}.jar"
            $ModLoaderUrl = "https://maven.quiltmc.org/repository/release/org/quiltmc/quilt-installer/${ModLoaderVer}/${ModLoaderArchive}"
        } #>
        Default {
            throw [System.ArgumentException]::new(
                "Unsupported Minecraft mod loader '$ModLoader'."
            )
        }
    }

    # Build local mod loader paths
    $ModLoaderZip = Join-Path -Path $env:ROOT -ChildPath $ModLoaderArchive
    $LibrariesDir = Join-Path -Path $env:ROOT -ChildPath "libraries"


    # Download mod loader archive if not already present
    if (-not (Test-Path -Path $ModLoaderZip -PathType Leaf)) {
        Invoke-FileDownload -Path $ModLoaderZip -Url $ModLoaderUrl
    }


    # Install mod loader if not already installed
    if (-not (Test-Path -Path $LibrariesDir -PathType Container)) {
        try {
            # Validate Java executable
            if (-not (Test-Path -Path $env:JAVA_EXE -PathType Leaf)) {
                throw [System.IO.FileNotFoundException]::new(
                    "Java executable not found: '$env:JAVA_EXE'."
                )
            }


            # Run mod loader installer
            Write-LogInfo "Installing $ModLoaderName"

            try {
                Push-Location $env:ROOT

                & $env:JAVA_EXE -jar $ModLoaderZip --installServer

                if ($LASTEXITCODE -ne 0) {
                    throw [System.InvalidOperationException]::new(
                        "$ModLoaderName installation failed with exit code $LASTEXITCODE."
                    )
                }
            }
            finally {
                Pop-Location
            }

            Write-LogInfo "Installation completed"
        }
        catch {
            $ex = $_.Exception
            Write-LogError "$ModLoaderName installation failed. Exception: $($ex.Message)"
            throw
        }
    }
    else {
        Write-LogInfo "$ModLoaderName already installed"
    }
}
#endregion


# ====================================================================================== #


if ($InstallJava) { Install-Java }
if ($InstallModLoader) { Install-ModLoader }
