var express = require("express");
var app = express();
var request = require('request');


app.set("view engine", "ejs");

app.get("/", function(req, res){
    request('http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ac9bcfb91c8045c982baa4dab38bfbf8', { json: true }, function(err, status, body){

        // console.log("-------",body.articles);

        



        res.render("demo", { news : body.articles });
  
    });




});






var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});