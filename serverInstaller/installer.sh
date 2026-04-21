# Logging functions
log_info() {
    printf "[\033[0;36mINFO\033[0m]: %s\n" "$*"
}

log_warn() {
    printf "[\033[1;33mWARN\033[0m]: %s\n" "$*"
}

log_error() {
    printf "[\033[0;31mERROR\033[0m]: %s\n" "$*"
}



#Utility functions
# Get system architecture (x64 or ARM64)
get_system_arch() {
    SYS_ARCH=$(uname -m)

    case "$SYS_ARCH" in
        x86_64)
            ARCH="x64"
        ;;
        aarch64)
            ARCH="aarch64"
        ;;
        *)
            echo >&2
            echo "============================================" >&2
            echo "SYSTEM NOT SUPPORTED" >&2
            echo "Detected architecture: $SYS_ARCH" >&2
            echo "Required architecture: 64-bit (x64 or ARM64)" >&2
            echo "============================================" >&2
            echo >&2
            return 1
        ;;
    esac

    # return the architecture
    echo "$ARCH"
}

# Download a file using wget or curl, with fallback and error handling
download_file() {
    URL="$1"
    FILE="$2"

    if command -v wget >/dev/null 2>&1; then
        log_info "(wget) Downloading $FILE"
        wget -q --show-progress -O "$FILE" "$URL"
        log_info "Download completed"
    else
        log_warn "wget not found, trying curl"
        if command -v curl >/dev/null 2>&1; then
            log_info "(curl) Downloading $FILE"
            curl -# -L -o "$FILE" "$URL"
            log_info "Download completed"
        else
            log_error "Neither curl nor wget is installed. Please install one of these tools to proceed."
            return 1
        fi
    fi
}



# Installation functions
install_local_java() {
    MAJOR_VERSION="$1"

    # Determine Java download URL and archive name based on version and system architecture
    ARCH=$(get_system_arch)
    JAVA_ZIP="OpenJDK${MAJOR_VERSION}U-jre_${ARCH}_linux.tar.gz"
    JAVA_URL="https://api.adoptium.net/v3/binary/latest/${MAJOR_VERSION}/ga/linux/${ARCH}/jre/hotspot/normal/eclipse"

    # Download Java ZIP archive if it does not already exist locally
    if [ ! -f "$JAVA_ZIP" ]; then
        download_file "$JAVA_URL" "$JAVA_ZIP"
    fi

    # Extract Java ZIP archive if target directory does not already exist
    if [ ! -d "java" ]; then
        JAVA_UNZIP="OpenJDK${MAJOR_VERSION}U"
        mkdir -p "$JAVA_UNZIP"
        log_info "Extracting $JAVA_ZIP"
        if tar -xzf "$JAVA_ZIP" -C "$JAVA_UNZIP"; then
            log_info "Extraction completed in $JAVA_UNZIP"
        else
            log_error "Java extraction failed. Archive: $JAVA_ZIP"
            return 1
        fi

        # Locate extracted Java installation directory (JDK/JRE) within destination folder
        JRE_SOURCE=$(find "$JAVA_UNZIP" -maxdepth 1 -type d \( -name "*jdk*${MAJOR_VERSION}*" -o -name "*jre*${MAJOR_VERSION}*" \) | head -n 1)

        # Validate that the Java source directory was found before proceeding
        if [ -z "$JRE_SOURCE" ]; then
            log_error "Failed to locate Java JDK/JRE directory in $JAVA_UNZIP for version $MAJOR_VERSION"
            return 1
        fi

        # Copy extracted Java directory content into "java" and clean up temporary folder
        DEST_DIR="java"
        mkdir -p "$DEST_DIR"
        if cp -r "$JRE_SOURCE"/* "$DEST_DIR"/ && rm -rf "$JAVA_UNZIP"; then
            log_info "Local Java setup completed. Installed in $DEST_DIR"
            return 0
        else
            log_error "Local Java setup failed (copy or cleanup error)"
            return 1
        fi
    else
        log_info "Local java already installed ($DEST_DIR directory exists)"
        return 0
    fi
}

install_forge(){
    JAVA_BIN="$1"
    MINECRAFT_VERSION="$2"
    VERSION="$3"

    # Build Forge installer URL and filename based on Minecraft and Forge versions
    FORGE_INSTALLER="forge-${MINECRAFT_VERSION}-${VERSION}-installer.jar"
    FORGE_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/${MINECRAFT_VERSION}-${VERSION}/${FORGE_INSTALLER}"

    # Download Forge installer if it does not already exist locally
    if [ ! -f "$FORGE_INSTALLER" ]; then
        download_file "$FORGE_URL" "$FORGE_INSTALLER"
    fi

    # Run Forge installer if Forge is not already installed (based on libraries directory)
    if [ ! -d "libraries" ]; then
        log_info "Starting Forge server installer: $FORGE_INSTALLER"

        LOCAL_JAVA="$(pwd)/java/bin/java"
        JAVA_BIN=${LOCAL_JAVA:-"$JAVA_BIN"}
        if "$JAVA_BIN" -jar "$FORGE_INSTALLER" --installServer; then
            log_info "Forge server installation completed"
        else
            log_error "Forge server installation failed"
            return 1
        fi
    else
        log_info "Forge server is already installed (libraries directory exists)"
    fi
}