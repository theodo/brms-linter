// Basic test for the cli
const {
  helpers: { cli, getSample },
} = require('./helpers')

describe('test cli', () => {
  test('Error no glob passed', async () => {
    const result = await cli()
    expect(result.code).toBe(5)
  })

  test('Error no files found', async () => {
    const result = await cli(['notFound.notfound'])
    expect(result.code).toBe(3)
  })

  test('Error no rule', async () => {
    const result = await cli([getSample('no-rules')])
    expect(result.code).toBe(1)
    expect(result.stderr).toMatch(/mismatched input '<EOF>' expecting 'REGLE'/)
  })

  test('Error no priority defined', async () => {
    const result = await cli([getSample('no-priority')])
    expect(result.code).toBe(1)
    expect(result.stderr).toMatch(
      /Error: Rule priority must be in given config bounds/
    )
    expect(result.stderr).toMatch(/Missing priorities config in the file/)
  })

  test('Error priority not respected', async () => {
    const result = await cli([getSample('priority-out-of-bound')])
    expect(result.code).toBe(1)
    expect(result.stderr).toMatch(
      /Error: Rule priority must be in given config bounds/
    )
    expect(result.stderr).toMatch(/"some rule" has incorrect priority: 500/)
  })

  test('Error rule duplicated in same file', async () => {
    const result = await cli([getSample('duplicated-rule')])
    expect(result.code).toBe(1)
    expect(result.stderr).toMatch(
      /Error: no same name for two rules in the same file/
    )
    expect(result.stderr).toMatch(/"some rule"/)
  })

  test('Error rule duplicated global', async () => {
    const result = await cli([getSample('duplicated-rule-global/*')])
    expect(result.code).toBe(1)
    expect(result.stderr).toMatch(
      /Global Error: no same name for two rules in parsed files/
    )
    expect(result.stderr).toMatch(/"some rule"/)
  })

  test('No error on basic sample', async () => {
    const result = await cli([getSample('sample')])
    expect(result.code).toBe(0)
  })
})
