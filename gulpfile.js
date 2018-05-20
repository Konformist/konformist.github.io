'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let autoprefixer = require('gulp-autoprefixer');
let sass = require('gulp-sass');

gulp.task('default', [
  'build-js',
  'build-css',
  'copy-img',
  'copy-fonts'
]);

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['build-js']);
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
});

gulp.task('build-js', () => {
  gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: 'env',
      plugins: 'transform-es2015-modules-amd'
    }))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('build-css', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions']
    }))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('copy-img', () => {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./public/images'))
});

gulp.task('copy-fonts', () => {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./public/fonts'))
});