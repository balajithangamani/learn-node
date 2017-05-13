var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected(){
  console.log("Connection succeeded");
  eventEmitter.emit("data_received");
}

var requestHandler = function connected(){
  console.log("Request received");
  eventEmitter.emit("do_authentication");
}

eventEmitter.on("connection_success",connectionHandler);

console.log("listeners for connection_request"+require("events").EventEmitter.listenerCount(eventEmitter,"connection_request"));
eventEmitter.on("connection_request",function(){
  console.log("Conenection intiated");
  eventEmitter.emit("connection_success");
});

eventEmitter.on("data_received", function(){
  console.log("Data received successfully");
});

eventEmitter.addListener("connection_request",requestHandler);
console.log("listeners for connection_request"+require("events").EventEmitter.listenerCount(eventEmitter,"connection_request"));
eventEmitter.addListener("do_authentication", function(){
  console.log("authentication successfull");
});
eventEmitter.emit("connection_request");
