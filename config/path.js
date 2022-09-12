const pathSrc = "./src";
const pathDest = "./dist";

module.exports = {

  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  scss: {
    src: pathSrc + "/scss/*.{sass,scss}",
    watch: pathSrc + "/scss/**/*.{sass,scss}",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/images/**/*.{jpg,png,jpeg,gif,svg}",
    watch: pathSrc + "/images/**/*.{jpg,png,jpeg,gif,svg}",
    dest: pathDest + "/images"
  },

  font: {
    src: pathSrc + "/fonts/*.{otf,ttf,eot,ttc,otc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{otf,ttf,eot,ttc,otc,woff,woff2,svg}",
    dest: pathDest + "/fonts"
  }
}