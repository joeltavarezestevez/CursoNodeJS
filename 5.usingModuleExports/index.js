var math = require('./math.js');
var string = require('./string.js');
var express = require('express');
var colors = require('colors');
var html = "";

app = express();
port = 3000;

app.get('/', function(req, res) {
	html = "";
	html += '<h1>' + string.upperCaseString('Operaciones Básicas') + '</h1>';
	html += '<h2>' + string.lowerCaseString('Uso de Modulos en node.JS') + '</h2>';
	html += '<b> Suma : </b>' + math.add(5,3) + '<br>';
	html += '<b> Resta : </b>' + math.substract(5,3) + '<br>';
	html += '<b> Multiplicaci&oacute;n : </b>' + math.multiply(5,3) + '<br>';
	html += '<b> Divisi&oacute;n : </b>' + math.divide(5,3) + '<br>';
	res.status(200).send(html);
})

app.listen(port, function () {
	console.log('App listening on port 3000'.green);
})