var http = require("http");
var fs = require("fs");

//reloads all the content everytime a request is done
http.createServer(function(req, res) {
	fs.readFile("./index.html", function(err, html) {
		res.write(html);
		res.end();
	});	
}).listen(8080);