#!/bin/bash

LANG="$1"
PR_NUMBER="$2"
FUNCTION_NAME="$3"
REGISTRY="$4"
IMAGE="$5"
ROLE_ARN="$6"

# Check if the function exists already
# If it does, update it with the new code from the PR
if aws lambda get-function --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" > /dev/null 2>&1; then
  aws lambda update-function-code \
    --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" \
    --image-uri "$REGISTRY"/"$IMAGE":"$PR_NUMBER" > /dev/null 2>&1

# Function does not exist, create a new function and setup its function URL
else
  aws lambda create-function \
    --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" \
    --package-type Image \
    --role "$ROLE_ARN" \
    --code ImageUri="$REGISTRY"/"$IMAGE":latest \
    --environment "Variables={CONTENT_DIR=/var/www/html/$LANG}" \
    --description "$GITHUB_REPOSITORY"/pull/"$PR_NUMBER" > /dev/null 2>&1

  aws lambda wait function-active --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" > /dev/null 2>&1
  
  aws lambda add-permission \
    --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" \
    --statement-id FunctionURLAllowPublicAccess \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type NONE > /dev/null 2>&1
  
  aws logs create-log-group --log-group-name /aws/lambda/"$FUNCTION_NAME-$PR_NUMBER-$LANG" > /dev/null 2>&1
  aws logs put-retention-policy --log-group-name /aws/lambda/"$FUNCTION_NAME-$PR_NUMBER-$LANG" --retention-in-days 7 > /dev/null 2>&1
  aws lambda create-function-url-config --function-name "$FUNCTION_NAME-$PR_NUMBER-$LANG" --auth-type NONE > /dev/null 2>&1
fi
