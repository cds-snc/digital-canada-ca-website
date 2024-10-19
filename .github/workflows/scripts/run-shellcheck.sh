#!/bin/bash

# Create an array to store paths to check
paths_to_check=()

# Add paths if they exist and contain .sh files
if [ -d ".github/scripts" ] && [ -n "$(find .github/scripts -name '*.sh')" ]; then
    paths_to_check+=("/mnt/.github/scripts/*.sh")
fi

if [ -d ".github/workflows/scripts" ] && [ -n "$(find .github/workflows/scripts -name '*.sh')" ]; then
    paths_to_check+=("/mnt/.github/workflows/scripts/*.sh")
fi

if [ -d "bin" ] && [ -n "$(find bin -name '*.sh')" ]; then
    paths_to_check+=("/mnt/bin/*.sh")
fi

# Only run shellcheck if we have paths to check
if [ ${#paths_to_check[@]} -gt 0 ]; then
    docker run --rm -v "$PWD:/mnt" koalaman/shellcheck:v0.7.1 \
        -P /mnt \
        "${paths_to_check[@]}"
else
    echo "No shell scripts found to check"
    exit 0
fi 