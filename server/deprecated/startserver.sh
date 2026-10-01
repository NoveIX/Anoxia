#!/bin/sh
set -e

# To use a specific Java runtime, define the JAVA_EXE variable below with the full path to java.
# JAVA_EXE="/usr/lib/jvm/java-17-openjdk-amd64/bin/java"

# To enable automatic server restarts, set the SERVER_RESTART variable to true.
# SERVER_RESTART="true"

# To install the pack without starting the server, set the INSTALL_ONLY variable to true.
# INSTALL_ONLY="true"


# ====================================================================================== #


# Set installer version
JAVA_VER=17
MC_VER=1.20.1
FORGE_VER=47.4.20

# Get modpack version
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$SCRIPT_DIR/../.." && pwd)
TITLE="Anoxia Server"
MPVER=""

# Legacy info
printf '\n'
printf '# ======================================================= #\n'
printf '\n'
printf '%s Launcher\n' "$TITLE"
printf '\n'
printf 'NOTE: You are using the POSIX-compatible server launcher.\n'
printf 'This launcher is an alternative to the Bash-based launcher.\n'
printf '\n'
printf 'Continuing in 30 seconds...\n'
printf '\n'
printf '# ======================================================= #\n'
printf '\n'
sleep 30

if [ -f "$ROOT/version.txt" ]; then
    read -r MPVER < "$ROOT/version.txt"
fi

if [ -n "$MPVER" ]; then
    TITLE="$TITLE v$MPVER"
fi

# Set terminal title
printf '\033]0;%s\007' "$TITLE"

# Change to script directory
cd "$ROOT"
INSTALLER="$SCRIPT_DIR/installer/installer.sh"

# Check if installer exists
if [ ! -f "$INSTALLER" ]; then
    printf 'error: file installer.sh not found!\n'
    exit 1
fi

# Load installer functions
. "$INSTALLER"

# Check if Java is available, install it if missing, and set ANOXIA_JAVA variable
if [ -z "$ANOXIA_JAVA" ]; then
    if [ ! -f "$ROOT/java/bin/java" ]; then
        if ! install_local_java "$JAVA_VER"; then
            exit 1
        fi
    fi

    ANOXIA_JAVA="$ROOT/java/bin/java"
fi

# Verify Java availability (file or PATH)
if [ ! -f "$ANOXIA_JAVA" ]; then
    if ! command -v "$ANOXIA_JAVA" >/dev/null 2>&1; then
        printf '%s\n' "error: Java executable not found: $ANOXIA_JAVA"
        exit 1
    fi
fi

# Check Java version and parse the version string
RAW_VER=$("$ANOXIA_JAVA" -version 2>&1 | awk -F '"' '/version/ {print $2}')
if printf '%s\n' "$RAW_VER" | grep -q "^1\."; then
    JVER=$(printf '%s\n' "$RAW_VER" | cut -d'.' -f2)
else
    JVER=$(printf '%s\n' "$RAW_VER" | cut -d'.' -f1)
fi

# Check Java version compatibility with required Minecraft version
if [ "$JVER" -lt "$JAVA_VER" ]; then
    printf '%s\n' "Minecraft $MC_VER requires Java $JAVA_VER (detected: Java $JVER)"
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
    printf 'Install completed the Server will NOT start.\n'
    exit 0
fi

# Start server (auto-restart on crash)
while true; do
    "$ANOXIA_JAVA" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MC_VER-$FORGE_VER/unix_args.txt nogui

    # Restart Server
    if [ "${ANOXIA_RESTART:-false}" = "false" ]; then
        exit 0
    fi

    printf 'Restarting automatically in 10 seconds (press Ctrl + C to cancel)\n'
    sleep 10
done
