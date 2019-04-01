function home(res) {
	console.log('this is the home request handler');
	sleep(10000);
	res.write('Hello from home');
	res.end();
}

function upload(res) {
	console.log('this is the upload request handler');
	res.write('Hello from upload');
	res.end();	
}

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while(new Date().getTime() < startTime + milliSeconds);
}



exports.home = home;
exports.upload = upload;