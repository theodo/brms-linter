const fs = require('fs');
const antlr4 = require('antlr4');
const BrmsLexer = require('./build/BrmsLexer').BrmsLexer;
const BrmsParser = require('./build/BrmsParser').BrmsParser;
const BrmsListener = require('./build/BrmsListener').BrmsListener;
const linterRules = require('./linterRules').linterRules;

const parseContent = (err, contents) => {
  const chars = new antlr4.InputStream(contents);
  const lexer = new BrmsLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new BrmsParser(tokens);
  parser.buildParseTrees = true;
  const { children: rules } = parser.rules();
  console.log();
  const rulesValidationResult = Object.values(linterRules).map(
    (linterRuleValidator) => {
      return linterRuleValidator(rules);
    }
  );
  if (rulesValidationResult.every(({ result }) => result)) {
    console.log('No linter rule errors');
  } else {
    rulesValidationResult
      .filter(({ result }) => !result)
      .forEach(({ linterRuleName, errors }) => {
        console.log(`Error for the rule: ${linterRuleName}`);
        console.log(errors);
      });
  }
};

const filename = process.argv[2];
console.log(filename);
fs.readFile(filename, 'utf8', parseContent);
