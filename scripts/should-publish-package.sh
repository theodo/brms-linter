#! /bin/bash
# exit 0 if the current code version doesn't match the npm repository version
set -euo pipefail
IFS=$'\n\t'

NPM_CURRENT_VERSION="$(npm view brmslint version)"
CODE_VERSION="$(jq '.version' package.json --raw-output)"

if [[ "${NPM_CURRENT_VERSION}" != "${CODE_VERSION}" ]]; then
  exit 0
fi
echo >&2 "Should not publish package as current \
version '${CODE_VERSION}' match currently published npm version '${NPM_CURRENT_VERSION}'"
exit 1
