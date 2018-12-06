import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
let router = new Router()

/*
* --------------------- 
* 作者：SimpleCXD 
* 来源：CSDN 
* 原文：https://blog.csdn.net/simple__dream/article/details/80890696 
* 版权声明：本文为博主原创文章，转载请附上博文链接！
*/
router
.post('/uploadfile', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
})
.post('/uploadfiles', async (ctx, next) => {
  // 上传多个文件
  const files = ctx.request.files.file; // 获取上传文件
  for (let file of files) {
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    // 获取上传文件扩展名
    let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  }
 return ctx.body = "上传成功！";
});

module.exports = router;
export default router;