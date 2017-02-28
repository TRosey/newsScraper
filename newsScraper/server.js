
// Dependencies

/*
Node/Express Server
*/
var express = require("express");
var app = express();
/*
Handlebars setup
*/
var exphbs = require('express-handlebars');
//set handlebars as the default templating engine
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

/*
body parser - provides jsonized form data
*/
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.unlencoded({ extended: true}));
app.use(bodyParser.text());
/*
Allow CORS
*/
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/*
deploying to heroku
*/
app.set('port',(process.env.PORT||3000));

/*
set up the database with our models
*/
var db = require('./models');

//
// var mongoose = require("mongoose");
// // Mongoose mpromise deprecated - use bluebird promises
// var Promise = require("bluebird");
//
// mongoose.Promise = Promise;

// Bring in our Models:  Article and Comments.
var Article = require("./models/Article.js");
var Comments = require("./models/Comments.js");

// Initialize Express

//Make public a static dir
app.use(express.static("public"));

//show any mongoose errors
db.on("error", function(error){
  console.log("Mongoose Error: ",error);
});

//Once logged in to the db through mangoose, log a success
db.once("open", function(){
  console.log("Mongoose connection successful.");
});
