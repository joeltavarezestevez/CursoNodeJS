var http = require("http");
var fs = require("fs");

var html = fs.readFileSync("./index.html");

//doesnt reload the content of the file
http.createServer(function(req, res) {
	res.write(html);
	res.end();
}).listen(8080);