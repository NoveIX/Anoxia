#!/bin/sh
set -eu

# To use a specific Java runtime, define the JAVA variable below with the full path to java.
# ANOXIA_JAVA=/usr/lib/jvm/java-17-openjdk-amd64/bin/java

# To enable automatic restarts, set the ANOXIA_RESTART variable to true.
# ANOXIA_RESTART=true

# To install the pack without starting the server, set the ANOXIA_INSTALL_ONLY variable to true.
# ANOXIA_INSTALL_ONLY=true


# Set versions for installer to use
JAVA_VER=17
MC_VER=1.20.1
FORGE_VER=47.4.10


# Change to script directory
cd $(dirname "$0")
SCRIPT_DIR=$(pwd)
SERVER_INSTALLER=$SCRIPT_DIR/ServerInstaller


# Load installer function
if [ -f "$SERVER_INSTALLER/installer.sh" ]; then
    . "$SERVER_INSTALLER/installer.sh"
else
    echo "ERROR: file installer.sh not found!"
    exit 1
fi

# Check if java executable is defined, install java if not found, and set ANOXIA_JAVA variable
if [ -z "${ANOXIA_JAVA:-}" ]; then
    if [ ! -f "$SCRIPT_DIR/java/bin/java" ]; then
        if ! install_local_java $JAVA_VER; then
            exit 1
        fi
    fi

    ANOXIA_JAVA=$SCRIPT_DIR/java/bin/java
fi

# Check Java version
JAVA_VERSION=$("$ANOXIA_JAVA" -fullversion 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ "$JAVA_VERSION" -lt $JAVA_VER ]; then
    echo "Minecraft $MC_VER requires Java $JAVA_VER - found Java $JAVA_VERSION"
    exit 1
fi

# Check if libraries directory exists, if not, run installer to install forge and libraries
if [ ! -d "libraries" ]; then
    if ! install_forge $ANOXIA_JAVA $MC_VER $FORGE_VER; then
        exit 1
    fi
fi

# Check if running in "Install Only" mode
if [ "${ANOXIA_INSTALL_ONLY:-false}" = "true" ]; then
    echo "Install completed the Server will NOT start."
    exit 0
fi

# Server Start or restart if crash handle on
while true; do
    "$ANOXIA_JAVA" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MC_VER-$FORGE_VER/unix_args.txt nogui || EXIT_CODE=$?

    # Restart Server
    if [ "${ANOXIA_RESTART:-false}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done