const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: `[name].js`,
  },
  entry: {
    main: path.resolve(__dirname, './index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js'),
    },
  },
}