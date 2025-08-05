#!/bin/bash

# Locate script path
ScriptDir=$(dirname "$(realpath "$0")")
ServerDir=$ScriptDir
cd $ServerDir

# Define parent path
ToolsDir=$(realpath "$ServerDir/..")
ModpackDir=$(realpath "$ToolsDir/..")

# Define key, file and path
KeyDir="$ToolsDir/src/key"
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
