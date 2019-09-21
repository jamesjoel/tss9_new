var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

app.use(bodyParser());
app.use(cors());

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


function verifyToken(req, res, next){
    console.log(req.headers);
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