const multer = require('koa-multer');//加载koa-multer模块
import Router from 'koa-router'
let router = new Router()

//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });

//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  console.log("ctx.req: =======================================================================");
  console.log(ctx.req);
  console.log("endof ctx.req ==================================================================");
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
  ctx.status = 200
})

module.exports = router;
export default router;