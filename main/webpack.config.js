const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name].js`,
    publicPath: '/',
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: 'body',
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
}