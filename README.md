# Linter for BRMS

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
- Create a simlink to your installed antlr `ln -sr <path to your installed antlr> <repo path>/antlr`

### Run

- `npm start` to run it against sample.srl

### Release :

- bump package version
- run `npm run build`
- run `npm publish`
