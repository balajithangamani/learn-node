var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function(){
  console.log('Ring Ring Ring!!');
  eventEmitter.emit('bellRings');//Why the hell are you not gettign called.
}

eventEmitter.on('doorOpen', ringbell);
eventEmitter.emit('doorOpen');

eventEmitter.on('bellRings', greet);

function greet(){
  console.log('Hello! Welcome.');
}
