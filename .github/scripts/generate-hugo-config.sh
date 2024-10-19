#!/bin/bash

# Get the URLs JSON from the first argument
URLS="$1"

# Extract URLs, providing defaults if not found
EN_URL=$(echo "$URLS" | jq -r '.en_url // "http://localhost:8080"')
FR_URL=$(echo "$URLS" | jq -r '.fr_url // "http://localhost:8080"')

# Create the config file with proper YAML structure
cat > config/staging/config.yaml << EOF
baseURL: ""
defaultContentLanguage: "en"
languages:
  en:
    languageName: "English"
    weight: 1
    baseURL: "${EN_URL}"
  fr:
    languageName: "Français"
    weight: 2
    baseURL: "${FR_URL}"
EOF

# Print the generated config for debugging
echo "Generated config:"
cat config/staging/config.yaml