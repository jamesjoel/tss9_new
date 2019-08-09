var express = require("express");
var app = express();
var request = require('request');
var user = require("./models/users");
var cities = require("./models/cities");



app.set("view engine", "ejs");

app.get("/", function(req, res){
   
      var p1 = new Promise(function(resolve, reject){
        request('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ac9bcfb91c8045c982baa4dab38bfbf8', { json: true }, function(err, status, body){
            resolve(body);
        }); 
      });




      var p2= new Promise(function(resolve, reject){
        user.find({}, function(err, result){
            resolve(result);
        });
      });


      var p3 = new Promise(function(resolve, reject){
        cities.select(function(err, result){
            resolve(result);
        });
      });


      var promise_arr = [p1, p2, p3];

      Promise.all(promise_arr).then(function(data){
       res.json(data);
      });

});






var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});