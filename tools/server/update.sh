#!/bin/bash

# Locate script path
ScriptDir=$(dirname "$(realpath "$0")")
UnixDir=$ScriptDir
cd $ScriptDir

# Define parent path
ServerDir=$(realpath "$UnixDir/..")
SrcDir=$(realpath "$ServerDir/..")
ToolsDir=$(realpath "$SrcDir/..")
ModpackDir=$(realpath "$ToolsDir/..")

# Define key, file and path
KeyDir="$SrcDir/key"
SSHKey_PrivatePath=$keyDir/'anoxia_github_readonly'
SSHKey_PublicPath=$keyDir/'anoxia_github_readonly.pub'

# Define forge and minecraft version
mcVer=1.20.1
forgeVer=47.4.0

# Change directory modpack dir
cd $ModpackDir
auth="$SSHKey_PrivatePath"

# Check update and start server
echo -e "\n# ===================== Git log message ===================== #\n"
GIT_SSH_COMMAND="ssh -i $auth" git pull
echo -e "\n# =========================================================== #\n"