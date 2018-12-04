import Router from 'koa-router'
let router = new Router()

router
/**** 查询功能 ****/
    // 获取 event 列表
    .post('/event/list', async(ctx, next) => {
        let queryBody = ctx.getValidatedProps(ctx.request.body)
        console.log('/event/list.queryBody', queryBody)
        ctx.body = await ctx.db.event.find(queryBody)
        ctx.status = 200
    })
    // 通过 _id 获取 单个event 信息
    .post('/event/get', async(ctx, next) => {
        let id = ctx.request.body._id || ctx.request.body.id
        console.log('/event/get.id', id)
        ctx.body = await ctx.db.event.findById(id)
        ctx.status = 200
    })
/**** 新增/插入功能 ****/
    // 插入 数据
    .post('/event/add', async(ctx, next) => {
        let { payload } = ctx.request.body;
        console.log('/event/add.payload', payload)
        // 上传数据,统一用JSON
        let data = JSON.parse(payload);
        ctx.body = await ctx.db.event.create(data)
        ctx.status = 200
    })
/**** 修改/更新 功能 ****/
    // 通过 _id 更新 单个event 信息
    .post('/event/update', async (ctx, next) => {
        let payload = JSON.parse(ctx.request.body.payload);
        console.log('/event/update', payload)
        let id = payload._id || payload.id
        ctx.body = await ctx.db.event.findByIdAndUpdate(id, { $set: payload });
        ctx.status = 200
    })



module.exports = router;
export default router;