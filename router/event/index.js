import Router from 'koa-router'
let router = new Router()

router
  .post('/event/list', async (ctx, next) => {
    ctx.status = 200
    let queryBody = ctx.getValidatedProps(ctx.request.body);
    console.log('/event/list',queryBody)
    let res = await ctx.db.event.find(queryBody)
    ctx.body = {
      db: 'infos',
      collection: 'event',
      query: ctx.request.body,
      res: res
    }
  })


module.exports = router;
export default router;