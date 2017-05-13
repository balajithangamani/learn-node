// var time = 0;
// console.log('Custimer 1 Arrives and orders food');
// console.log('Chef prepares the order in 5 mins');
// time+=5;
// console.log('Customer 1 gets food in '+ time + ' mins');
//
// console.log('Custimer 2 Arrives and orders food');
// console.log('Chef prepares the order in 5 mins');
// time+=5;
// console.log('Customer 2 gets food in '+ time + ' mins');
//
// console.log('Custimer 3 Arrives and orders food');
// console.log('Chef prepares the order in 5 mins');
// time+=5;
// console.log('Customer 3 gets food in '+ time + ' mins');

console.log('Custimer 1 Arrives and orders food');
prepareFood(serveCustomer);

console.log('Custimer 2 Arrives and orders food');
prepareFood(serveCustomer);

console.log('Custimer 3 Arrives and orders food');
prepareFood(serveCustomer);

function prepareFood(callback) {
    console.log('take 5 mins to prepare');
    setTimeout(callback, 5000);
}

function serveCustomer() {
    console.log('Food served to customer');
}
