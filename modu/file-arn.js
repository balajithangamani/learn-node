var fs = require('fs');

fs.readFile('some.html', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log('Async data is '+ data.toString());
  }
})

var data = fs.readFileSync('some.html');
console.log("Sync data is"+data.toString());
console.log("File read synchronously")
