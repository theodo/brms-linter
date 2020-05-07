// define helpers for tests, not parsed by jest

const path = require('path')
const exec = require('child_process').exec
exports.helpers = {
  cli: (args = []) => {
    return new Promise((resolve) => {
      exec(
        `node ${path.resolve('./src/app.js')} ${args.join(' ')}`,
        { cwd: '.' },
        (error, stdout, stderr) => {
          resolve({
            code: error && error.code ? error.code : 0,
            error,
            stdout,
            stderr,
          })
        }
      )
    })
  },
  getSample: (sampleName) => `'./tests/test-samples/${sampleName}.srl'`,
}
