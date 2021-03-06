'use strict';

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('clean', function() {
  del('dist');
});

gulp.task('build', ['clean'], function() {
  gulp.src(['./public/js/*.js', './public/js/controllers/*.js'])
  .pipe(concat('bundle.js'))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('./public/dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['./public/js/*.js', './public/js/controllers/*.js'], ['build']);
});

gulp.task('default', ['watch']);
