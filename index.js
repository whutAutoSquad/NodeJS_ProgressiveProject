/**
 * Main application file
 */
// 导入koa主文件
import Koa from 'koa'
const app = new Koa();

// 导入设置
import config from './config/environment'
import setConfig from './config/koa'
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
setConfig(app);

// 导入全局设置文件( 即 绑定在 app.context 上的函数和变量 )
import globalConfig from './utils/global.js'
globalConfig(app);

// 导入数据库配置
// 绑定关系: ctx.context.db[collection_name] = collection_model;
import wrapDB from './db';
wrapDB(app);

// 导入 cors,解决跨域问题
import cors from 'koa2-cors'
app.use(cors());

// 解析 post 请求的body,使用 ctx.request.body 获取
// 在查询时,不能直接将 ctx.request.body 传入 model.func( ... ),应该类似这样使用 model.func({name: ctx.request.body.name})
import bodyParser from 'koa-bodyparser'
app.use(bodyParser());


// 导入路由,路由会自动将 router 下的文件都引入进来
import setRouter from './router'
setRouter(app);

// 官方错误处理
// 避免了为每个请求都嵌套一层错误处理,但是这里没有将错误进行分类
// 所以在应用规模扩大时,一定要注意补上
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Koa server listening on %d, in %s mode', config.port, config.env);
});

// Expose app
export default app;