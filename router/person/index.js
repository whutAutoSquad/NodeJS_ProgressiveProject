import Router from 'koa-router'
let router = new Router()

import model from '../../db/infos.person.js'

router
  .post('/person/list', async (ctx, next) => {
    ctx.status = 200
    let queryBody = {
      name: ctx.request.body.name 
    }
    let res = await model.find(queryBody)
    ctx.body = {
      db: 'infos',
      collection: 'person',
      query: ctx.request.body,
      res: res
    }
  })
  .post('/person/insert', async (ctx, next) => {
    ctx.status = 200
    let res = await model.insert(ctx.query)
    ctx.body = {
      db: 'infos',
      collection: 'person',
      query: ctx.query,
      res: res
    }
  })
  .post('/person/update', async (ctx, next) => {
    ctx.status = 200
    let res = await model.updateMany(ctx.query)
    ctx.body = {
      db: 'infos',
      collection: 'person',
      query: ctx.query,
      res: res
    }
  })
  .post('/person/remove', async (ctx, next) => {
    let res = await model.remove(ctx.query)
    ctx.status = 200;
    ctx.body = {
      db: 'infos',
      collection: 'person',
      query: ctx.query,
      res: res
    }
  })


module.exports = router;
export default router;