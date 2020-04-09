const glob = require('glob')
const {
  linterRules: { globalLinterRules },
} = require('./linterRules')
const { logger } = require('./logger')
const { FileParser } = require('./FileParser')

const processFiles = (pattern) => (err, files) => {
  if (err) {
    logger.logError(err)
    process.exit(2)
  }
  if (files.length === 0) {
    logger.logError(`No files matching the pattern were found: ${pattern}`)
    process.exit(2)
  }

  logger.logInfo('\n> Processing files')
  const listOfAllRules = []
  let lintError = false
  for (const file of files) {
    logger.logNotice(file)
    const { syntaxErrors, singleFileLintValidation, rules } = FileParser.parse(
      file
    )
    syntaxErrors.forEach(({ line, column, msg }) =>
      logger.logError(`Syntax error: line ${line}, col ${column}: ${msg}`)
    )
    const hasLinterErrors = !singleFileLintValidation.every(
      ({ result }) => result
    )
    if (hasLinterErrors) {
      singleFileLintValidation
        .filter(({ result }) => !result)
        .forEach(({ linterRuleName, errors }) => {
          logger.logError(`Error: ${linterRuleName}`)
          logger.logErrorInfo(errors)
        })
    }
    if (syntaxErrors.length > 0 || hasLinterErrors) {
      lintError = true
    }
    listOfAllRules.push(rules)
  }

  logger.logInfo('\n> Validating global lint rules')
  const globalLintValidation = Object.values(globalLinterRules).map(
    (linterRuleValidator) => {
      return linterRuleValidator(listOfAllRules)
    }
  )

  globalLintValidation
    .filter(({ result }) => !result)
    .forEach(({ linterRuleName, errors }) => {
      logger.logError(`Global Error: ${linterRuleName}`)
      logger.logErrorInfo(errors)
      lintError = true
    })

  if (lintError) {
    process.exit(1)
  }
}

exports.App = {
  run: () => {
    if (process.argv.length <= 2) {
      console.log('Usage: node app.js path/to/directory|file|glob')
      process.exit(-1)
    }

    const pattern = process.argv[2]
    glob(pattern, {}, processFiles(pattern))
  },
}
