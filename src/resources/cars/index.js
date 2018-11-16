'use strict';

var controller = require('./cars.controller');
var router = require('koa-router')();

router.get('/', controller.index);
module.exports = router.routes();