const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'module-federation',
    libraryTarget: 'umd',
    publicPath: '//localhost:8000/module-federation/dist/',
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
            },
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
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ModuleFederationDemo',
      remotes: {
        mainApp: 'mainApp@http://localhost:8000/mainAppFederation.js',
      },
    }),
  ],
};
