#!/bin/bash
set -euo pipefail

LANG="$1"
PR_NUMBER="$2"
FUNCTION_NAME="$3"
REGISTRY="$4"
IMAGE="$5"
ROLE_ARN="$6"

FULL_FUNCTION_NAME="${FUNCTION_NAME}-${PR_NUMBER}-${LANG}"
IMAGE_TAG="${PR_NUMBER}"

echo "Deploying function: $FULL_FUNCTION_NAME"

# Check if the function already exists
if aws lambda get-function --function-name "$FULL_FUNCTION_NAME" > /dev/null 2>&1; then
  echo "Function exists. Updating code..."
  aws lambda update-function-code \
    --function-name "$FULL_FUNCTION_NAME" \
    --image-uri "${REGISTRY}/${IMAGE}:${IMAGE_TAG}"
else
  echo "Function does not exist. Creating new Lambda function..."
  aws lambda create-function \
    --function-name "$FULL_FUNCTION_NAME" \
    --package-type Image \
    --role "$ROLE_ARN" \
    --code ImageUri="${REGISTRY}/${IMAGE}:latest" \
    --environment "Variables={CONTENT_DIR=/var/www/html/$LANG}" \
    --description "$GITHUB_REPOSITORY/pull/$PR_NUMBER"

  echo "Waiting for function to become active..."
  aws lambda wait function-active --function-name "$FULL_FUNCTION_NAME"

  echo "Setting up function URL..."
  aws lambda add-permission \
    --function-name "$FULL_FUNCTION_NAME" \
    --statement-id FunctionURLAllowPublicAccess \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type NONE

  echo "Setting up logs..."
  aws logs create-log-group --log-group-name /aws/lambda/"$FULL_FUNCTION_NAME" || true
  aws logs put-retention-policy --log-group-name /aws/lambda/"$FULL_FUNCTION_NAME" --retention-in-days 7

  aws lambda create-function-url-config \
    --function-name "$FULL_FUNCTION_NAME" \
    --auth-type NONE
fi
