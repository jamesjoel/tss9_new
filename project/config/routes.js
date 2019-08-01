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
routes.use("/citi", require("../controllers/citi"));
routes.use("/profile",backdoor, require("../controllers/profile"));
routes.use("/post", backdoor, require("../controllers/post"));
routes.use("/chat", backdoor, require("../controllers/chat"));


routes.use("/api", require("./api"));


routes.all("*", function(req, res){
    res.send("<h1>The Page Not Found !</h1>");
});



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


module.exports = routes;