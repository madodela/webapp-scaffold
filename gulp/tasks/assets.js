var gulp       = require('gulp');
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').assets;

gulp.task('assets', function() {
  return gulp.src([config.src])
    .pipe(changed(config.temp)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.temp));
});
