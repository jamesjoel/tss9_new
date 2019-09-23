var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

var fileupload = require("express-fileupload");
var path = require("path");


app.use(bodyParser());
app.use(cors());
app.use(fileupload());


app.use(express.static(__dirname+"/public"));

app.post("/api/login", function(req, res){
    // console.log(req.body);
    if(req.body.email=="rohit@gmail.com"){
        if(req.body.password=="11"){
            var payload = { id : 5};
            var token = jwt.sign(payload, "jamesjoel");
            res.status(200).send({token});
        }else{

            res.status(401).send("2");
        }
    }else{
        res.status(401).send("1");
    }
});

app.get("/api/user/getuser", verifyToken, function(req, res){
    var data=[
        {
            name : "rohit",
            age : 25
        },
        {
            name : "james",
            age : 26
        }
    ];
    res.send(data);
});

app.post("/api/fileupload", verifyToken, function(req, res){
    // console.log("----------", req.files);
    // var mypath = path.resolve("") + "/public/image" + req.files.myfile.name;
    req.files.myfile.mv(path.resolve("")+"/public/image/"+req.files.myfile.name, function(err){
        // console.log("file upload success");
        res.send({ fileurl : "http://localhost:3000/image/"+req.files.myfile.name});
    });
});

app.get("/check", function(req, res){
    res.sendFile(__dirname+"/home.html");
});

function verifyToken(req, res, next){
    // console.log(req.headers);
    if(! req.headers.authorization){
        return res.status(401).send("Unauthorized User");
    }else{
        if(req.headers.authorization == ""){
            return res.status(401).send("Unauthorized User");

        }else{
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "jamesjoel");
            if(! payload){
                return res.status(401).send("Unauthorized User");
            }
        }
    }
    // console.log(payload);
    req.userid = payload.id;
    next();
    
}





app.listen(3000, function(){
    console.log("server running");
})

//Azhar Khan