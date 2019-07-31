var conn = require("../config/connect");

module.exports.find=function(where, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("cities").find(where).toArray(cb);
    });
}

module.exports.findAndLimit=function(where, limit, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("cities").find(where).limit(limit).toArray(cb);
    });
}

