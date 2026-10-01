#region Logging
function log() {
    local level="$1"
    local message="$2"
    local color

    case "$level" in

        info)
            color='\033[94m'       # Blue
        ;;

        warn)
            color='\033[33m'       # Yellow
        ;;

        error)
            color='\033[31m'       # Red
        ;;

        *)
            printf 'Invalid log level: %s\n' "$level" >&2
            return 1
        ;;

    esac

    printf '%b%s%b: %s\n' "$color" "${level,,}" '\033[0m' "$message"
}

function log_info() {
    log "info" "$1"
}

function log_error() {
    log "error" "$1"
}
#endregion


# ====================================================================================== #


#region Utility func
# Get system architecture (x64 or ARM64)
function get_system_arch() {

    case "$(uname -m)" in

        x86_64)
            printf 'x64\n'
        ;;

        aarch64|arm64)
            printf 'arm64\n'
        ;;

        *)
            printf 'unsupported processor architecture %s. Required architecture: x86_64 or (aarch64|arm64)\n' \
            "$(uname -m)" >&2
            return 1
        ;;
    esac
}

function get_java_api_arch() {

    case "$(uname -m)" in

        x86_64)
            printf 'x64\n'
        ;;

        aarch64|arm64)
            printf 'aarch64\n'
        ;;

        *)
            printf 'error: unsupported processor architecture %s. Supported architectures: x86_64, aarch64, or arm64\n' "$(uname -m)" >&2
            return 1
        ;;
    esac
}

# Download a file from a URL
file_download() {
    local path="$1"
    local url="$2"
    local file="$(basename "$path")"

    # Try wget
    if command -v wget >/dev/null 2>&1; then
        log_info "wget: Downloading $file"

        if ! wget -q --show-progress -O "$path" "$url"; then
            log_error "wget: download failed"
            return 1
        fi

        log_info "wget: download completed"
        return 0
    fi

    log_warn "wget not found, trying curl"


    # Try curl
    if command -v curl >/dev/null 2>&1; then
        log_info "curl: Downloading $file"

        if ! curl -# -L -o "$path" "$url"; then
            log_error "curl: download failed"
            return 1
        fi

        log_info "curl: download completed"
        return 0
    fi

    log_error "neither wget nor curl is installed. Please install one of these tools to proceed."
    return 1
}
#endregion


# ====================================================================================== #


#region Install java
# Download and install Java from Adoptium Temurin
function install_java() {

    # Get system architecture
    local arch="$(get_system_arch)" || return 1
    local java_arch="$(get_java_api_arch)" || return 1

    # Get Java package metadata from environment variables
    local major="$JAVA_VERSION"
    local variant="${JAVA_VARIANT,,}"

    # Build Java archive name
    local java_archive="Adoptium-OpenJDK${major}U-${variant}_${arch}_linux.tar.gz"

    # Build Java download URL
    local java_url="https://api.adoptium.net/v3/binary/latest/${major}/ga/linux/${java_arch}/${variant}/hotspot/normal/eclipse"

    # Build local Java paths
    local java_zip="$ROOT/$java_archive"
    local java_temp="$ROOT/OpenJDK${major}U"
    local java_root="$ROOT/java/linux/$arch/$variant/$major"


    # Download Java archive if not already present
    if [[ ! -f "$java_zip" ]]; then
        file_download "$java_zip" "$java_url" || return 1
    fi


    # Install Java if not already installed
    if [[ ! -d "$java_root" ]]; then

        # Extract Java archive
        log_info "extracting $java_archive"

        if ! mkdir -p "$java_temp"; then
            log_error "failed to create extraction directory '$java_temp'"
            return 1
        fi

        if ! tar -xzf "$java_zip" -C "$java_temp"; then
            log_error "java extraction failed"
            return 1
        fi

        log_info "java extraction completed"


        # Locate the extracted Java installation directory
        local java_source="$(find "$java_temp" \
            -maxdepth 1 \
            -type d \
            -regextype posix-extended \
            -regex ".*/.*(jdk|jre).*${major}.*" \
            -print -quit)"

        # Validate that the Java installation directory was found
        if [[ -z "$java_source" ]]; then
            log_error "failed to locate Java installation directory in '$java_temp' for version $major."
            return 1
        fi


        # Ensure the final Java directory exists
        if ! mkdir -p "$java_root"; then
            log_error "failed to create Java installation directory '$java_root'"
            return 1
        fi

        # Copy Java installation contents to the final destination
        log_info "copying Java installation"

        if ! cp -a "$java_source"/. "$java_root"/; then
            log_error "failed to copy Java installation"
            return 1
        fi

        log_info "copy completed"


        # Remove temporary extraction directory
        if ! rm -rf "$java_temp"; then
            log_error "failed to remove temporary extraction directory '$java_temp'"
            return 1
        fi

        # Log completion message
        log_info "java installation completed. Installed in '$java_root'"

    else
        log_info "java already installed"
    fi
}
#endregion


