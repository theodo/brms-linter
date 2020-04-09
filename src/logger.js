/*
export some logging functions
*/
const Reset = '\x1b[0m';

const FgBrightBlack = '\x1b[90m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgWhite = '\x1b[37m';

const logEscape = (modifiers, text) => {
  console.log(`${modifiers}${text}${Reset}`);
};

const logErrorEscape = (modifiers, text) => {
  console.error(`${modifiers}${text}${Reset}`);
};

exports.logger = {
  logError: (text) => logErrorEscape(FgRed, text),
  logWarning: (text) => logErrorEscape(FgYellow, text),
  logNotice: (text) => logEscape(FgBrightBlack, text),
  logInfo: (text) => logEscape(FgWhite, text),
  logSuccess: (text) => logEscape(FgGreen, text),
};
