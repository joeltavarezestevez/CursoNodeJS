var http = require('http');
var url = require('url'); 

function start(route, handle) {
	http.createServer((req, res) => {
		var pathname = url.parse(req.url).pathname;
		route(handle, pathname, res);
	}).listen(8080)
	console.log('Server started listening at port 8080');
}

exports.start = start;