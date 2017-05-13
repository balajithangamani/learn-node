var http = require('http');
var url = require('url');

function startServer(route){
  var processRequest = function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('request received for '+ pathname);
    route(pathname);
    res.writeHead('200', {'Content-Type':'text/plain'});
    res.write('Welcome to node js training');
    res.end();
  }

  http.createServer(processRequest).listen(3000);
}

exports.startServer = startServer;
