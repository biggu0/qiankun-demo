const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: "vue-micro-app",
    libraryTarget: "umd",
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
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}