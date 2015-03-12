var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
  return gulp.src('tests/unit/**/*.spec.js')
    .pipe(mocha({reporter: 'nyan'}));
});
