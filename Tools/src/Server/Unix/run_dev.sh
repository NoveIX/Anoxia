#!/bin/bash
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
# pass them to this script directly

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
KeyDir="$ToolsDir/key"
SSHKey_PrivatePath=$keyDir/'MoonBase2-RepositoryKey'
SSHKey_PublicPath=$keyDir/'MoonBase2-RepositoryKey.pub'

# Define forge and minecraft version
mcVer=1.20.1
forgeVer=47.4.0

# Change directory modpack dir
cd $ModpackDir
auth="$SSHKey_PrivatePath"

# Check update and start server
echo
echo "# ===================== Git log message ===================== #"
echo

GIT_SSH_COMMAND="ssh -i $auth" git pull

echo
echo "# =========================================================== #"
echo

tmux new-session -d -s UndeadRising "export VAR=value; java @user_jvm_args.txt @libraries/net/minecraftforge/forge/$mcVer-$forgeVer/unix_args.txt \"$@\""