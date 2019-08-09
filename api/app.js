var express= require("express");
var app = express();
var mysql = require("./mysql");
var mongo = require("./mongo");



app.listen(3000, function(){
    console.log("running");
});
var allData = [];
function addCity(obj){
    mysql.findByCity(obj.city, function(err, result){
        obj.areaCity = JSON.parse(JSON.stringify(result));
        allData.push(obj);
    }); 
}

app.get("/", function(req, res){

    mongo.getAll(function(err, result){
        var count=0;
        result.forEach(function(x, index, arr){
            addCity(x);
            count++;
            if(count===arr.length){
                console.log(allData);
            }

        });
        //console.log(result);
    });





    // var p1 = new Promise(function(resolve, reject){
    //     mysql.find(function(err, result){
    //         result = JSON.parse(JSON.stringify(result));
    //         resolve(result);
    //     });
    // });
    // var p2 = new Promise(function(resolve, reject){
    //     mongo.find(function(err, result){
    //         resolve(result);
    //     });
    // });

    // var arr = [p1, p2];
    // Promise.all(arr).then(function(final_data){
    //     res.json(final_data);
    // });










    // mysql.find(function(err, result){
    //     var obj = JSON.parse(JSON.stringify(result));
    //     res.json(obj);
    // });
    //mongo.find(function(err, result){
      //  res.json(result);
    //});


});