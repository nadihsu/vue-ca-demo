module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  customSyntax: 'postcss-scss',
  rules: {
    'selector-class-pattern': [
      // Support Element-UI BEM Style with camelCase after __
      '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)*([A-Z][a-z0-9]+)?)*(--([a-z0-9]+-?)+){0,2}$',
      {
        resolveNestedSelectors: true,
      }
    ],
    'import-notation': 'string',
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
        tabWidth: 2,
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'no-descending-specificity': null,
  },
  overrides: [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-html"
    },
    {
      "files": ["*.scss", "**/*.scss"],
      "rules": {
        "scss/no-global-function-names": null
      }
    }
  ],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.json"]
}
