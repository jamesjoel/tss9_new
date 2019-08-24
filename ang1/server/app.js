var express = require("express");
var app = express();
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
// console.log(path.resolve("../"));

app.use(express.static(path.resolve('../dist/ang1/')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });



app.get("/", function(req, res){
    res.sendFile(path.resolve('../dist/ang1/index.html'));
});


app.get("/api/user", function(req, res){
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("student").find().toArray(function(err, result){
            res.json(result);
        });
    });
});


app.listen(3000, function(){
    console.log("Server Running");
});