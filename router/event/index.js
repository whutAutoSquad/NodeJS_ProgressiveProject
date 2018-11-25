import Router from 'koa-router'
let router = new Router()

import model from '../../db/infos.event.js'

router
  .post('/event/list', async (ctx, next) => {
    ctx.status = 200
    let {type, date, locate, detail, person} = ctx.request.body;
    console.log(ctx.request.body);
    let queryBody = {
      type,
      date,
      locate,
      detail,
      person,
    }
    console.log(queryBody)
    let res = await model.find(ctx.request.body)
    ctx.body = {
      db: 'infos',
      collection: 'event',
      query: ctx.request.body,
      res: res
    }
  })


module.exports = router;
export default router;