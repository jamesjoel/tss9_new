var express = require("express");
var app = express();

<<<<<<< HEAD
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
=======
var connect = require("./config/connect");
var database = require("./config/db");


>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
var bodyParser = require("body-parser");

var mongo = require("mongodb");








app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());



app.get("/", function(req, res){
<<<<<<< HEAD
    MongoClient.connect(url, function(err, client){
        if(err){
            console.log("Connection Error", err);
            return;
        }
        var db = client.db("tss9_30");
=======
    connect(function(err, client){

        var db = client.db(database.dbName);
>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
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

        // console.log(req.body);


<<<<<<< HEAD
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
=======
    connect(function(err, client){
        var db = client.db(database.dbName);
>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
        db.collection("student").insert(req.body, function(err, result){
            console.log("data saved");
            res.redirect("/");
        });
    });





});


app.get("/view", function(req, res){
    var id = req.query.id;
    var objid = mongo.ObjectId(id);
<<<<<<< HEAD
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
=======
    connect(function(err, client){
        var db = client.db(database.dbName);
>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
        db.collection("student").find({ _id : objid }).toArray(function(err, result){
            console.log(result);
            res.render("view", { data : result[0] });
        });
    });


});

app.get("/demo/:a/:b/:c/:d", function(req, res){
    console.log(req.params);
    var name = req.params.a;
});









app.get("/delete", function(req, res){
    // console.log(req.query);
    var id = req.query.myid;

    var objid = mongo.ObjectId(id);


<<<<<<< HEAD
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
=======
    connect(function(err, client){
        var db = client.db(database.dbName);
>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
        db.collection("student").remove({ _id : objid }, function(err, result){
            // console.log(result);
            res.redirect("/");
        });
    });



});



app.get("/edit/:id", function(req, res){
    var id = req.params.id;
    var objid= mongo.ObjectId(id);

<<<<<<< HEAD
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
=======
    connect(function(err, client){
        var db = client.db(database.dbName);
>>>>>>> c50086758354662ce946f1a7bed36217a00d3808
        db.collection("student").find({ _id : objid }).toArray(function(err, result){
            console.log(result);
            res.render("edit", { data : result[0] });
        });
    });
});

<<<<<<< HEAD
=======
app.post("/edit", function(req, res){
    var id = req.body.id;
    var objid = mongo.ObjectId(id);
    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("student").update({ _id : objid }, { $set : req.body }, function(err, result){
            res.redirect("/");
        });
    });

});

>>>>>>> c50086758354662ce946f1a7bed36217a00d3808




    




var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});