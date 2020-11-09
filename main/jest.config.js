const config = {
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/mock/null.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  collectCoverage: true,
};

module.exports = config;
