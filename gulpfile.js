const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function clean() {
  return del('dist/**/*', {force:true});
}

function fonts() {
  return gulp.src('static/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
}

function images() {
  return gulp.src('static/img/**')
    .pipe(gulp.dest('./dist/img'));
}

function html() {
  return gulp.src(['./static/*.html', 'static/**/*.js'])
    .pipe(gulp.dest('./dist'));
}

function statics() {
  return gulp.src('./static/root/*')
    .pipe(gulp.dest('./dist'));

}

function compileScss() {
  return gulp.src('./static/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'));
}

function watchStaticFiles() {
  return gulp.watch(['./static/*.html', './static/fonts/**', './static/img/**', './static/**/*.js'], staticFiles)
}

function watchScss() {
  return gulp.watch('./static/**/*.scss', compileScss);
}

function refreshBrowser() {
  browserSync.init({
    server: {
        baseDir: './dist'
    }
  });
}
const staticFiles = gulp.parallel(statics, html, fonts, images);
const build = gulp.parallel(compileScss, staticFiles);

exports.default = build;
exports.build = build;
exports.dev = gulp.series(build, gulp.parallel(watchScss, watchStaticFiles, refreshBrowser));
exports.clean = clean;
