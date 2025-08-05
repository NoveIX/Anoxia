#!/bin/bash
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
# pass them to this script directly

#!/bin/bash

# Locate script path
scriptDir=$(dirname "$(realpath "$0")")
serverDir=$scriptDir
cd $serverDir

# Define parent path
toolsDir=$(realpath "$serverDir/..")
modpackDir=$(realpath "$toolsDir/..")

# Define key, file and path
keyDir="$toolsDir/src/key"
sshKey_PrivatePath="$keyDir/anoxia_github_readonly"
sshKey_PublicPath="$keyDir/anoxia_github_readonly.pub"

# Define forge and minecraft version
mcVer=1.20.1
forgeVer=47.4.0

# Change directory modpack dir
cd $modpackDir
auth="$sshKey_PrivatePath"

# Check update and start server
echo -e "\n# ===================== Git log message ===================== #\n"
GIT_SSH_COMMAND="ssh -i $auth" git pull
echo -e "\n# =========================================================== #\n"

# Run Server
tmux new-session -d -s "Anoxia" "export VAR=value; java @user_jvm_args.txt @libraries/net/minecraftforge/forge/$mcVer-$forgeVer/unix_args.txt \"$@\""
