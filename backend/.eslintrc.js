module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier/@typescript-eslint', 'standard'],
  rules: {
    camelcase: 'off',
    'no-unused-vars': 'off',
  },
};
