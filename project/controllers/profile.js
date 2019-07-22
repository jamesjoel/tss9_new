var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var mongo = require("mongodb");



routes.get("/", function(req, res){
    var where = { _id : mongo.ObjectId(req.session.uid)};
    users.find(where, function(err, result){
            var pagedata = { title : "Profile", pagename : "profile", result : result[0]};
            res.render("layout", pagedata);

    });


});




module.exports=routes;