var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;
var modRewrite = require('connect-modrewrite');


gulp.task('browserSync', ['build'], function() {

  config.server.middleware = [
    modRewrite([
      '!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]'
    ]),
  ];

  browserSync(config);
});
