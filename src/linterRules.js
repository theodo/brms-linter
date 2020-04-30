const noSameNameForTwoRules = ({ rules }) => {
  const linterRuleName = 'no same name for two rules in the same file'
  const rulesNames = rules.map((rule) => rule.children[1].toString())
  const hasDuplicates = (array) => new Set(array).size !== array.length
  const result = !hasDuplicates(rulesNames)
  if (result) {
    return { result, linterRuleName, errors: [] }
  }
  let errors = []
  rulesNames.forEach((ruleName, index) => {
    if (
      rulesNames
        .slice(index + 1)
        .some((nextRuleName) => nextRuleName === ruleName)
    ) {
      errors.push(ruleName)
    }
  })
  return { result, linterRuleName, errors }
}

const globalNoSameNameForTwoRules = (listOfAllRules) => {
  return {
    ...noSameNameForTwoRules({
      rules: listOfAllRules.reduce(
        (rulesAccumulator, rules) => [...rulesAccumulator, ...rules],
        []
      ),
    }),
    linterRuleName: 'no same name for two rules in parsed files',
  }
}

exports.linterRules = {
  singleFileLinterRules: {
    noSameNameForTwoRules,
  },
  globalLinterRules: {
    globalNoSameNameForTwoRules,
  },
}
