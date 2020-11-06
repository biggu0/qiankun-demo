const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
}
