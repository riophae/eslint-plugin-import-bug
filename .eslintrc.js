module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [ 'import' ],
  rules: {
    'import/namespace': [ 'error', {
      allowComputed: true,
    } ],
  },
}
