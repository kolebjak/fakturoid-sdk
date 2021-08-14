module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/ban-types': [1, { types: { object: false } }],
    'prettier/prettier': ['error', { printWidth: 180, trailingComma: 'all', singleQuote: true, endOfLine: 'lf', semi: true, tabWidth: 2 }],
  },
};
