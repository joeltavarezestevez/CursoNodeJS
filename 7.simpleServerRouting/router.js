function route(handle, pathname, res) {
	console.log('Request made for path ' + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](res);
	} else {
		console.log('Unknown request handler for ' + pathname);
		res.writeHead(404);
		res.write('404 not found');
		res.end();
	}
}

exports.route = route;