var express = require("express");
var app = express();
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var cors = require("cors");
var jwt = require("jsonwebtoken");


app.use(cors({
    origin: [
        "http://localhost:4200"
    ], credentials: true
}));


function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'TSS')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.user;
    next();
}





// app.use(express.static(path.resolve('../dist/ang1/')));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "TSS"}));



// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(path.resolve('../dist/ang1/index.html'));
});


app.get("/api/user/backdoor", function(req, res){
    console.log(req.session);
    if(req.session.user){
        res.json({status : 200, user : req.session.user});
    }
    else{
        res.json({status: 400});
    }
});


// app.post("/api/user/login", function(req, res){
   
//     MongoClient.connect(url, function(err, client){
//         var db = client.db("tss9_30");
//         db.collection("user").find({email : req.body.email}).toArray(function(err, result){
//             if(result.length<=0){
         
//                 res.json({status : 100});
//             }
//             else{
//                 if(result[0].password == req.body.password){
//                     // console.log(result[0]);
//                     req.session.user={};
//                     req.session.user.id = result[0]._id;
//                     req.session.user.name = result[0].name;
//                     req.session.user.is_user_logged_in = true;
                                     
//                     res.json({status : 200});
                    
//                 }else{
                    
//                     res.json({status : 300});
//                 }
//             }
//         });
//     });
// });


app.post('/api/user/login', (req, res) => {
    let userData = req.body;
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss9_30");
        db.collection("user").find({ email: req.body.email }).toArray(function(err, result){
            if(result.length<=0){
                res.status(401).send('Invalid Email');
            }else{
                if(result[0].password !==req.body.password){
                    
                    res.status(401).send('Invalid Password');
                }else{
                    var userObj = { user : result[0]._id };
                    let token = jwt.sign(userObj, 'TSS')
                    res.status(200).send({ token });
                }

            }
        });
    });



    // User.findOne({ email: userData.email }, (err, user) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         if (!user) {
    //             res.status(401).send('Invalid Email')
    //         } else
    //             if (user.password !== userData.password) {
    //                 res.status(401).send('Invalid Password')
    //             } else {
    //                 let payload = { subject: user._id }
    //                 let token = jwt.sign(payload, 'secretKey')
    //                 res.status(200).send({ token })
    //             }
    //     }
    // })
})




app.get("/api/user", verifyToken, function (req, res) {

    var where = {};
    if (req.query.id) {
        var where = { _id: mongo.ObjectId(req.query.id) };
    }
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").find(where).toArray(function (err, result) {
            res.json(result);
        });
    });
});
app.delete("/api/user", function (req, res) {
    var id = req.query.id;
    var objid = mongo.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").remove({ _id: objid }, function (err, result) {
            res.json(result);
        });
    });
});
app.put("/api/user", function (req, res) {
    var id = req.query.id;
    var obj = req.body;
    delete obj._id;

    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").update({ _id: mongo.ObjectId(id) }, { $set: obj }, function (err, result) {
            if (err) {
                console.log("%%%%%%%%%", err);
                return;
            }
            console.log(result);
            res.json(result);
        });
    });

})
app.post("/api/user", function (req, res) {


    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss9_30");
        db.collection("student").insert(req.body, function (err, result) {
            res.json(result);
        });
    });

});


app.listen(3000, function () {
    console.log("Server Running");
});