/*
export some logging functions
*/
Reset = '\x1b[0m';

FgBrightBlack = '\x1b[90m';
FgRed = '\x1b[31m';
FgGreen = '\x1b[32m';
FgYellow = '\x1b[33m';
FgWhite = '\x1b[37m';

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
