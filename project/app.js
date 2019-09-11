var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var fileUpload = require("express-fileupload");
var http = require("http").createServer(app);
var io = require("socket.io")(http);

var routes = require("./config/routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());

app.use(cache());
app.use(fileUpload());

app.use(function(req, res, next){
    // res.locals.logo = "TSS";
    req.io=io;
    res.locals.session = req.session;
    next();
});

app.get("/api/user", function(req, res){
    console.log(req.session);
});

app.use(routes);


var port = process.env.PORT || 3000;
http.listen(port, function(){
    console.log("Server Running");
});