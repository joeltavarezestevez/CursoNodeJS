//import http module
var http = require("http");

//server handler function
var handler = function(req, res) {
	res.write("<h1> Hello world from nodeJS</h1>");
	res.end();
};

//creating server
var server = http.createServer(handler);

//assign listening port 8080
server.listen(8080, () => {
	console.log('Server listening on port 8080');
});
