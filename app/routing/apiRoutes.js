// NPM package and file dependencies
var path = require("path");
var friendData = require("../data/friends.js");


// Our GET and POST routes for the api Routes.
module.exports = function(app){

		
		app.get('/api/friends', function (req, res){
			res.json(friendData);
		});

		
		app.post('/api/friends', function(req, res){
			friendData.push(req.body);
			res.json(true);
		

	});
};