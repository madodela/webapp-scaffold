var gulp = require('gulp');
var config = require('../config').prod;

gulp.task('prod', ['build'], function() {

  gulp.src([config.source + '/**'])
    .pipe(gulp.dest(config.dest));

});
