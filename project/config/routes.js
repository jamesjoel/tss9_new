var express = require("express");
var routes = express.Router();




// var urls = ["/profile"];
// routes.use(urls, function(req, res, next){
//     if(! req.session.is_user_logged_in){
//         res.redirect("/login");
//         return;
//     }
//     next();
// });




routes.use("/", require("../controllers/default"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/profile",backdoor, require("../controllers/profile"));
routes.use("/post", require("../controllers/post"));




function backdoor(req, res, next){
    if(! req.session.is_user_logged_in){
        res.redirect("/login");
        return;
    }
    next();
}

















routes.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/");
});


module.exports=routes;