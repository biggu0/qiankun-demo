const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/micro-react/dist/', // todo: move to runtime
    path: path.resolve(__dirname, 'dist'),
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      }

    ]
  },
}