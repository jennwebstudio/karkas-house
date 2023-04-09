
const {src, dest} = require('gulp');

// Конфигурация

const path = require("../config/path.js");

// Плагины

const concat = require("gulp-concat");
const babel  = require("gulp-babel");
const uglify  = require("gulp-uglify");



// Обработка JS

const js = () => {
	return src([
    path.js.src
  ])
  .pipe(concat("main.min.js"))
  .pipe(babel())
  .pipe(uglify())
	.pipe(dest(path.js.dest));
};

module.exports = js;

