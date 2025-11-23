module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 90,
  semi: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^#/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}
