// WHAT'S IN QUERY
// Exercise 7 of 8
//
// Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

// -------------------

const express = require('express');

var app = express(),
    port = process.argv[2];

app.get('/search', function(req, res){
   var query = req.query;
   res.send(query);
}).listen(port);
