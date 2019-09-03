var express = require("express");
var app = express();
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
console.log(path.resolve("../"));
var bodyParser = require("body-parser");
var mongo = require("mongodb");

// app.use(express.static(path.resolve('../dist/ang1/')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
app.use(bodyParser());

app.get("/product", function(req, res){
    MongoClient.connect(url, function(err, client){
        var db = client.db("product");
        db.collection("product").find().toArray(function(err, result){
            res.json(result);
        });
    });
});
app.post("/product", function(req, res){
    console.log(req.body);
    MongoClient.connect(url, function(err, client){
        var db = client.db("product");
        db.collection("product").insert(req.body, function(err, result){
            res.json(result);
        });
    });
    
});
app.delete("/product", function(req, res){
    var id = req.query.id;
    console.log(id);
    var objid = mongo.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("product");
        db.collection("product").remove({_id : objid}, function(err, result){
            res.json(result);
        });
    });
});

// app.put("/product", function (req, res) {
//     var id = req.query.id;
//     var obj = req.body;
//     delete obj._id;
    
//     MongoClient.connect(url, function(err, client){
//         var db = client.db("product");
//         db.collection("product").update({ _id : mongo.ObjectId(id)}, { $set : obj}, function(err, result){
//             if(err){
//                 console.log("%%%%%%%%%", err);
//                 return;
//             }
//             console.log(result);
//             res.json(result);
//         });
//     });

// })





app.listen(3000, function(){
    console.log("Server Running");
});