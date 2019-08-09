var express = require("express");
var routes = express.Router();
var users = require("../models/users");
var arr={};
routes.get("/", function(req, res){
    var io = req.io;
    var check = true;
    
    io.on("connection", function(socket){
        if(check){
         arr[req.session.full_name]=socket.id;
         check=false;
        }
        
       io.emit("onlineUser", arr);    

        
       socket.on("sendMsg", function(obj){
          var send_obj = { 
                sender_name : req.session.full_name,
                rec_name : obj.name,
                msg : obj.msg
            };
            socket.to(obj.id).emit("sendFormServer", send_obj);
        });
    });


    var pagedata = { title : "Chat Page", pagename : "chat"};
    res.render("layout", pagedata);
});


module.exports=routes;