# ====================================================================================== #


#region Install Mod loader
# Download and install Minecraft mod loader
install_mod_loader() {

    # Get mod loader metadata
    local mc_ver="$MINECRAFT_VERSION"
    local mod_loader="${MINECRAFT_MOD_LOADER,,}"
    local mod_loader_ver="$MINECRAFT_MOD_LOADER_VERSION"

    local mod_loader_name
    local mod_loader_archive
    local mod_loader_url

    # Build mod loader archive name and download URL
    case "$mod_loader" in

        forge)
            mod_loader_name="Forge"
            mod_loader_archive="forge-${mc_ver}-${mod_loader_ver}-installer.jar"
            mod_loader_url="https://maven.minecraftforge.net/net/minecraftforge/forge/${mc_ver}-${mod_loader_ver}/${mod_loader_archive}"
        ;;

        # neoforge)
        #     mod_loader_name="NeoForge"
        #     mod_loader_archive="neoforge-${mc_ver}-${mod_loader_ver}-installer.jar"
        #     mod_loader_url="https://maven.neoforge.net/net/neoforge/neoforge/${mc_ver}-${mod_loader_ver}/${mod_loader_archive}"
        #;;

        # fabric)
        #     mod_loader_name="Fabric"
        #     mod_loader_archive="fabric-installer-${mc_ver}-${mod_loader_ver}.jar"
        #     mod_loader_url="https://maven.fabricmc.net/net/fabricmc/fabric-installer/${mod_loader_ver}/${mod_loader_archive}"
        #;;

        # quilt)
        #     mod_loader_name="Quilt"
        #     mod_loader_archive="quilt-installer-${mc_ver}-${mod_loader_ver}.jar"
        #     mod_loader_url="https://maven.quiltmc.org/repository/release/org/quiltmc/quilt-installer/${mod_loader_ver}/${mod_loader_archive}"
        #;;

        *)
            log_error "unsupported Minecraft mod loader '$mod_loader'."
            return 1
        ;;
    esac

    # Build local mod loader paths
    local mod_loader_zip="$ROOT/$mod_loader_archive"
    local libraries_dir="$ROOT/libraries"


    # Download mod loader archive if not already present
    if [[ ! -f "$mod_loader_zip" ]]; then
        file_download "$mod_loader_zip" "$mod_loader_url" || return 1
    fi


    # Install mod loader if not already installed
    if [[ ! -d "$libraries_dir" ]]; then

        # Validate Java executable
        if [[ ! -f "$JAVA_EXE" ]]; then
            log_error "java executable not found: '$JAVA_EXE'."
            return 1
        fi


        # Run mod loader installer
        log_info "installing $mod_loader_name"

        if ! "$JAVA_EXE" -jar "$mod_loader_zip" --installServer; then
            log_error "$mod_loader_name installation failed with exit code $exit_code."
            return 1
        fi

        log_info "installation completed"

    else
        log_info "$mod_loader_name already installed"
    fi
}
#endregion