import Router from 'koa-router'
let router = new Router()

import model from '../../db/model.js'

router.get('/', async (ctx, next) => {
  ctx.status = 200
  let res = await model.find(ctx.query)
  ctx.body = {
    db: 'infos',
    collection: 'test',
    code: ctx.query,
    res: res
  }
});

router.get('/:id', async (ctx, next) => {
  ctx.status = 200

  let res = await model.find({ code: ctx.params.id })
  ctx.body = {
    db: 'infos',
    collection: 'test',
    code: ctx.params.id,
    res: res
  }
})

export default router