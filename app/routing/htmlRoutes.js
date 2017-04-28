// NPM package dependencies
var path = require("path");


// GET and POST functions for your html routes.
module.exports = function(app){

	app.get('/survey',function(req,res){
		res.sendFile(path.join(__dirname+'/../public/survey.html'))
	});

	app.use(function(req,res){
		res.sendFile(path.join(__dirname+'/../public/home.html'))
	});

}