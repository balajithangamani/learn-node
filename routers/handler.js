function home(res){
    console.log("Executing 'home' handler");
    res.writeHead('200', {'Content-Type':'text/plain'});
    res.write('Welcome to Home Page');
    res.end();
}
function review(res){
    console.log("Executing 'review' handler");
    res.writeHead('200', {'Content-Type':'text/plain'});
    res.write('You are on Review Page');
    res.end();
}

function notfound(res){
    console.log("Executing 'review' handler");
    res.writeHead('404', {'Content-Type':'text/plain'});
    res.end('Page not found');
}

exports.home = home;
exports.review = review;
exports.notfound = notfound;