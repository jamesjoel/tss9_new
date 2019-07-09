var express = require("express");
var app = express();
var routes = require("./config/routes");






app.set("view engine", "ejs");
// sending client side static files
app.use(express.static(__dirname+"/public"));
app.use(routes);

// app.use(function(req, res, next){
//     console.log("TSS");
//     next();
// });





// function demo(req, res, next){
//     console.log("demo calling");
//     next();
// }




var port = process.env.PORT || 3000;
app.listen(port, function(){
    
    console.log("Server Running");
});