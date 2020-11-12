const Koa = require('koa');
const fs = require('fs');
const koaStatic = require('koa-static');
const path = require('path');
const cors = require('@koa/cors');

const app = new Koa();

let html;

if (fs.existsSync('./dist/index.html')) {
  html = fs.readFileSync('./dist/index.html', { encoding: 'utf8' });
} else {
  html = '404';
}

app.use(cors());

app.use(koaStatic(path.join(__dirname, '../dist')));

app.use(koaStatic(path.join(__dirname, '../example')));

app.use(async (ctx) => {
  ctx.response.headers['content-type'] = 'text/html';

  ctx.body = html;
});

const port = process.env.PORT || process.env.main_port || 8000;

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
});
