// NPM Package Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Creates the EXPRESS server on port 8000.
var app = express();
var PORT = process.env.PORT || 8000;

// For accessing files in our directory.
var staticContentFolder = __dirname + "/public";
app.use(express.static(staticContentFolder));

// Body Parsing function.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Requiring our various routes (api and html)
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Sets the Express server to listen once server.js is run in node.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});