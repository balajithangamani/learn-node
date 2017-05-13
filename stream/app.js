var fs = require('fs');

var readableStream = fs.createReadStream('input.txt');

var data = '';

readableStream.setEncoding('UTF-8');
readableStream.on( 'data', function (chunk) {
  data += chunk;
});
readableStream.on ('end', function(){
  console.log(data);
});

var writeData = ' Hello World';
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'UTF-8');
writableStream.end();
writableStream.on('finish', function(){
  console.log('Write Completed');
})
