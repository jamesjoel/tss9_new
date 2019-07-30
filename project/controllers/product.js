var express = require("express");
var routes = express.Router();



routes.get("/", function(req, res){
    res.status(200).json({"name":"rohit"});
});


routes.post("/", function(req, res){
    console.log(req.body); //// getting data in req.body
    res.status(200).json({"name":"rohit"});
});

routes.put("/", function(req, res){
    console.log("----body",req.body); // getting data in req.body
    
});
routes.delete("/", function(req, res){
    
    console.log("----query",req.query); // getting data in req.query
    
});




module.exports=routes;