// implement an error listener to be able to get antlr error
const antlr4 = require('antlr4');

class BrmsSyntaxErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
    this.errors.push({
      line,
      column,
      msg,
    });
  }

  getErrors() {
    return this.errors;
  }
}
exports.BrmsSyntaxErrorListener = BrmsSyntaxErrorListener;
