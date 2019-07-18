var express = require("express");
var app = express();


var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var bodyParser = require("body-parser");
var mongodb = require("mongodb");


app.use(express.static(__dirname+"/public"));


app.set("view engine","ejs");
app.use(bodyParser());

app.get("/",function(req,res){
	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").find().toArray(function(err,result){
			var obj ={data :result}
			res.render("home",obj);

		});
	});
});

app.get("/add",function(req,res){
	res.render("add");
});



app.post("/add",function(req,res){
	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").insert(req.body,function(err,result){
			res.redirect("/");
		});
	});
});

app.get("/delete",function(req,res){
	var id = req.query.id;
	var objid = mongodb.ObjectId(id);

	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").remove({ _id : objid },function(err,result){
			res.redirect("/");
		});
	});
});

app.get("/view",function(req,res){
	var id = req.query.myid;
	var objid = mongodb.ObjectId(id);

	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").find({ _id : objid }).toArray(function(err,result){
			res.render("view",{ data : result[0]});
		});
	});
});

app.get("/edit",function(req,res){
	// console.log(req.query);
	var id = req.query.sid;
	var objid = mongodb.ObjectId(id);
	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").find({ _id : objid}).toArray(function(err,result){
	
			res.render("edit",{data:result[0]});
		});
	});
});


app.post("/edit",function(req,res){

	var id = req.body.sid;

	var objid = mongodb.ObjectId(id);
	MongoClient.connect(url,function(err,client){
		var db = client.db("new1");
		db.collection("new1").update({_id:objid},{$set : req.body},function(err,result){
			console.log(result);
			res.redirect("/");
		});
	});
});

var port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log("server is runing",port);
});