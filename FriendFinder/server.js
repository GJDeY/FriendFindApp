var express = require("express");
var exphbs = require("express-handlebars");
//create an instance of express app
var app = express();
var path = require("path");
//set port
var port = process.env.PORT || 8080;
// //sets Handlebars as the default templating engine
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");




//routes
// app.get("/home", function (req, res) {
//     res.render("index", something[0]);
// });

var fs = require("fs"); var http = require("http");
var PORT = 8080;
var server = http.createServer(function (req, res) {
    var route = req.url;

    if (route === "/survey") {
        displayPage("survey.html");
    }

    //default case to display a home page
    else {
        displayPage("home.html");
    }
});
var displayPage = function (page) {
    fs.readFile(__dirname + "/" + page, function (err, html) {

    });
}


//console log to verify connection to a port
server.listen(PORT, function () {
    console.log(`You are currently connected on ❤️ PORT ${PORT}❤️`);
});








//below is most likely correct
var path = require("path");

module.exports = function (app) {

    app.get("/jorge", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/newStudent.html"));
    })

}