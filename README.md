# Linter for BRMS

## Install the latest release

```shell
git clone --depth 1 --branch releases git@github.com:theodo/brms-linter.git
```

## Usage

Single file:

```shell
node app.js filepath.srl
```

Several files, use a glob:

```shell
node app.js './**/*.srl'
```

### Update

```shell
git fetch origin releases
git reset --hard origin/releases
```

## Dev

### Install

- Clone the repository `git clone git@github.com:theodo/brms-linter.git`
- You need to [install antlr](https://www.antlr.org/download.html)
- Create a simlink to your installed antlr `ln -sr <path to your installed antlr> <repo path>/antlr`

### Run

- Run `make build-parser` to rebuild the parser
- `npm start` to run it again sample.srl

### Release :

- From branch master:
- Create branch releases (delete it in local in case of conflict)
- Run `make build-parser` and **commit** the generated files
