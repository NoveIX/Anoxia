#!/bin/bash

# Locate script path
scriptDir=$(dirname "$(realpath "$0")")
serverDir=$scriptDir
cd $serverDir

# Define parent path
toolsDir=$(realpath "$serverDir/..")

# Define key, file and path
keyDir="$toolsDir/src/key"
sshKey_PrivatePath="$keyDir/anoxia_github_readonly"
sshKey_PublicPath="$keyDir/anoxia_github_readonly.pub"

chmod 700 $keyDir
chmod 600 $sshKey_PrivatePath
chmod 644 $sshKey_PublicPath