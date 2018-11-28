import Router from 'koa-router'
let router = new Router()

router
  .post('/find', async (ctx, next) => {
    let reqBody = ctx.getValidatedProps(ctx.request.body)
    ctx.body = await ctx.db.test.find(reqBody)
    ctx.status = 200
  })
  .post('/create', async (ctx, next) => {
    let reqBody = ctx.getValidatedProps(ctx.request.body)
    console.log("reqBody: ", reqBody)
    ctx.body = await ctx.db.test.create(reqBody)

    console.log(ctx.body)
    ctx.status = 200
  })
  .post('/remove', async (ctx, next) => {
    let conditions = ctx.getValidatedProps(ctx.request.body)
    ctx.body = await ctx.db.test.remove(conditions)
    ctx.status = 200
  })
  .post('/update', async (ctx, next) => {
    let reqBody = ctx.getValidatedProps(ctx.request.body)
    let conditions = { index: reqBody.index }
    let updates = {
      $set: reqBody
    }
    ctx.body = await ctx.db.test.update(conditions, updates)
    ctx.status = 200
  })

module.exports = router;
export default router;