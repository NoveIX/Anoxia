param (
    # Java
    [Parameter(Mandatory = $true, ParameterSetName = "java")]
    [switch]$InstallJava,

    # Minecraft Loader
    [Parameter(Mandatory = $true, ParameterSetName = "Loader")]
    [switch]$InstallLoader
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
    param(
        [switch]$JavaApi
    )

    switch ($env:PROCESSOR_ARCHITECTURE) {

        "AMD64" { return "x64" }
        "ARM64" {
            if ($JavaApi) { return "aarch64" }
            return "arm64"
        }

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
        Write-LogError "BITS: download failed: $($_.Exception.Message)"
    }

    # Try WebRequest
    try {
        Write-LogInfo "WebRequest: Downloading $($FileInfo.Name)"
        Invoke-WebRequest -Uri $Url -OutFile $FileInfo.FullName -UseBasicParsing -ErrorAction Stop

        Write-LogInfo "WebRequest: Download completed"
        return
    }
    catch {
        Write-LogError "WebRequest: download failed: $($_.Exception.Message)"
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
    $JavaArch = Get-SystemArch -JavaApi

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
            Write-LogError "Java extraction failed: $($_.Exception.Message)"
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
            Write-LogError "Java installation failed. $($_.Exception.Message)"
            throw
        }
    }
    else {
        Write-LogInfo "Java already installed"
    }
}
#endregion


# ====================================================================================== #


#region Install Minecraft loader
# Download and install Minecraft loader
function Install-Loader {

    # Get loader metadata
    $McVer = $env:MINECRAFT_VERSION
    $Loader = $env:MINECRAFT_LOADER.ToLower()
    $LoaderVer = $env:MINECRAFT_LOADER_VERSION

    # Build loader archive name and download URL
    try {
        switch -CaseSensitive ($Loader) {

            # Forge Server
            "forge" {
                $LoaderName = "Forge"
                $LoaderArchive = "forge-${McVer}-${LoaderVer}-installer.jar"
                $LoaderUrl = "https://maven.minecraftforge.net/net/minecraftforge/forge/${McVer}-${LoaderVer}/${LoaderArchive}"
            }

            # ====================================================================================== #

            Default {
                throw [System.ArgumentException]::new(
                    "Unsupported Minecraft loader '$Loader'."
                )
            }
        }

    }
    catch {
        $LoaderName = if ($LoaderName) { $LoaderName } else { $Loader }
        Write-LogError "$LoaderName installation failed. $($_.Exception.Message)"
        throw
    }

    # Build local loader paths
    $LoaderJar = Join-Path -Path $env:ROOT -ChildPath $LoaderArchive
    $LibrariesDir = Join-Path -Path $env:ROOT -ChildPath "libraries"


    # Download loader archive if not already present
    if (-not (Test-Path -Path $LoaderJar -PathType Leaf)) {
        Invoke-FileDownload -Path $LoaderJar -Url $LoaderUrl
    }


    # Install loader if not already installed
    if (-not (Test-Path -Path $LibrariesDir -PathType Container)) {
        try {
            # Validate Java executable
            if (-not (Test-Path -Path $env:JAVA_EXE -PathType Leaf)) {
                throw [System.IO.FileNotFoundException]::new(
                    "Java executable not found: '$env:JAVA_EXE'."
                )
            }

            try {
                Push-Location $env:ROOT

                # Run the appropriate command based on the loader type
                Write-LogInfo "Installing $LoaderName"

                switch -CaseSensitive ($Loader) {
                    "forge" {
                        & $env:JAVA_EXE -jar $LoaderJar --installServer
                    }

                    Default {
                        throw [System.ArgumentException]::new(
                            "Unsupported Minecraft loader '$Loader'."
                        )
                    }
                }

                # Check loader installation
                if ($LASTEXITCODE -ne 0) {
                    throw [System.InvalidOperationException]::new(
                        "$LoaderName installation failed with exit code $LASTEXITCODE."
                    )
                }

                # Remove default run.* files created by the installer
                Get-ChildItem -Path $env:ROOT -Filter "run.*" -File |
                Remove-Item -Force

                Write-LogInfo "Installation completed"
            }
            finally {
                Pop-Location
            }
        }
        catch {
            Write-LogError "$LoaderName installation failed. $($_.Exception.Message)"
            throw
        }
    }
    else {
        Write-LogInfo "$LoaderName already installed"
    }
}
#endregion


# ====================================================================================== #


if ($InstallJava) { Install-Java }
if ($InstallLoader) { Install-Loader }
