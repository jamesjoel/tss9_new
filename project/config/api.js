var express = require("express");
var routes = express.Router();


routes.use("/getuser", require("../controllers/getuser"));



module.exports = routes;