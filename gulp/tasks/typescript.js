var gulp     = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var config   = require('../config');
var browserSync  = require('browser-sync');

gulp.task('scripts', function() {
  var tsResult = gulp.src(config.typescript.src)
    .pipe(ts({
      declarationFiles: true,
      //noExternalResolve: true,
      //module: 'amd'
    }));

  return merge([
    tsResult.dts.pipe(gulp.dest(config.typescript.destCompiled)),
    tsResult.js.pipe(gulp.dest(config.typescript.dest))
    .pipe(browserSync.reload({stream:true}))
    ]
  );
});
