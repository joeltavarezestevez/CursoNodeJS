var express = require('express');
var colors = require('colors');

var app = express();

app.get("/", function (req, res) {
	res.send("<h1>Hola Mundo con Express</h1>");
})

app.listen(80, function() {
	console.log('Server listening on port 80'.red);
})