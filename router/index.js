/* Main application routes */
const path = require('path');
const fs = require('fs');

export default function(app) {
  fs.readdir( __dirname, function (err, files) {
   if (err) {
     return console.log("Cannot include router automatically.", err);
   }
   files.forEach(function (filename) {
     if (!/.js$/.test(filename)){
      let tmp = require('./' + filename);

      app.use(tmp.routes());
      app.use(tmp.allowedMethods());
     }
   });
  });
};
