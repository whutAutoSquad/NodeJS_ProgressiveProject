let model = require('./model.js');

// methods:
// find, create, remove, update

model.find({code: '130130'}, function (err, res) {
  if(err) {
    console.log("error: ", err);
  }else{
    console.log(res)
  }
})