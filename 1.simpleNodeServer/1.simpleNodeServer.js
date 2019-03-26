//import http module
var http = require("http");

//server handler function
var handler = function(req, res) {
	console.log("Hello World");
	res.end("Hola Mundo");
};

//creating server
var server = http.createServer(handler);

//assign listening port 8080
server.listen(8080);
