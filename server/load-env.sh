#!/usr/bin/env bash

ENV_FILE="${1:-.env}"

if [[ ! -f "$ENV_FILE" ]]; then
    echo "ERROR: Environment file not found: $ENV_FILE" >&2
    return 1 2>/dev/null || exit 1
fi

while IFS= read -r line || [[ -n "$line" ]]; do

    # Skip empty lines
    [[ -z "$line" ]] && continue

    # Skip comments
    [[ "$line" == \#* ]] && continue

    # Split KEY=VALUE
    key="${line%%=*}"
    value="${line#*=}"

    export "$key=$value"

done < "$ENV_FILE"