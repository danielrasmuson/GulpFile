var config   = require('../config');

var gulp = require('gulp');
var bowerSrc = require('gulp-bower-src');
 
gulp.task('bower', function () {
    bowerSrc()
        .pipe(gulp.dest(config.typescript.dest));
});