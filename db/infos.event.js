let path = require('path');
let db_config = require('./config.js');
let mongooseFunc = require('./connect.js');

// path.win32.basename 统一返回的是 不含路径的文件名, 然后去除 .js 后缀.
let basename = path.win32.basename(__filename, '.js');
let [got_db_name, got_collection_name] = basename.split('.');

// 从 config.js 中提取 db_name 和 collection_name
let db_name = db_config.db_name[got_db_name];
let collection_name = db_config.collection[got_db_name][got_collection_name];

// 获取连接到 db_name 的mongoose 实例
let mongoose = mongooseFunc(db_name);

/********************************* 以上为配置 mongoose 实例, 以下为配置 schema 和 model **********************************/

// 创建Schema(数据模板),在mongoose中,一切都始于Schema
let schema = mongoose.Schema({
  type: String,
  date: String,
  locate: String,
  detail: String,
  person: String,
});

// 为schema添加方法
// 译者注：注意了， method 是给 document 用的
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
schema.methods.log = function () {
  console.log(this)
}

// 5. 创建一个 model, 参数( model名, Schema, collection )
// let test = mongoose.model('test', schema, db_config.collection.infos.test);
let model = mongoose.model(collection_name, schema, collection_name);
console.log('generate model: ', db_name, collection_name);

module.exports = model;
export default model;