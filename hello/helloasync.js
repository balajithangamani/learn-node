function printline(message){
  console.log(message);
}

function greet(howtogreet , whattosay){
  howtogreet(whattosay);
}

greet(printline, 'Hello Async world. From the bottom of the heart');
