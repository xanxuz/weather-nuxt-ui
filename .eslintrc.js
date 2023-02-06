// https://localazy.com/blog/nuxt-3-tailwind-i18n-eslint-starter
module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  extends: [
    'plugin:nuxt/recommended',
    '@nuxt/eslint-config',
  ],

  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'vue/script-indent': [
      'error',
      2,
      {
        switchCase: 1,
        baseIndent: 1
      }
    ],
    'vue/order-in-components': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/this-in-template': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/no-multi-spaces': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1
        }
      }
    ],
    'vue/attribute-hyphenation': [ 2, 'always' ],
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/require-prop-types': 'error',
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase' ],
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-self-closing': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/no-template-shadow': 'error',
    'vue/require-default-prop': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/no-v-html': 'error',
    'vue/array-bracket-spacing': 'error',

    indent: [ 'error', 2 ],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        exports: 'only-multiline'
      }
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'computed-property-spacing': [ 'error', 'always' ],
    curly: [ 'error', 'multi' ],
    quotes: [ 'error', 'single' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'import/no-named-as-default-member': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },

  overrides: [
    {
      files: [ '*.vue' ],
      rules: {
        indent: 'off'
      }
    }
  ],
}
