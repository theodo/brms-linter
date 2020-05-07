#! /bin/bash
# publish the package if the current code version doesn't match the npm repository version
set -euo pipefail
IFS=$'\n\t'

NPM_CURRENT_VERSION="$(npm view brmslint version)"
CODE_VERSION="$(jq '.version' package.json --raw-output)"

if [[ "${NPM_CURRENT_VERSION}" != "${CODE_VERSION}" ]]; then
  npm publish --access public
  exit 0
fi
echo "Should not publish package as current \
version '${CODE_VERSION}' match currently published npm version '${NPM_CURRENT_VERSION}'"
