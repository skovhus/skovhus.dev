module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next/core-web-vitals', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 90,
        semi: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'prefer-const': 'error',
    'prefer-template': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off', // replaced by @typescript-eslint/no-unused-vars
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
