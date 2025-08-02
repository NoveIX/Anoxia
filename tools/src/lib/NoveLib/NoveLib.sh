DownloadFile() {
    local URL="$1"
    local Path="$2"
    local OutFile="$3"

    # create save path
    if [[ ! -d "$Path" ]]; then
        mkdir -p "$Path" || return 1
    fi

    # Calculate save path
    local savePath="$Path/$OutFile"

    # Try download with aria2c (equivalente "potente" a BITS)
    if command -v aria2c >/dev/null 2>&1; then
        aria2c -x 4 -s 4 -d "$Path" -o "$OutFile" "$URL" && return 0
    fi

    # Fallback: curl
    echo "[WARN] Failed to download with aria2c, trying curl..."
    if command -v curl >/dev/null 2>&1; then
        curl -# -fSL "$URL" -o "$savePath" && return 0
    fi

    # Fallback: wget
    echo "[WARN] Failed to download with curl, trying wget..."
    if command -v wget >/dev/null 2>&1; then
        wget -O "$savePath" "$URL" && return 0
    fi

    # If all fail
    return 1
}
