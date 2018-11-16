'use strict';

// Set up monk
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/infos');

// Wrap monk in generator goodness
var locations = wrap(db.get('locations'));

// Get list of roots
exports.index = function*(next) {
  this.status = 200;
  this.body = yield locations.find({});
};