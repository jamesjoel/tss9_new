var express = require("express");
var routes = express.Router();

routes.get("/", function(req,res){
    var pagedata = { title : "About Page", pagename : "about"};
    res.render("layout", pagedata);
});

module.exports=routes;