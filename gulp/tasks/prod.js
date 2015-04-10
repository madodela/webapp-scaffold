var gulp = require('gulp');
var config = require('../config').prod;
var rename = require("gulp-rename");
var removeFiles = require('gulp-remove-files');

gulp.task('prod', ['build'], function() {

  gulp.src([config.source + '/**'])
    .pipe(gulp.dest(config.dest));

});
