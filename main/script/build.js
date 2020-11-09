const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConf = require('../config/webpack.config')();

webpackConf.mode = 'production';

webpackConf.plugins.push(
  new webpack.ProgressPlugin((percentage, msg) => {
    console.log(`${(percentage * 100).toFixed(2)}%: ${msg}`);
  }),
  new CleanWebpackPlugin({
    verbose: true,
    dry: false,
  }),
);

const compiler = webpack(webpackConf);

compiler.run((err, stats) => {
  if (err) {
    console.error('err: ', err.stack || err.details || err);
    return;
  }

  if (stats.hasErrors()) {
    console.error('stats: ', stats.toJson().errors);
    return;
  }

  console.log('build done');
});
