module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    '@tencent/eslint-config-tencent',
  ],
  rules: {
    'react/prop-types': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
