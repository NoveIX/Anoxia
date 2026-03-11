#!/bin/bash
set -eu

# To use a specific Java runtime, define the JAVA variable below with the full path to java.exe.
# ANOXIA_JAVA=/usr/lib/jvm/java-17-openjdk-arm64/bin/java

# To disable automatic restarts, set the AUTO_RESTART variable to false.
# ANOXIA_RESTART=false

# To install the pack without starting the server, set the INSTALL_ONLY variable to true.
# ANOXIA_INSTALL_ONLY=true

FORGE_VERSION=47.4.10
INSTALLER="forge-1.20.1-$FORGE_VERSION-installer.jar"
FORGE_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/1.20.1-$FORGE_VERSION/forge-1.20.1-$FORGE_VERSION-installer.jar"

pause() {
    printf "%s\n" "Press enter to continue..."
    read ans
}

# Check Java is installed
if ! command -v "${ANOXIA_JAVA:-java}" >/dev/null 2>&1; then
    echo "Minecraft 1.20.1 requires Java 17 - Java not found"
    pause
    exit 1
fi

# Install or download Minecraft Forge
cd "$(dirname "$0")"
if [[ ! -d libraries ]]; then
    echo "Forge not installed, installing now."
    if [[ ! -f "$INSTALLER" ]]; then
        echo "No Forge installer found, downloading now."
        # try wget
        if command -v wget >/dev/null 2>&1; then
            echo "DEBUG: (wget) Downloading $FORGE_URL"
            wget -O "$INSTALLER" "$FORGE_URL"
        else
            # try curl
            if command -v curl >/dev/null 2>&1; then
                echo "DEBUG: (curl) Downloading $FORGE_URL"
                curl -o "$INSTALLER" -L "$FORGE_URL"
            else
                echo "Neither wget or curl were found on your system. Please install one and try again"
                pause
                exit 1
            fi
        fi
    fi

    echo "Running Forge installer."
    "${ANOXIA_JAVA:-java}" -jar "$INSTALLER" -installServer
fi

# Create default server properties
if [[ ! -f server.properties ]]; then
    cat <<EOF > server.properties
allow-flight=true
difficulty=hard
enable-command-block=true
motd=§3Project§r §2Anoxia§r §7Lunar§r §4Ruins§r
max-tick-time=180000
EOF
fi

# End install only
if [[ "${ANOXIA_INSTALL_ONLY:-false}" = "true" ]]; then
    echo "INSTALL_ONLY: complete"
    exit 0
fi

# Check Java version
JAVA_VERSION=$("${ANOXIA_JAVA:-java}" -fullversion 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [[ ! "$JAVA_VERSION" -ge 17 ]]; then
    echo "Minecraft 1.20.1 requires Java 17 - found Java $JAVA_VERSION"
    pause
    exit 1
fi

# Server Start or restart if crash handle on
while true
do
    "${ANOXIA_JAVA:-java}" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-$FORGE_VERSION/unix_args.txt nogui || EXIT_CODE=$?

    if [[ "${ANOXIA_RESTART:-true}" == "false" ]]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
