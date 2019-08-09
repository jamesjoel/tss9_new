var mysql = require("mysql");
var con =mysql.createConnection({
    hostname : "localhost",
    user : "admin",
    password : "admin",
    database : "tss12_30"
});
module.exports.find=function(cb){
    con.connect(function(err){
    con.query("SELECT * FROM city", cb);
});
}
module.exports.findByCity = function(city, cb){
    con.connect(function(err){
        con.query("SELECT * FROM area WHERE city_name = '"+city+"'", cb);
    });
}
