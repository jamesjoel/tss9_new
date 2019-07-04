var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));



app.get('/', function(req, res){
    

    var pageobj = { title : "Home Page", pagename : "index" }

    res.render("layout", pageobj);
});


app.get('/about', function(req, res){
    var pageobj = { title : "About Page", pagename : "about" }
    res.render("layout", pageobj);
});

app.get('/contact', function(req, res){
    var pageobj = { title : "Contact Page", pagename : "contact" }
    res.render("layout", pageobj);
});

app.get('/help', function(req, res){
    var pageobj = { title : "Help Page", pagename : "help" }
    res.render("layout", pageobj);
});

var port = process.env.PORT || 3000;



app.listen(port, function(){
    console.log("hello"); 
    console.log("Server Running");
});