var MongoClient = require("mongodb").MongoClient;
var config = require("./config");
module.exports=function(cb){
    MongoClient.connect(config.url, cb);
}