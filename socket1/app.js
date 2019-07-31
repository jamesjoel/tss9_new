var express = require("express");
var app = express();

var http = require("http").createServer(app);
var io = require("socket.io")(http);


io.on("connection", function(socket){
    /*console.log("new user connected", socket.id);
    socket.on("disconnect", function(){
        console.log("user is disconnected ...");
    });*/
    socket.on("send", function(obj){
        
        io.emit("sendFromServer", obj);
    });


});




app.get("/", function(req, res){

    res.sendFile(__dirname+"/index.html");
});

http.listen(3000, function(){
    console.log("server running");
});