const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function compileScss() {
  return gulp.src("static/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest('static/styles'));
}

function watchScss() {
  return gulp.watch("static/**/*.scss", compileScss);
}

function refreshBrowser() {
  browserSync.init({
    server: {
        baseDir: "./static"
    }
  });
}

const build = compileScss;

exports.default = build;
exports.build = build;
exports.dev = gulp.series(build, gulp.parallel(watchScss, refreshBrowser));
