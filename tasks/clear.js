
const del = require('del');

// Конфигурация

const path = require("../config/path.js");

// Удаление конечной директории

const clear = () => {
  return del(path.root);
};

module.exports = clear;