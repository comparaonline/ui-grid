module.exports = {
  extends: [
    '@comparaonline/eslint-config-react',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-confusing-arrow': 0
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
};
