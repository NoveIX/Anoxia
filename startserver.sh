#!/bin/sh
set -e

# To use a specific Java runtime, define the ANOXIA_JAVA variable below with the full path to java.
# ANOXIA_JAVA=/usr/lib/jvm/java-17-openjdk-amd64/bin/java

# To enable automatic restarts, set the ANOXIA_RESTART variable to true.
# ANOXIA_RESTART=true

# To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
# ANOXIA_INSTALL_ONLY=true



# Set installer version
JAVA_VER=17
MC_VER=1.20.1
FORGE_VER=47.4.10

# Get modpack version
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
MPVER=""
TITLE="Anoxia Server"

if [ -f "$SCRIPT_DIR/version.txt" ]; then
    read -r MPVER < "$SCRIPT_DIR/version.txt"
fi

if [ -n "$MPVER" ]; then
    TITLE="$TITLE v$MPVER"
fi

# Set terminal title
printf '\033]0;%s\007' "$TITLE"

# Change to script directory
cd "$SCRIPT_DIR"
SERVER_INSTALLER="$SCRIPT_DIR/serverInstaller"

# Check if installer exists
if [ ! -f "$SERVER_INSTALLER/installer.sh" ]; then
    printf -- "%s\n" "error: file installer.sh not found!"
    exit 1
fi

# Load installer functions
. "$SERVER_INSTALLER/installer.sh"

# Check if Java is available, install it if missing, and set ANOXIA_JAVA variable
if [ -z "$ANOXIA_JAVA" ]; then
    if [ ! -f "$SCRIPT_DIR/java/bin/java" ]; then
        if ! install_local_java "$JAVA_VER"; then
            exit 1
        fi
    fi

    ANOXIA_JAVA="$SCRIPT_DIR/java/bin/java"
fi

# Verify Java availability (file or PATH)
if [ ! -f "$ANOXIA_JAVA" ]; then
    if ! command -v "$ANOXIA_JAVA" >/dev/null 2>&1; then
        printf -- "%s\n" "error: Java not found ($ANOXIA_JAVA)"
        exit 1
    fi
fi

# Check Java version and parse the version string
RAW_VER=$("$ANOXIA_JAVA" -version 2>&1 | awk -F '"' '/version/ {print $2}')
if printf -- "%s\n" "$RAW_VER" | grep -q "^1\."; then
    JVER=$(printf -- "%s\n" "$RAW_VER" | cut -d'.' -f2)
else
    JVER=$(printf -- "%s\n" "$RAW_VER" | cut -d'.' -f1)
fi

# Check Java version compatibility with required Minecraft version
if [ "$JVER" -lt "$JAVA_VER" ]; then
    printf -- "%s\n" "Minecraft $MC_VER requires Java $JAVA_VER - found Java $JVER"
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
    printf -- "%s\n" "info: Install completed the Server will NOT start."
    exit 0
fi

# Start server (auto-restart on crash)
while true; do
    "$ANOXIA_JAVA" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MC_VER-$FORGE_VER/unix_args.txt nogui

    # Restart Server
    if [ "${ANOXIA_RESTART:-false}" = "false" ]; then
        exit 0
    fi

    printf -- "%s\n" "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
