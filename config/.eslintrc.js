module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'standard'
  ],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2, { SwitchCase: 1 }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['**/node_modules/', '**/dist/']
}
