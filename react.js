'use strict'

const reactRules = require('./rules/react')

module.exports = {
  extends: ['./index', 'tslint-react'],
  rules: reactRules
}
