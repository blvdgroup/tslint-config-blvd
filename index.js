'use strict'

const { getRuleDirectory } = require('./lib/utils')
const base = require('./rules/base')

module.exports = {
  rulesDirectory: [
    getRuleDirectory('tslint-eslint-rules', 'dist/rules'),
    getRuleDirectory('tslint-consistent-codestyle'),
    getRuleDirectory('tslint-microsoft-contrib')
  ],
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  rules: Object.assign({}, base.rules)
}
