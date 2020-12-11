const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConf = require('../config/webpack.config')()

const PORT = 8080

webpackConf.mode = 'development'
webpackConf.devtool = 'eval-source-map'

const server = new WebpackDevServer(webpack(webpackConf), {
  hot: true,
  inline: true,
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
