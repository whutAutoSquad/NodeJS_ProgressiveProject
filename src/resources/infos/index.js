'use strict';

var controller = require('./infos.controller');
var router = require('koa-router')();

router.get('/', controller.index);
module.exports = router.routes();