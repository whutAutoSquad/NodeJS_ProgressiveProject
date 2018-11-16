'use strict';


// Get list of roots
exports.index = function*(next) {
	this.status = 200;
  this.body = { 
  	name : 'tl', 
  	info : 'tl-doc'
  };
};