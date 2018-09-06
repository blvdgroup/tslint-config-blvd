'use strict'

const getRuleDirectory = require('./utils/getRuleDirectory')
const base = require('./rules/base')

module.exports = {
  rulesDirectory: [
    getRuleDirectory('tslint-eslint-rules', 'dist/rules'),
    getRuleDirectory('tslint-consistent-codestyle', './'),
    getRuleDirectory('tslint-microsoft-contrib', './')
  ],
  rules: Object.assign({}, base.rules)
}
