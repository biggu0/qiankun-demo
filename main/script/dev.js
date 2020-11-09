const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConf = require('../config/webpack.config')()

const compiler = webpack(webpackConf)

const PORT = 8080

webpackConf.mode = 'development'
webpackConf.devtool = 'eval-source-map'
webpackConf.output.publicPath = `http://127.0.0.1:${PORT}/`
webpackConf.output.crossOriginLoading = 'anonymous'

webpackConf.entry = Object.assign(webpackConf.entry, {
  'dev-server': `webpack-dev-server/client?http://localhost:${PORT}/`,
  'hot-reloader': 'webpack/hot/dev-server'
})

const server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  publicPath: '/',
  contentBase: '/',
  index: 'index.html',
  port: PORT,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  historyApiFallback: true
})

server.listen(PORT, 'localhost', () => {
  console.log(`start dev at http://localhost:${PORT}/`)
})
