/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');

gulp.task('watch', ['setWatch','browserSync'], function() {
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.assets.src, ['assets']);
  gulp.watch(config.index.src, ['index']);
});
