var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var sha1 = require('sha1');
routes.get("/", function(req, res){
    var pagedata = { title : "Login Page", pagename : "login", msg : req.flash("msg")};
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    users.find({ username : req.body.username }, function(err, result){
        if(result.length==0)
        {
            req.flash("msg", "This Username And Password is Incorrect");
            res.redirect("/login");
        }
        else{
            if(result[0].password == sha1(req.body.password))
            {
                res.redirect("/");
            }
            else{
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/login");
            }
        }
    });


});

module.exports=routes;