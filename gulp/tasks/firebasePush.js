var gulp = require('gulp');
var config = require('../config').firebase;
var Firebase = require('firebase');
var dataRef = new Firebase(config.url);
var newDatabaseData = require('../../'+config.databasePath);

gulp.task('firebase-push', function() {
  dataRef.set(newDatabaseData, function(){
    // once you've set the data quit
    process.exit(code=0)
  });
});