var http = require('http');

var processRequest = function(req, res){
  res.writeHead('200', {'Content-Type':'text/plain'});
  res.end('Welcome to node js training')
}

var server = http.createServer(processRequest);
server.listen(3000, 'localhost');
