var fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', (err) => {
	if(err){
		console.log(err);
	}
	console.log('archivo creado');
});

fs.readFile('./texto.txt', (err, data) => {
	if(err) {
		console.log(err);
	}
	console.log(data.toString());
})