// Setup server

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 2348;

app.listen(PORT);

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
require('./api/routes.js')(app);