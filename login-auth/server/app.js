var express = require("express");
var app = express();
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");



app.use(express.static(path.resolve('../dist/ang1/')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser());
app.use(session({secret : "TSS"}));
// app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(path.resolve('../dist/ang1/index.html'));
});


app.get("/api/user/backdoor", function(req, res){
    console.log(req.session);
    if(req.session.user){
        res.json(req.session.user);
    }
    else{
        res.json(false);
    }
});

app.post("/api/user/login", function(req, res){
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("user").find({email : req.body.email}).toArray(function(err, result){
            if(result.length<=0){
         
                res.json({status : 100});
            }
            else{
                if(result[0].password == req.body.password){
                    // console.log(result[0]);
                    req.session.user={};
                    req.session.user._id = result[0]._id;
                    req.session.user.name = result[0].name;
                    req.session.user.is_user_logged_in = true;
                    console.log(req.session);
                    res.json({status : 200});
                    
                }else{
                    
                    res.json({status : 300});
                }
            }
        });
    });
});

app.get("/api/user/backdoor", )


app.get("/api/user", function (req, res) {

    var where = {};
    if (req.query.id) {
        var where = { _id: mongo.ObjectId(req.query.id) };
    }
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").find(where).toArray(function (err, result) {
            res.json(result);
        });
    });
});
app.delete("/api/user", function (req, res) {
    var id = req.query.id;
    var objid = mongo.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").remove({ _id: objid }, function (err, result) {
            res.json(result);
        });
    });
});
app.put("/api/user", function (req, res) {
    var id = req.query.id;
    var obj = req.body;
    delete obj._id;

    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").update({ _id: mongo.ObjectId(id) }, { $set: obj }, function (err, result) {
            if (err) {
                console.log("%%%%%%%%%", err);
                return;
            }
            console.log(result);
            res.json(result);
        });
    });

})
app.post("/api/user", function (req, res) {


    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").insert(req.body, function (err, result) {
            res.json(result);
        });
    });

});


app.listen(3000, function () {
    console.log("Server Running");
});