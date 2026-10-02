#!/bin/sh

if [ ! -f "$ENV" ]; then
    printf "error: environment file not found '%s'\n" "$ENV" >&2
    return 1 2>/dev/null || exit 1
fi

while IFS= read -r line || [ -n "$line" ]; do

    # Skip empty lines
    [ -z "$line" ] && continue

    # Skip comments
    case "$line" in
        \#*) continue ;;
    esac

    # Split KEY=VALUE
    key="${line%%=*}"
    value="${line#*=}"

    export "$key=$value"

done < "$ENV"

return 0 2>/dev/null || exit 0
