const path = require('path');

const config = {
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/mock/null.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }]
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  rootDir: path.resolve(__dirname, '..')
};

module.exports = config;
