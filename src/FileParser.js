const fs = require('fs')
const antlr4 = require('antlr4')
const { BrmsLexer } = require('./BrmsLexer')
const { BrmsParser } = require('./BrmsParser')
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

    const brmsSyntaxErrorListener = new BrmsSyntaxErrorListener()
    const chars = new antlr4.InputStream(fileContent)
    const lexer = new BrmsLexer(chars)
    lexer.removeErrorListeners()
    lexer.addErrorListener(brmsSyntaxErrorListener)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new BrmsParser(tokens)
    parser.buildParseTrees = true
    parser.removeErrorListeners()
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
