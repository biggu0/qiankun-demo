const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    library: "react-micro-app",
    libraryTarget: "umd",
  },
  entry: {
    main: path.resolve(__dirname, './index.js'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          },
        ],
      }
    ]
  },
}