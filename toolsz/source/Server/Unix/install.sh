#!/bin/bash

# Google direct link
GoogleDirectLink='https://drive.google.com/uc?export=download&id='

# Locate script path
ScriptDir=$(dirname "$(realpath "$0")")
UnixDir=$ScriptDir
cd $ScriptDir

# Define parent path
ServerDir=$(realpath "$UnixDir/..")
SrcDir=$(realpath "$ServerDir/..")
ToolsDir=$(realpath "$SrcDir/..")
ModpackDir=$(realpath "$ToolsDir/..")

if [[ "$ModpackDir" == *"/Moon"* ]]; then
    # Title
    Modpack_BashTitle="Moon Base 2"

    # Github
    GitHub_RepositoryName="MoonBase2"

    # Moon Base ssh key
    SSHKey_PrivateURLID="1NQBNCotC3-pcMcZRLzwxxLost_WgKaPl"
    SSHKey_PublicURLID="1H-98PGCJhcaKIWX1VwV0YhYF9iOn2tUc"
    SSHKey_PrivateName="MoonBase2-RepositoryKey"
    SSHKey_PublicName="MoonBase2-RepositoryKey.pub"

    # Moon base auto update
    AutoUpTXTFileName="MoonBase2_ModpackPath.txt"
    AutoUpCMDFileName="Moon Base 2 - auto update.cmd"
else
    ModpackDir_IsolateName=$(basename "$ModpackDir")
    echo -e "\nError: No project was found with Name '$ModpackDir_IsolateName'" >&2
    echo -ne "\nPress Enter to exit..."
    read -r
    exit 1
fi
read

# =================================================================================================== #

#region DL SSH Key
DownloadSSHKey() {
  local SSHKey_Path="$1"
  local SSHKey_URLID="$2"
  local SSHKey_Name="$3"

  # Assumiamo che GoogleDirectLink e keyDir siano già definite esternamente
  local URL="${GoogleDirectLink}${SSHKey_URLID}"

  # Test key path download if not exist
  if [[ ! -f "$SSHKey_Path" ]]; then

    # Create key dir if not exist
    if [[ ! -d "$keyDir" ]]; then
      mkdir -p "$keyDir"
    fi

    # Download Key
    Start-DownloadFile "$URL" "$keyDir" "$SSHKey_Name"
  fi
}

# =================================================================================================== #

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

# =================================================================================================== #

DownloadSSHKey() {
  # Ensure SSH private key
  DownloadSSHKey "$SSHKey_PrivatePath" "$SSHKey_PrivateURLID" "$SSHKey_PrivateName"

  # Ensure SSH public key
  DownloadSSHKey "$SSHKey_PublicPath" "$SSHKey_PublicURLID" "$SSHKey_PublicName"
}

# =================================================================================================== #

DownloadRepository() {

  # Ensure SSH Key
DownloadSSHKey

  # Test repository path download if not exist
  if [[ ! -d "$RepoModpackDir" ]]; then

    # Create Repository dir if not exist
    if [[ ! -d "$RepoDir" ]]; then
      mkdir -p "$RepoDir"
    fi

    # Set temporary environment variable for ssh command with key
    GIT_SSH_COMMAND="ssh -i \"$SSHKey_PrivatePath\""
    export GIT_SSH_COMMAND

    # Clone repository with ssh
    git clone -b 1.20 --depth 1 --single-branch "git@github.com:NoveIX/$GitHub_RepositoryName.git" "$RepoModpackDir"
  fi
}

# =================================================================================================== #

Setup() {
  # Ensure repository
  DownloadRepository

  # Test .git path in modpack dir, copy files if not exist
  if [[ ! -d "$GitDir" ]]; then
    echo "[INFO] Start copy repository file in modpack folder"
    cp -r "$RepoModpackDir/"* "$ModpackDir/"
  fi

  # Give time to read
  sleep 10
  exit 0
}
