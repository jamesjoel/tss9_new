var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var sha1 = require("sha1");

routes.get("/", function(req, res){
    /*console.log(req.flash("data").length);
    if(req.flash("data").length==0){
        var tmp = { full_name : "", username : "", password : ""};
        req.flash("data", tmp);
    }*/

    var pagedata = { title : "Signup Page", pagename : "signup", msg : req.flash("msg")};
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    users.find({ username : req.body.username }, function(err, result){
        if(result.length==0)
        {
            
            req.body.password = sha1(req.body.password);

            users.insert(req.body, function(err, result){
                console.log(result);
                res.redirect("/login");
            });
        }
        else{
            req.flash("msg", "This Username Already Registered");
            // req.flash("data", req.body);
            
            res.redirect("/signup");
        }
    });


    
});


module.exports=routes;