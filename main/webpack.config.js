const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  entry: {
    main: path.resolve(__dirname, './index.js')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [
          /node_modules\//
        ]
      },
      {
        test: /\.(css|less)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.ts', '.js', '.tsx', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}
