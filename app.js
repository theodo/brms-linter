const fs = require('fs');
const antlr4 = require('antlr4');
const { BrmsLexer } = require('./build/BrmsLexer');
const { BrmsParser } = require('./build/BrmsParser');
const { BrmsSyntaxErrorListener } = require('./BrmsSyntaxErrorListener');
const { linterRules } = require('./linterRules');
const { logger } = require('./logger');

const parseContent = (err, contents) => {
  if (err) {
    logger.logError(err);
    process.exit(2);
  }

  const chars = new antlr4.InputStream(contents);
  const lexer = new BrmsLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new BrmsParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  const brmsSyntaxErrorListener = new BrmsSyntaxErrorListener();
  parser.addErrorListener(brmsSyntaxErrorListener);
  const { children: rules } = parser.rules();

  const syntaxErrors = brmsSyntaxErrorListener.getErrors();
  syntaxErrors.forEach(({ line, column, msg }) =>
    logger.logError(`line ${line}, col ${column}: ${msg}`)
  );

  const rulesValidationResult = Object.values(linterRules).map(
    (linterRuleValidator) => {
      return linterRuleValidator(rules);
    }
  );
  const hasLinterErrors = !rulesValidationResult.every(({ result }) => result);
  if (hasLinterErrors) {
    rulesValidationResult
      .filter(({ result }) => !result)
      .forEach(({ linterRuleName, errors }) => {
        logger.logError(`Error for the rule: ${linterRuleName}`);
        logger.logInfo(errors);
      });
  }

  if (syntaxErrors.length > 0 || hasLinterErrors) {
    process.exit(1);
  }

  process.exit(0);
};

const filename = process.argv[2];
logger.logNotice(filename);
fs.readFile(filename, 'utf8', parseContent);
