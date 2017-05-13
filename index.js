var http = require('http');
var express = require('express');

var app = express();

app.get('/',function(req, res){
  res.end('Food smiles');
});

http.createServer(app).listen(3000);
