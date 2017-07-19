// Setup server

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 2348;

app.listen(PORT);

var path = require('path');

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

// Routes
require('./api/routes.js')(app);