var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var arr={};
routes.get("/", function(req, res){
    var io = req.io;
    
    
    io.on("connection", function(socket){
        
        arr[req.session.full_name]=socket.id;
        console.log(arr);
        io.emit("onlineUser", arr);    
    });


    var pagedata = { title : "Chat Page", pagename : "chat"};
    res.render("layout", pagedata);
});


module.exports=routes;