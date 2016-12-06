const express = require('express');
var app = express(),
    port = process.argv[2];

app.get('/', function(req, res) {
  res.end('Hello World!');
}).listen(port);
