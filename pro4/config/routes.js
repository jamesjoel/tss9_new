var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));





module.exports=routes;