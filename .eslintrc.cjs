/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/vue',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // 因 unplugin-auto-import，建立關閉 no-undef
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        json: 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['draft'],
      },
    ],
    'testing-library/no-node-access': 'off',
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
      '~': `${path.resolve(__dirname, './src/assets')}`,
      '@tests': `${path.resolve(__dirname, './tests')}`,
    }),
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['~', './src/assets'],
          ['@tests', './tests'],
        ],
        extensions: ['.vue', '.json', '.ts', '.js', '.mjs', '.mts'],
      },
    },
  },
};
