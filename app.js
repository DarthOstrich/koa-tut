const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const app = new Koa();

// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

// instantiate our new Router
const router = new Router();
// require our external routes and pass in the router
require('./routes/basic')({ router });

// tells the router to use all the routes that are on the object
app.use(router.routes());
app.use(router.allowedMethods());

// tell the server to listen to events on a specific port
const server = app.listen(3000);
module.exports = server;
