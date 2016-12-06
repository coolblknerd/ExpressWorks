// GOOD OLD FORM
// Exercise 4 of 8
//
// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints backwards the str value.

// ---------------------

const express = require('express'),
      bp = require('body-parser');

var app = express(),
    port = process.argv[2];

app.use(bp.urlencoded({ extended: false }));

app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''))
}).listen(port);
