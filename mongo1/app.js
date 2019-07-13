var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var bodyParser = require("body-parser");








app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());



app.get("/", function(req, res){
    MongoClient.connect(url, function(err, client){
        if(err){
            console.log("Connection Error", err);
            return;
        }
        var db = client.db("tss9_30");
        db.collection("student").find().toArray(function(err, result){
            var obj = { data : result };
            res.render("home", obj);
        });
    });

});

app.get("/add", function(req, res){
    res.render("add");
});

app.post("/add", function(req, res){
    /*var obj = { name : req.body.f_name, 
                age : req.body.s_age,
                city : req.body.mycity
            }*/




    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("student").insert(req.body, function(err, result){
            console.log("data saved");
            res.redirect("/");
        });
    });





});





    




var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});