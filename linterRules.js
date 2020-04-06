const noSameNameForTwoRules = (rules) => {
  const linterRuleName = 'noSameNameForTwoRules';
  const rulesNames = rules.map((rule) => rule.children[1].toString());
  const hasDuplicates = (array) => new Set(array).size !== array.length;
  const result = !hasDuplicates(rulesNames);
  if (result) {
    return { result, linterRuleName, errors: [] };
  }
  let errors = [];
  rulesNames.forEach((ruleName, index) => {
    if (
      rulesNames
        .slice(index + 1)
        .some((nextRuleName) => nextRuleName === ruleName)
    ) {
      errors.push(ruleName);
    }
  });
  return { result, linterRuleName, errors };
};

exports.linterRules = { noSameNameForTwoRules };
