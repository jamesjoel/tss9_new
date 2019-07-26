var express = require("express");
var app = express(); // constructor calling

app.get('/hello', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
  });


app.get("/", function(req, res){
    console.log("this is root calling");

   res.sendFile(__dirname+"/home.html");


});


app.get("/contact", function(req, res){
    console.log("this is home calling");
    res.sendFile(__dirname+"/abc.html");
});

app.get("/about", function(req, res){
    console.log("this is about calling ------");
    res.sendFile(__dirname+"/about.html");
});





app.listen(3000, function(){

    // console.log(__dirname);
    console.log("Server Running");
});

