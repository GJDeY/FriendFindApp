var express = require("express");
var exphbs = require("express-handlebars");
//create an instance of express app
var app = express();

//set port
var port = preocess.env.PORT || 8080;
//sets Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




//routes
app.get("/home", function (req, res) {
    res.render("index", something[0]);
});