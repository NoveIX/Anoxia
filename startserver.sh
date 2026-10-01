#!/usr/bin/env bash
set -e

# To use a specific Java runtime, define the JAVA_EXE variable below with the full path to java.
# JAVA_EXE="/usr/lib/jvm/java-17-openjdk-amd64/bin/java"

# To enable automatic server restarts, set the SERVER_RESTART variable to true.
# SERVER_RESTART="true"

# To install the pack without starting the server, set the INSTALL_ONLY variable to true.
# INSTALL_ONLY="true"



# ====================================================================================== #



# Modpack root
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV="$ROOT/server/server.env"
LOAD="$ROOT/server/load-env.sh"
SETUP="$ROOT/server/setup.sh"
cd "$ROOT"

# Check if load-env.sh exists
if [[ ! -f "$LOAD" ]]; then
    printf "error: file not found '%s'\n" "$LOAD"
    exit 1
fi

# Load server environment
if ! source "$LOAD" "$ENV"; then
    exit 1
fi

# Terminal title
printf '\033]0;%s %s v%s\007' "$PROJECT_ID" "$PROJECT_ROLE" "$MODPACK_VERSION"

# Check if setup.sh exists
if [[ ! -f "$SETUP" ]]; then
    printf "error: file not found '%s'\n" "$SETUP"
    exit 1
fi

# Load server environment
if ! source "$SETUP"; then
    exit 1
fi

#Check system architecture
case "$(uname -m)" in

    x86_64)
        JAVA_ARCH="x64"
    ;;

    aarch64|arm64)
        JAVA_ARCH="arm64"
    ;;

    *)
        printf "error: unsupported processor architecture: %s. Supported architectures: x86_64, aarch64, or arm64\n" "$(uname -m)"
        exit 1
    ;;

esac

# Check if Java is available, install it if missing, and set JAVA_EXE variable
if [[ -z "$JAVA_EXE" ]]; then
    if [[ ! -f "$ROOT/java/linux-${JAVA_ARCH}-${JAVA_VARIANT,,}-${JAVA_VERSION}/bin/java" ]]; then
        if ! install_java; then
            exit 1
        fi
    fi

    JAVA_EXE="$ROOT/java/linux-${JAVA_ARCH}-${JAVA_VARIANT,,}-${JAVA_VERSION}/bin/java"
fi

# Verify Java availability (file or PATH)
if [[ ! -f "$JAVA_EXE" ]]; then
    if ! command -v "$JAVA_EXE" >/dev/null 2>&1; then
        printf "error: java not found '%s'\n" "$JAVA_EXE"
        exit 1
    fi
fi

# Check Java version and parse the version string
RAW_VER=$("$JAVA_EXE" -version 2>&1 | awk -F '"' '/version/ {print $2}')
if [[ "$RAW_VER" == 1.* ]]; then
    CTX_VER="${RAW_VER#1.}"
    CTX_VER="${CTX_VER%%.*}"
else
    CTX_VER="${RAW_VER%%.*}"
fi

# Check Java version compatibility with required Minecraft version
if (( CTX_VER < JAVA_VERSION )); then
    printf "Minecraft %s requires Java %s - found Java %s\n" \
        "$MINECRAFT_VERSION" "$JAVA_VERSION" "$CTX_VER"
    exit 1
fi

# Check if libraries directory exists, install if missing
if [[ ! -d "libraries" ]]; then
    if ! install_mod_loader; then
        exit 1
    fi
fi

# Check if running in "Install Only" mode
if [[ "${INSTALL_ONLY:-false}" == "true" ]]; then
    printf "info: install completed the Server will NOT start.\n"
    exit 0
fi

# Start server (auto-restart on crash)
while true; do
    "$JAVA_EXE" $JAVA_ARGS @libraries/net/minecraftforge/forge/$MINECRAFT_VERSION-$MINECRAFT_MOD_LOADER_VERSION/unix_args.txt nogui

    # Restart Server
    if [[ "${SERVER_RESTART:-false}" != "true" ]]; then
        exit 0
    fi

    printf 'restarting automatically in 10 seconds (press Ctrl + C to cancel)\n'
    sleep 10
done
