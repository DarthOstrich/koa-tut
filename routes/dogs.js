module.exports = ({ dogRouter }) => {
  // getting the dogs route
  dogRouter.get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  });
};
