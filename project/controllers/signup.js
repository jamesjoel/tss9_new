var express = require("express");
var routes = express.Router();
var users = require("../models/users");


routes.get("/", function(req, res){
    var pagedata = { title : "Signup Page", pagename : "signup"};
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    users.insert(req.body, function(err, result){
        console.log(result);
        res.redirect("/login");
    });
});


module.exports=routes;