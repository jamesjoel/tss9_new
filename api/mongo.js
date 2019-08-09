var MongoClient = require("mongodb").MongoClient;

module.exports.find=function(cb){
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
    var db = client.db("tss9_30");
    db.collection("student").aggregate(
        [
            {
                $lookup : {
                    from : "area",
                    localField : "city",
                    foreignField : "city_name",
                    as : "all_area"
                }
            }
        ]
    ).toArray(cb);
    });
}
module.exports.getAll=function(cb){
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
    var db = client.db("tss9_30");
    db.collection("student").find({}).toArray(cb);
    });
}