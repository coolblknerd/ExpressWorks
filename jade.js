// JADE
// Exercise 3 of 8
//
// Create an Express.js app with a home page rendered by Jade template engine.
//
// The homepage should respond to /home.
//
// The view should show the current date using toDateString.

// ----------------------

const express = require('express'),
    path = require('path');

var app = express(),
    port = process.argv[2],
    index = process.argv[3];

app.set('views', index);

app.set('view engine', 'jade');

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
}).listen(port);
