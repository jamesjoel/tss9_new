var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

app.use(bodyParser());
app.use(cors());

app.post("/api/login", function(req, res){
    
});

app.get("/api/user", function(req, res){

});





app.listen(3000, function(){
    console.log("server running");
})