var events = require('events');
var eventEmitter = new events.EventEmitter();
var os = require('os');

var ringbell = function(){
  console.log('Ring Ring Ring!!');
  eventEmitter.emit('bellRings');//Why the hell are you not gettign called.
}

var greet = function(){
  console.log('Hello! Welcome.');
  console.log(os.platform);
}
eventEmitter.on('doorOpen', ringbell);
eventEmitter.emit('doorOpen');
eventEmitter.emit('bellRings');
eventEmitter.on('bellRings', greet);