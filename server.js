const Koa = require('koa')
const fs = require('fs')
const koaStatic = require('koa-static')
const path = require('path')
const cors = require('@koa/cors')

const app = new Koa()

app.use(cors())

app.use(koaStatic(
  path.join(__dirname, 'main/dist')
))

app.use(koaStatic(
  path.join(__dirname, './')
))

app.use(async ctx => {
  ctx.response.headers['content-type'] = 'text/html'

  const html = fs.readFileSync('./main/dist/index.html', { encoding: 'utf8' })
  ctx.body = html
})

app.listen(8000, () => {
  console.log('listen at http://localhost:8000')
})
