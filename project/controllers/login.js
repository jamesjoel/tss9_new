var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var sha1 = require('sha1');
routes.get("/", function(req, res){
    var pagedata = { title : "Login Page", pagename : "login", msg : req.flash("msg"), user : req.flash("user")};
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
                req.session.uid = result[0]._id;
                req.session.full_name = result[0].full_name;
                req.session.is_user_logged_in=true;
                res.redirect("/");
            }
            else{
                req.flash("msg", "This Password is Incorrect");
                req.flash("user", req.body.username);
                res.redirect("/login");
            }
        }
    });
});
module.exports=routes;