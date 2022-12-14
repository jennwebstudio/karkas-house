
const {src, dest} = require('gulp');

// Конфигурация

const path = require("../config/path.js");

// Плагины

const plumber      = require("gulp-plumber");
const notify       = require("gulp-notify");
const newer        = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Обработка fonts

const font = () => {
	return src(path.font.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "FONT",
      message: error.message
    }))
  }))
  .pipe(newer(path.font.dest))
  .pipe(fonter({
    formats: ["ttf", "woff", "eot", "svg"]
  }))
	.pipe(dest(path.font.dest))
  .pipe(ttf2woff2())
  .pipe(dest(path.font.dest));
};

module.exports = font;

