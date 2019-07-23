var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var mongo = require("mongodb");
var path = require("path");
var changeName = require("../helper/changename");
var posts = require("../models/posts");
var fs = require("fs");

routes.get("/", function(req, res){

    posts.find({userid : req.session.uid}, function(err, result){
        var pagedata = { title : "My Post", pagename : "post", msg : req.flash("msg"), result : result};
        res.render("layout", pagedata);

    });


});

routes.post("/", function(req, res){

    var photo = req.files.photo;
    var newname = changeName(photo.name);

<<<<<<< HEAD
    //console.log(path.resolve()+"/public/post_img");
    photo.mv(path.resolve()+"/public/post_img/"+name, function(){
   
    });
});
=======
    if(photo.mimetype=="image/jpeg" || photo.mimetype=="image/jpg" || photo.mimetype=="image/png" || photo.mimetype=="image/gif")
    {
        if(photo.size <= (1024*1024*1))
        {
           photo.mv(path.resolve()+"/public/post_img/"+newname, function(){
                var sendObj = { 
                        userid : req.session.uid, 
                        title : req.body.title, 
                        image : newname 
                    };

                posts.insert(sendObj, function(err, result){
                    res.redirect("/post");
                });
            });
        }
        else{
            req.flash("msg", 'This File Size is Too Large');
            res.redirect("/post");
        }
    }
    else{
        req.flash("msg", 'This File Type Not Allowed');
        res.redirect("/post");
    }
    

>>>>>>> 265873029e06eaf54ded55f45e12d3dcb64e67cc





    //console.log(path.resolve()+"/public/post_img");
   
});
routes.get("/delete/:id/:image", function(req, res){
    var id = req.params.id;
    var image = req.params.image;
    posts.delete({ _id : mongo.ObjectId(id)}, function(err, result){
        fs.unlink(path.resolve()+"/public/post_img/"+image);
        res.redirect("/post");
    });
});
module.exports=routes;