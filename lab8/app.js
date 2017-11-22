/**
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');
var constructorMethod = require('./routes');
var app = express();
var port = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
app.use(express.static(__dirname + '/public')); // Serve js, css, etc
constructorMethod(app);

app.listen(port, function () {
  console.log('Server is listening on port: ' + port);
});