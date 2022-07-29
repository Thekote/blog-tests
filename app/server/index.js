const express = require("express");
const cors = require("cors");
const routes = require("../routes/index.js");

const server = express();

server.use(cors());
routes(server);

module.exports = server;
