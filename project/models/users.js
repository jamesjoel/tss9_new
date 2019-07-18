var conn = require("../config/connect");

module.exports.insert=function(obj, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("users").insert(obj, cb);
    });
}

