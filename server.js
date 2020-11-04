const Koa = require('koa');
const fs = require('fs');
const static = require('koa-static')
const path = require('path');

const app = new Koa();

app.use(static(
  path.join(__dirname,  './')
));

app.use(async ctx => {
  ctx.response.headers['content-type'] = 'text/html';

  const html = fs.readFileSync('./index.html', {encoding: 'utf8'});
  ctx.body = html;
});

app.listen(8080, () => {
  console.log('listen at http://localhost:8080');
});