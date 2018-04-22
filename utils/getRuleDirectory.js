const path = require('path')

/**
 * Workaround to use proper module resolution for custom rules.
 * https://github.com/palantir/tslint/issues/3436
 *
 * @param {string} name The module name.
 * @param {string} [directory] The path to the rules directory.
 */
const getRuleDirectory = (name, directory) =>
  path.join(path.dirname(require.resolve(name)), directory || '')

module.exports = getRuleDirectory
