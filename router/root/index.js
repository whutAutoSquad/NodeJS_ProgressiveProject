import Router from 'koa-router'
let router = new Router()

router
  .post('/', async (ctx, next) => {
    ctx.status = 200
    let queryBody = ctx.getVilidateProps(ctx.request.body)
    let res = await ctx.db.person.find(queryBody)
    ctx.body = {
      db: 'infos',
      collection: 'person',
      code: ctx.query,
      res: res
    }
  })

module.exports = router;
export default router;