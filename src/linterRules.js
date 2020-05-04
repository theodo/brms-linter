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

const respectedPriority = ({ rules, fileContent }) => {
  const linterRuleName = 'Rule priority must be in given config bounds'
  const rulesPriorities = rules.map((rule) => ({
    name: rule.children[1].toString(),
    priority: parseInt(rule.children[4].toString()),
  }))

  const getPriorities = /\/\*[^]*Priorité de (\d+) à (\d+)[^]*\*\//.exec(
    fileContent
  )
  if (!getPriorities) {
    return {
      result: false,
      linterRuleName,
      errors: [
        'Missing priorities config in the file',
        'Expecting block comment with "Priorité de 99 à 200"',
      ],
    }
  }

  const configPriorities = {
    min: parseInt(getPriorities[1]),
    max: parseInt(getPriorities[2]),
  }

  let errors = []
  rulesPriorities.forEach(({ name, priority }) => {
    if (priority < configPriorities.min || priority > configPriorities.max) {
      errors.push(`${name} has incorrect priority: ${priority}`)
    }
  })

  return { result: errors.length === 0, linterRuleName, errors }
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
    respectedPriority,
  },
  globalLinterRules: {
    globalNoSameNameForTwoRules,
  },
}
