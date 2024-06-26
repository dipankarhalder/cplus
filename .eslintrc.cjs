module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'postcss-modules',],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.css'],
      parser: '@typescript-eslint/parser',
      rules: {
        'postcss-modules/no-undef-class': 'off',
        'postcss-modules/no-unused-class': 'off',
        'postcss-modules/named-exports': 'off',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
}
