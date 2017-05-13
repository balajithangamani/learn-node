console.log(__filename);
console.log(__dirname);

function printstuff(stuff){
  console.log(stuff);
}

//TypeError: "callback" argument must be a function
//setTimeout(printstuff('from settimeout'), 5000);
//setInterval(printstuff('from interval'), 3000);

setTimeout(function() {
  printstuff('from timeout')
}, 5000);
setInterval(function(){
  printstuff('interval trigger')
}, 3000);
