var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var mongo = require("mongodb");
var path = require("path");



routes.get("/", function(req, res){

            var pagedata = { title : "My Post", pagename : "post"};
            res.render("layout", pagedata);




});

routes.post("/", function(req, res){
    var photo = req.files.photo;
    var name = req.files.photo.name;

    //console.log(path.resolve()+"/public/post_img");
    photo.mv(path.resolve()+"/public/post_img/"+name, function(){
   
    });
});




module.exports=routes;