const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '//localhost:8000/module-federation-remote/dist/'
  },
  entry: {},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'eppComponent',
      library: { type: 'var', name: 'eppComponent' },
      filename: 'mf.js',
      exposes: {
        './tester': path.resolve(__dirname, './tester.jsx')
      }
    })
  ]

}
