var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";







app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));


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




var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});