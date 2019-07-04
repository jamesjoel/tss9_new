var express = require("express");
// require express module
var app = express();
// calling express constructor

app.set("view engine", "ejs");
// app.set("view engine", ["ejs", "pug"]);
// app.set("views", __dirname+"/views");


app.get("/", function(req, res){
    var a = "rohit";
    var b = "james";
    var c = "gaurav";


    res.render("home", { x : a, y : b, z : c});    
});

app.get("/student", function(req, res){
    var data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "jaya",
            age : 22
        },
        {
            name : "garuav",
            age : 20
        },
        {
            name : "james",
            age : 20
        }
    ];

    res.render("student", { data : data, title : "Student Page" });

});


app.listen(3000, function(){
    console.log("Server Running");
});
// create server with 3000 port