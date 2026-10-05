#!/bin/sh
set -e

# To use a specific Java runtime, define the JAVA_EXE variable below with the full path to java.
# JAVA_EXE="/usr/lib/jvm/java-17-openjdk-amd64/bin/java"

# To enable automatic server restarts, set the SERVER_RESTART variable to true.
# SERVER_RESTART="true"

# To install the pack without starting the server, set the INSTALL_ONLY variable to true.
# INSTALL_ONLY="true"



# ====================================================================================== #



# Modpack root
ROOT="$(cd "$(dirname "$0")" && pwd)"
ENV="$ROOT/server/server.env"
LOAD="$ROOT/server/load-env.sh"
SETUP="$ROOT/server/setup.sh"
cd "$ROOT"

# Check if load-env.sh exists
if [ ! -f "$LOAD" ]; then
    printf "error: file not found '%s'\n" "$LOAD"
    exit 1
fi

# Load server environment
if ! . "$LOAD"; then
    exit 1
fi

# Terminal title
printf '\033]0;%s %s v%s\007' "$PROJECT_ID" "$PROJECT_ROLE" "$MODPACK_VERSION"

# Check if setup.sh exists
if [ ! -f "$SETUP" ]; then
    printf "error: file not found '%s'\n" "$SETUP"
    exit 1
fi

# Load server environment
if ! . "$SETUP"; then
    exit 1
fi

# Check if Java is available, install it if missing, and set JAVA_EXE variable
if [ -z "$JAVA_EXE" ]; then

    # Check system architecture
    JAVA_ARCH="$(system_arch)" || exit 1

    # Check OS
    JAVA_OS="$(java_os)" || exit 1

    # Convert Java variant to lowercase
    JAVA_VARIANT_LOWER=$(printf '%s' "$JAVA_VARIANT" | tr '[:upper:]' '[:lower:]')

    # Java installation directory
    JAVA_DIR="$ROOT/java/${JAVA_OS}-${JAVA_ARCH}-${JAVA_VARIANT_LOWER}-${JAVA_VERSION}"

    # macOS Java archives contain Java inside Contents/Home
    if [ "$JAVA_OS" = "mac" ]; then
        JAVA_HOME="$JAVA_DIR/Contents/Home"
    else
        JAVA_HOME="$JAVA_DIR"
    fi

    # Check or install local java
    JAVA_EXE="$JAVA_HOME/bin/java"

    if [ ! -f "$JAVA_EXE" ]; then
        if ! install_java; then
            exit 1
        fi
    fi
fi

# Verify Java availability (file or PATH)
if [ ! -f "$JAVA_EXE" ]; then
    if ! command -v "$JAVA_EXE" >/dev/null 2>&1; then
        log_error "java not found '$JAVA_EXE'"
        exit 1
    fi
fi

# Check Java version and parse the version string
RAW_VER=$("$JAVA_EXE" -version 2>&1 | awk -F '"' '/version/ {print $2}')
case "$RAW_VER" in
    1.*)
        CTX_VER=${RAW_VER#1.}
        CTX_VER=${CTX_VER%%.*}
    ;;

    *)
        CTX_VER=${RAW_VER%%.*}
    ;;
esac

# Check Java version compatibility with required Minecraft version
if [ "$CTX_VER" -lt "$JAVA_VERSION" ]; then
    printf 'Minecraft %s requires Java %s. Found Java %s\n' \
    "$MINECRAFT_VERSION" "$JAVA_VERSION" "$CTX_VER"
    exit 1
fi

# Check if libraries directory exists, install if missing
if [ ! -d "libraries" ]; then
    if ! install_mod_loader; then
        exit 1
    fi
fi

# Check if running in "Install Only" mode
if [ "${INSTALL_ONLY:-false}" = "true" ]; then
    log_done "install completed the server will NOT start"
    exit 0
fi

# Start server (auto-restart on crash)
while true; do
    "$JAVA_EXE" $JAVA_ARGS @libraries/net/minecraftforge/forge/$MINECRAFT_VERSION-$MINECRAFT_MOD_LOADER_VERSION/unix_args.txt nogui

    # Restart Server
    if [ "${SERVER_RESTART:-false}" != "true" ]; then
        exit 0
    fi

    printf 'restarting automatically in 10 seconds (press Ctrl + C to cancel)\n'
    sleep 10
done
