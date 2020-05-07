# Linter for BRMS

![](https://github.com/theodo/brms-linter/workflows/CI/badge.svg)

## Install the latest release

```shell
npm install brmslint --save-dev
yarn add brmslint --dev
```

## Usage

Single file:

```shell
brmslint filepath.srl
```

Several files, use a glob:

```shell
brmslint './**/*.srl'
```

## Dev

### Install

- Clone the repository `git clone git@github.com:theodo/brms-linter.git`
- You need to [install antlr](https://www.antlr.org/download.html)
- Create a simlink to your installed antlr **jar** `ln -sr <path to your installed antlr> <repo path>/antlr.jar`

### Run

- `npm start` to run the cli on [sample.srl](./sample.srl)

### Tests

- `npm test` to run jest tests
- Tests are described in [`tests/main.js`](./tests/main.js)
- The used samples files are in `tests/test-samples/**/*.srl`

### Release :

- Bump package version: with a clean git history, run `npm version <version_type:patch|minor|major>`

- push to master **preferably using a pull request**
