
const {src, dest} = require('gulp');

// Конфигурация

const path = require("../config/path.js");

// Плагины

const plumber      = require("gulp-plumber");
const notify       = require("gulp-notify");
const sass         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const autoprefixer = require("gulp-autoprefixer");
const webpCss = require("gulp-webp-css");


// Обработка SCSS

const scss = () => {
	return src(path.scss.src, { sourcemaps: true })
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "SCSS",
      message: error.message
    }))
  }))
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(concat("style.min.css"))
  .pipe(webpCss())
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
	.pipe(dest(path.scss.dest, { sourcemaps: true }));
};

module.exports = scss;

