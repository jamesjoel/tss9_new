var express = require("express");
var routes = express.Router();


routes.use("/getuser", require("../controllers/getuser"));
routes.use("/getcity", require("../controllers/getcity"));

routes.use("/product", require("../controllers/product"));



module.exports = routes;