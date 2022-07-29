const { json } = require("express");

const posts = require("./post.js");

module.exports = (app) => {
  app.use(json());
};
