// tslint-react
// Lint rules related to React & JSX for TSLint.
// Reference https://github.com/palantir/tslint-react

module.exports = {
  rules: {
    'jsx-alignment': true,
    'jsx-ban-props': false,
    'jsx-boolean-value': false,
    'jsx-curly-spacing': ['never'],
    'jsx-equals-spacing': ['never'],
    'jsx-key': true,
    'jsx-no-bind': true,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-self-close': true,
    'jsx-use-translation-function': false,
    'jsx-wrap-multiline': true,

    // Overrides from base config
    'variable-name': [true, 'ban-keywords'] // 23.2 exception
  }
}
