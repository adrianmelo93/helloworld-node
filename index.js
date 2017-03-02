var express = require('express');
var mysql = require('mysql');

var app = express();

// configure web app
app.get('/', function(req, res){
  res.end("hello world")
});



app.listen(8590);
