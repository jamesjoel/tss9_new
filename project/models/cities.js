var con = require("../config/connectmysql");

module.exports.select=function(cb){
    con.connect(function(err){
        var que = "SELECT * FROM cities";
        con.query(que, cb);
    });
}

// where = "id = 5";
// set = "name = 'rohit', age = 24, city = 'indore'";


module.exports.update=function(where, set, cb){
    con.connect(function(err){
        var que = "UPDATE cities SET "+set+" WHERE "+where;
    });
}
