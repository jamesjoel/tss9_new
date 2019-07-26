
var p1 = Promise.resolve("hello");


var p2 = Promise.resolve("indore");

var arr = [p1, p2];

Promise.all(arr).then(function(data){
    console.log(data);
});