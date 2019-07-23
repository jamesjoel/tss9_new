var random = require("random-string");
module.exports=function(filename){

    var r_string = random({length : 20});
    var arr = filename.split(".");
    var n = arr.length;
    var ext = arr[n-1];

    return r_string+"."+ext;
}