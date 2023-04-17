// Import the required packages
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Define the task to build the CSS
gulp.task('build-css', function () {
  return gulp.src('style.css')
    .pipe(postcss([
      tailwindcss(),
      autoprefixer(),
    ]))
    .pipe(gulp.dest('dist/'));
});

// Define the task to watch for changes and rebuild the CSS
gulp.task('watch-css', function () {
  gulp.watch('*.css', gulp.series('build-css'));
});

// Define the default task
gulp.task('default', gulp.series('build-css', 'watch-css'));
