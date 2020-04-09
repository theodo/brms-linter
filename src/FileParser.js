const fs = require('fs')
const antlr4 = require('antlr4')
const { BrmsLexer } = require('../build/BrmsLexer')
const { BrmsParser } = require('../build/BrmsParser')
const { BrmsSyntaxErrorListener } = require('./BrmsSyntaxErrorListener')
const {
  linterRules: { singleFileLinterRules },
} = require('./linterRules')
const { logger } = require('./logger')

exports.FileParser = {
  parse: (filePath) => {
    let fileContent
    try {
      fileContent = fs.readFileSync(filePath, 'utf8')
    } catch (err) {
      logger.logError(err)
      process.exit(2)
    }

    const chars = new antlr4.InputStream(fileContent)
    const lexer = new BrmsLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new BrmsParser(tokens)
    parser.buildParseTrees = true
    parser.removeErrorListeners()
    const brmsSyntaxErrorListener = new BrmsSyntaxErrorListener()
    parser.addErrorListener(brmsSyntaxErrorListener)
    const { children: rules } = parser.rules()

    const singleFileLintValidation = Object.values(singleFileLinterRules).map(
      (linterRuleValidator) => {
        return linterRuleValidator(rules)
      }
    )

    return {
      syntaxErrors: brmsSyntaxErrorListener.getErrors(),
      singleFileLintValidation,
      rules,
    }
  },
}
