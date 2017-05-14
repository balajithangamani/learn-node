function route(pathname, handle, res){
    console.log('Routing request for '+pathname);
    if(typeof handle[pathname] === 'function')
    {
        handle[pathname](res);
    }
    else{
       handle['/notfound'](res);
    }
}
exports.route = route;
