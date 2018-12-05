const Koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const { resolve } = require('path');

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  const distPath = resolve(__dirname, '../dist/heroku-example');
  app.use(serve(distPath));
}

const helloHandler = route.get('/api/hello', ctx => {
  ctx.body = 'HelloWorld';
});

app.use(helloHandler);

app.listen(process.env.PORT || 4001);
