/*
* 查看
* https://cn.mongoosedoc.top/docs/guide.html
*/
let mongoose = require('mongoose');
let db_config = require('./db_config.js');

// 1. 创建连接
mongoose.connect(
  `mongodb://${db_config.domain}:${db_config.port}/${db_config.db_name.infos}`,
  { useNewUrlParser: true }
);

// 2.确认连接状态,以进行后续处理
// 连接出错
mongoose.connection.on("error", function(err){
    console.error("数据库链接失败:"+ err);
})

// 断开数据库
mongoose.connection.on("disconnected", function(){
    console.log("数据库断开");
})

// 连接成功
mongoose.connection.once('open', function () {
  // 3. 连接成功回掉函数,此函数没有参数.
  console.log(`${db_config.db_name.infos} connected.`);

})

// 导出连接实例
module.exports = mongoose
