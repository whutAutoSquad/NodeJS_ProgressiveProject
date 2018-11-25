/**
 * Main application file
 */

import config from './config/environment'
import Koa from 'koa'
import cors from 'koa2-cors'

// 解析 post 请求的body，使用 ctx.request.body 获取
// 在查询时，不能直接将 ctx.request.body 传入 model.func( ... ),应该类似这样使用 model.func({name: ctx.request.body.name})
import bodyParser from 'koa-bodyparser'

// 导入设置
import setConfig from './config/koa'

//导入路由，路由会自动将 router 下的文件都引入进来
import setRouter from './router'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = new Koa();
app.use(cors());
app.use(bodyParser());
setConfig(app);
setRouter(app);

// Start server
// if (!module.parent) {
  app.listen(config.port, config.ip, function () {
    console.log('Koa server listening on %d, in %s mode', config.port, config.env);
  });
// }

// Expose app
export default app;