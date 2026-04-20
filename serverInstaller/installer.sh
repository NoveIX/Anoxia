#!/bin/sh
set -eu



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
    else
        log_warn "wget not found, trying curl"
        if command -v curl >/dev/null 2>&1; then
            log_info "(curl) Downloading $FILE"
            curl -# -L -o "$FILE" "$URL"
        else
            log_error "Neither curl nor wget is installed. Please install one of these tools to proceed."
            return 1
        fi
    fi
}



# Installation functions
install_local_java() {
    VERSION="$1"

    # Set Java download URL and file name based on architecture and version
    if ! ARCH=$(get_system_arch); then
        return 1
    fi
    JAVA_ZIP="OpenJDK${VERSION}U-jre_${ARCH}_linux.tar.gz"
    JAVA_URL="https://api.adoptium.net/v3/binary/latest/${VERSION}/ga/linux/${ARCH}/jre/hotspot/normal/eclipse"

    # Download Java zip file
    if [ ! -f "$JAVA_ZIP" ]; then
        download_file "$JAVA_URL" "$JAVA_ZIP"
    fi

    # Extract Java zip file
    if [ ! -d "java" ]; then
        DEST_DIR="OpenJDK${VERSION}"
        mkdir -p "$DEST_DIR"
        log_info "Extracting $JAVA_ZIP"
        if tar -xzf "$JAVA_ZIP" -C "$DEST_DIR"; then
            log_info "Extraction completed located in $DEST_DIR"
        else
            log_error "Failed to extract $JAVA_ZIP"
            return 1
        fi

        # Move extracted Java directory to "java"
        SOURCE_DIR=$(find "$DEST_DIR" -maxdepth 1 -type d \( -name "*jdk*${VERSION}*" -o -name "*jre*${VERSION}*" \) | head -n 1)

        # Check if source directory was found
        if [ -z "$SOURCE_DIR" ]; then
            log_error "Java directory not found in $DEST_DIR"
            return 1
        fi

        # Move the Java directory to "java"
        JAVA_DIR="java"
        mkdir -p "$JAVA_DIR"
        cp -r "$SOURCE_DIR"/* "$JAVA_DIR"/
        rm -rf "$DEST_DIR"
        log_info "Java setup completed copied in java directory"
        return 0
    else
        log_info "Java is already set up (java directory exists)"
        return 0
    fi
}

install_forge(){
    JAVA_BIN="$1"
    MC_VERSION="$2"
    VERSION="$3"

    # Set Forge installer URL and file name based on version
    FORGE_INSTALLER="forge-${MC_VERSION}-${VERSION}-installer.jar"
    FORGE_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/${MC_VERSION}-${VERSION}/${FORGE_INSTALLER}"

    # Download Forge installer
    if [ ! -f "$FORGE_INSTALLER" ]; then
        download_file "$FORGE_URL" "$FORGE_INSTALLER"
    fi

    # Run Forge installer
    if [ ! -d "libraries" ]; then
        log_info "Running Forge installer: $FORGE_INSTALLER"

        LOCAL_JAVA="$(pwd)/java/bin/java"
        JAVA_BIN=${LOCAL_JAVA:-"$JAVA_BIN"}

        if "$JAVA_BIN" -jar "$FORGE_INSTALLER" --installServer; then
            log_info "Forge installation completed"
        else
            log_error "Failed to run Forge installer"
            return 1
        fi
    else
        log_info "Forge is already installed (libraries directory exists)"
    fi
}