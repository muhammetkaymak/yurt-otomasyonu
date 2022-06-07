const gulp = require("gulp");
const run = require("gulp-run")
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const pug = require("gulp-pug");

const { series,watch, src, dest } = require("gulp");

function htmlTask() {
    return src('./views/*.pug')
    .pipe(pug())
    .pipe(dest('./dist/views/'))
}

function cssTask() {
    return src('./scss/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(postcss([cssnano()]))
    .pipe(dest('./dist'))
}

function watchTask() {
    watch('./views/*.pug', htmlTask)
    watch('./scss/*.scss', cssTask)
}

exports.default = series(
    htmlTask,
    cssTask,
    watchTask,
)