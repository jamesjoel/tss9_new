var express = require("express");
var routes = express.Router();
var users = require("../models/users");

routes.get("/", function(req, res){
    users.find({}, function(err, result){
        res.json(result);
    });
});
module.exports=routes;