'use strict'

const react = require('./rules/react')

module.exports = {
  extends: ['./index', 'tslint-react'],
  rules: Object.assign({}, react.rules)
}
