var http = require('http');
var url = require('url'); 

function start() {
	http.createServer((req, res) => {
		var pathname = url.parse(req.url).pathname;
		res.write("<h1> Simple Server Sample Using Module Exports </h1>");
		res.write("Yo have made a request to the url " + pathname);
		res.end();
	}).listen(8080)
	console.log('Server started listening at port 8080');
}

exports.start = start;