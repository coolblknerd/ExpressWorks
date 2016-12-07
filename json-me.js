// JSON ME
// Exercise 8 of 8
//
// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.
//
// The port is passed in process.argv[2].  The file name is passed in process.argv[3].
//
// Respond with:
//
//    res.json(object)
//
// Everything should match the '/books' resource path.

// -------------------

const express = require('express'),
      fs = require('fs');

var app = express(),
    port = process.argv[2],
    file = process.argv[3];

app.get('/books', function(req, res){

    fs.readFile(file, function(err, data){
        if(err) { console.error(err) }

        res.send(JSON.parse(data));
    });


}).listen(port);
