var express = require("express");
var app = express();
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongo = require("mongodb");
var bodyParser = require("body-parser");
app.use(express.static(path.resolve('../dist/ang1/')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/", function(req, res){
//     res.sendFile(path.resolve('../dist/ang1/index.html'));
// });


app.get("/api/product", function(req, res){
   
    var where={};
    if(req.query.id){
        var where = {_id:mongo.ObjectId(req.query.id)};
    }
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("product").find(where).toArray(function(err, result){
            res.json(result);
        });
    });
});

app.delete("/api/product", function(req, res){
    var id = req.query.id;
    var objid = mongo.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("product").remove({_id : objid}, function(err, result){
            res.json(result);
        });
    });
});
app.put("/api/product", function (req, res) {
    var id = req.query.id;
    var obj = req.body;
    delete obj._id;
    
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("product").update({ _id : mongo.ObjectId(id)}, { $set : obj}, function(err, result){
            if(err){
                console.log("%%%%%%%%%", err);
                return;
            }
            console.log(result);
            res.json(result);
        });
    });

})

app.post("/api/product", function(req, res){
    
    
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("product").insert(req.body, function(err, result){
            console.log(result);
            res.json(result.ops[0]);
        });
    });
    
});


app.listen(3000, function(){
    console.log("Server Running");
});