#!/bin/sh
set -eu

# To use a specific Java runtime, define the ANOXIA_JAVA variable below with the full path to java.
# ANOXIA_JAVA=/usr/lib/jvm/java-17-openjdk-amd64/bin/java

# To enable automatic restarts, set the ANOXIA_RESTART variable to true.
# ANOXIA_RESTART=true

# To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
# ANOXIA_INSTALL_ONLY=true



# Set installer versions
JAVA_VER=17
MC_VER=1.20.1
FORGE_VER=47.4.10

# Set terminal title
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
if [ -f "$SCRIPT_DIR/version.txt" ]; then
    MPVER=$(cat "$SCRIPT_DIR/version.txt")
    printf '\033]0;Anoxia Server v%s\007' "$MPVER"
else
    printf '\033]0;Anoxia Server\007'
fi

# Change to script directory
cd "$SCRIPT_DIR"
SERVER_INSTALLER=$SCRIPT_DIR/serverInstaller

# Check if installer exists
if [ -f "$SERVER_INSTALLER/installer.sh" ]; then
    . "$SERVER_INSTALLER/installer.sh"
else
    echo "ERROR: file installer.sh not found!"
    exit 1
fi

# Check if Java is available, install it if missing, and set ANOXIA_JAVA variable
if [ -z "${ANOXIA_JAVA:-}" ]; then
    if [ ! -f "$SCRIPT_DIR/java/bin/java" ]; then
        if ! install_local_java "$JAVA_VER"; then
            exit 1
        fi
    fi

    ANOXIA_JAVA=$SCRIPT_DIR/java/bin/java
fi

# Verify Java availability (file or PATH)
if [ -f "$ANOXIA_JAVA" ]; then
    : # Java found as direct executable path
else
    if ! command -v "$ANOXIA_JAVA" >/dev/null 2>&1; then
        echo "ERROR: Java not found ($ANOXIA_JAVA)"
        exit 1
    fi
fi

# Check Java version and parse the version string
RAW_VER=$("$ANOXIA_JAVA" -version 2>&1 | awk -F '"' '/version/ {print $2}')
if echo "$RAW_VER" | grep -q "^1\."; then
    JVER=$(echo "$RAW_VER" | cut -d'.' -f2)
else
    JVER=$(echo "$RAW_VER" | cut -d'.' -f1)
fi

# Check Java version compatibility with required Minecraft version
if [ "$JVER" -lt "$JAVA_VER" ]; then
    echo "Minecraft $MC_VER requires Java $JAVA_VER - found Java $JVER"
    exit 1
fi

# Check if libraries directory exists, install if missing
if [ ! -d "libraries" ]; then
    if ! install_forge "$ANOXIA_JAVA" "$MC_VER" "$FORGE_VER"; then
        exit 1
    fi
fi

# Check if running in "Install Only" mode
if [ "${ANOXIA_INSTALL_ONLY:-false}" = "true" ]; then
    echo "INFO: Install completed the Server will NOT start."
    exit 0
fi

# Start server (auto-restart on crash)
while true; do
    "$ANOXIA_JAVA" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MC_VER-$FORGE_VER/unix_args.txt nogui

    # Restart Server
    if [ "${ANOXIA_RESTART:-false}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
