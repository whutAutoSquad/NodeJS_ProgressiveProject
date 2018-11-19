let mongoose = require('./connect.js');
let db_config = require('./db_config.js');

// 4. 创建Schema(数据模板),在mongoose中,一切都始于Schema
let testSchema = mongoose.Schema({
  code: String,
  addr: String
});

// 为schema添加方法
// 译者注：注意了， method 是给 document 用的
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
testSchema.methods.log = function () {
  let str = `code:${this.code}, addr:${this.addr}`;
  console.log(str)
}

// 5. 创建一个 model, 参数( model名, Schema )
let test = mongoose.model('test', testSchema, db_config.collection.infos.test);

module.exports = test;