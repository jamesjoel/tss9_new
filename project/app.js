var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(routes);


var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});