var http = require('http');
var url = require('url');
var handler = require('./handler');
var router = require('./router');

var handle = {
 '/':handler.home,
 '/home' : handler.home,
 '/review' : handler.review,
 '/notfound' : handler.notfound 
};

function startServer(){
  var processRequest = function(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('request received for '+ pathname);
    router.route(pathname, handle, res);
  }

  http.createServer(processRequest).listen(3000);
  console.log('Server started at port:3000');
}

exports.startServer = startServer;
