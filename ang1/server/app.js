var express = require("express");
var app = express();
var path = require('path');

// console.log(path.resolve("../"));

app.use(express.static(path.resolve('../dist/ang1/')));


app.get("/", function(req, res){
    res.sendFile(path.resolve('../dist/ang1/index.html'));
});


app.listen(3000, function(){
    console.log("Server Running");
});