const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  globals: {
    uni: 'readonly',
    wx: 'readonly'
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'off',
      {
        vueIndentScriptAndStyle: false
      }
    ],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
});
