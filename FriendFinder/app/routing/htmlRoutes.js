const fs = require("fs");
const http = require("http");

const PORT = 8080;

const server = http.createServer(function (req, res) {
    const route = req.url;

    if (route === "/survey") {
        displayPage("survey.html");
    }

    //default case to display a home page
    else {
        displayPage("home.html");
    }
});

const displayPage = function (page) {
    fs.readFile(__dirname + "/" + page, function (err, html) {

    });
}
//console log to verify connection to a port
server.listen(PORT, function () {
    console.log(`You are currently connected on ${PORT}`);
});








//below is most likely correct
var path = require("path");

module.exports = function (app) {

    app.get("/jorge", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/newStudent.html"));
    })

}