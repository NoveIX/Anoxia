#!/bin/bash
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
# pass them to this script directly

# Check update
./run.sh

# Run Server
tmux new-session -d -s "Anoxia" "export VAR=value; java @user_jvm_args.txt @libraries/net/minecraftforge/forge/$mcVer-$forgeVer/unix_args.txt \"$@\""
