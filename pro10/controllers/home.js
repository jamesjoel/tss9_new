var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
    var pagedata = { title : "Home", pagename : "home"};
    res.render("layout", pagedata);
});



module.exports=routes;