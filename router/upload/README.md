## 测试记录 ##
此文件用于保存试验过的操作和结果

### 使用postman,上传文件 ###
#### postman设置 ####
参考 [postman中 form-data、x-www-form-urlencoded、raw、binary操作](https://blog.csdn.net/leyangjun/article/details/79221765)
具体配置: 
+ Method: POST
+ url: localhost:9001/upload
+ Body.form-data:
  - key = com, value = ponent1
  - key = file, value = **选择文件**

#### koa配置 ####
参考: 
1. [koa2下使用koa-multer上传文件](https://www.jianshu.com/p/f9062b969a6e) 
2. [node koa2图片上传的实现](https://blog.csdn.net/ziwoods/article/details/72822730) 

查看文件: **router/upload**
版本: **commit 038c3fb6b3b6654bca03726ed41e1def0b969d7a**

#### ctx.req ####
```
IncomingMessage: {
  ...
  headers: {
    'cache-control': 'no-cache',
    'postman-token': 'b035365a-7264-4aac-962d-4228518a2354',
    'user-agent': 'PostmanRuntime/7.4.0',
    accept: '*/*',
    host: 'localhost:9001',
    'accept-encoding': 'gzip, deflate',
    'content-type': 'multipart/form-data; boundary=--------------------------779056175620532461544051',
    'content-length': '6552',
    connection: 'keep-alive'
  },
  ...
  url: '/upload',
  method: 'POST',
  statusCode: null,
  statusMessage: null,
  ...
  body: {
    com: 'ponent1'
  },
  file: {
    fieldname: 'file',
    originalname: 'test.xlsx',
    encoding: '7bit',
    mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    destination: 'uploads/',
    filename: '1544150142990.xlsx',
    path: 'uploads\\1544150142990.xlsx',
    size: 6181
  },
  ...
}
```
可以比对,得出信息: 

+ 取文件信息(ctx.req.file)
  - fieldname: 指postman中,写在 Body.form-data.{file_column}.key处 的字段. 猜测,也是 formData.append() 中的第三个参数.
  - originalname: 原文件名
  - destination: 保存位置, 指 server.js 所在目录下的 uploads/
  - filename: 保存时的文件名
  - path: 路径/文件名
  - size 文件大小
+ 取附属参数信息(ctx.req.body)
  - keys: Body.form-data.{not_file_column}.key
  - values: Body.form-data.{not_file_column}.value