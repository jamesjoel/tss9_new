var express = require("express");
var routes = express.Router();
var city = require("../models/cities_mongo");

routes.get("/", function(req, res){
    
    if(req.query.state)
    {
        if(req.query.pages)
        {
            city.findAndLimit({ city_state : req.query.state }, parseInt(req.query.pages), function(err, result){

                res.json(result);
            });
        }
        else{

            city.find({ city_state : req.query.state }, function(err, result){
                res.json(result);
            });
        }
    }
    else{
        res.json(
            {"status":"error",
            "code":"parametersMission",
            "message":"Your API parameter is missing."}
        );
    }

});
module.exports=routes;