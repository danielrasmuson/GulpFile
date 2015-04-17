var gulp = require('gulp');
var config = require('../config').firebase;
var Firebase = require('firebase');
var dataRef = new Firebase(config.url);
var databasePath = config.databasePath;
var fs = require('fs');

function writeDataToFile(filePath, data){
    var fileData = "module.exports = "+data+";";
    fs.writeFile(filePath, fileData, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Firebase Pull Success!");
        }
        process.exit(code=0);
    }); 
}

gulp.task('firebase-pull', function() {
   dataRef.on("value", function(snapshot) {
     writeDataToFile(databasePath+'.js', JSON.stringify(snapshot.val()));
   });
});