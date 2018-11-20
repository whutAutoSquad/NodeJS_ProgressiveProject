import Router from 'koa-router'
let router = new Router()

import model from '../../db/static_infos.race_infos.js'

router
  .get('/race/:id', async (ctx, next) => {
    ctx.status = 200
    let res = await model.find({ code: ctx.params.id })
    console.log(res)
    ctx.body = {
      db: 'static_infos',
      collection: 'race_infos',
      code: ctx.params.id,
      res: res
    }
  })


module.exports = router;
export default router;