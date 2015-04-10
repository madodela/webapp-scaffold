/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.assets.src, ['assets']);
  gulp.watch(config.index.src, ['index']);
  gulp.watch(config.templates.src, ['templates']);
});
