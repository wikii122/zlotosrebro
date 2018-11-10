const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function compileScss(cb) {
  return gulp.src("static/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest('static/styles'));
}

function serve(cb) {
  cb();
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
exports.dev= gulp.series(build, refreshBrowser);
