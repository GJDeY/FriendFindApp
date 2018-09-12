//require 2 pkgs that will be needed
var bodyParser = require('body-parser');
var path = require('path');
//making the friends.js path a var
var friends = require('../data/friends.js');


module.exports = function (app) {

    //gets input from API in the form of an object
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });



    //making a POST
    app.post(//'api route', function(req,res))

//});