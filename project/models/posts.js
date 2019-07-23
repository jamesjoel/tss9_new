var conn = require("../config/connect");

module.exports.insert=function(obj, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("posts").insert(obj, cb);
    });
}
module.exports.find=function(where, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("posts").find(where).toArray(cb);
    });
}
module.exports.delete = function(where, cb){
    conn(function(err, client){
        var db = client.db("tss9_30");
        db.collection("posts").remove(where, cb);
    });
}