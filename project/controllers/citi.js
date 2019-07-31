var express = require("express");
var routes = express.Router();
var cities = require("../models/cities");



routes.get("/", function(req, res){
    cities.select(function(err, result){
        var data = JSON.parse(JSON.stringify(result));
        var pagedata = { title : "City Page", pagename : "citi", data : data};
        res.render("layout", pagedata);
    });

});

module.exports=routes;