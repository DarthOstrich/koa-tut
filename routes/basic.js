module.exports = ({ router }) => {
  // getting the home route
  router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  });
};
