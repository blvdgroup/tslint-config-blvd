// Base Config
// Overrides default TSLint configs according to the blvd styleguide.
// Reference https://github.com/palantir/tslint-react

module.exports = {
  'align': [
    true,
    'parameters',
    'arguments',
    'statements'
  ],
  'ban': false,
  'class-name': true,
  'comment-format': [
    true,
    'check-space'
  ],
  'curly': false,
  'eofline': true,
  'forin': true,
  'indent': [
    true,
    'spaces'
  ],
  'linebreak-style': [true, 'LF'],
  'interface-name': [false],
  'jsdoc-format': true,
  'label-position': true,
  'max-line-length': [
    true,
    140
  ],
  'member-ordering': [
    true,
    { 'order': 'statics-first' }
  ],
  'no-any': false,
  'no-arg': true,
  'no-bitwise': true,
  'no-console': [
    true,
    'debug',
    'info',
    'time',
    'timeEnd',
    'trace'
  ],
  'no-construct': true,
  'no-debugger': true,
  'no-shadowed-variable': true,
  'no-duplicate-variable': true,
  'no-empty': true,
  'no-eval': true,
  'no-internal-module': true,
  'no-magic-numbers': false,
  'no-require-imports': false,
  'no-parameter-properties': false,
  'no-string-literal': true,
  'no-switch-case-fall-through': true,
  'no-trailing-whitespace': true,
  'no-unused-expression': true,
  'no-unused-variable': [true, 'react'],
  'no-use-before-declare': true,
  'no-var-keyword': true,
  'no-var-requires': false,
  'object-literal-sort-keys': false,
  'one-line': [
    true,
    'check-open-brace',
    'check-catch',
    'check-else',
    'check-whitespace'
  ],
  'ordered-imports': [false],
  'quotemark': [
    true,
    'single',
    'jsx-double'
  ],
  'radix': true,
  'semicolon': [false],
  'switch-default': true,
  'trailing-comma': [false],
  'triple-equals': [
    true,
    'allow-null-check'
  ],
  'typedef': [
    false,
    'call-signature',
    'parameter',
    'property-declaration',
    'member-variable-declaration'
  ],
  'typedef-whitespace': [
    true, {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      'parameter': 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace'
    }
  ],
  'variable-name': [
    true,
    'ban-keywords'
  ],
  'whitespace': [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-separator',
    'check-type'
  ]
}
