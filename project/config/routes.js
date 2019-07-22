var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/default"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));


module.exports = routes;