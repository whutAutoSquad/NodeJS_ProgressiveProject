import Router from 'koa-router'
let router = new Router()

import model from '../../db/infos.test.js'

router
  .get('/', async (ctx, next) => {
    ctx.status = 200
    let res = await model.find(ctx.query)
    ctx.body = {
      db: 'infos',
      collection: 'test',
      code: ctx.query,
      res: res
    }
  })
  .get('/:id', async (ctx, next) => {

    let res = await model.find({ code: ctx.params.id })
    ctx.status = 200
    ctx.body = {
      db: 'infos',
      collection: 'test',
      code: ctx.params.id,
      res: res
    }
  })
  .delete('/', async (ctx, next) => {
    let res = await model.remove(ctx.query)
    ctx.status = 200;
    ctx.body = res;
  })


module.exports = router;
export default router;