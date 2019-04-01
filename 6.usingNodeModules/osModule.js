var os  = require('os');

//platform of the O.S.
console.log(os.platform());

//release version of the O.S.
console.log(os.release());

console.log(' Free Memory: ' + parseInt(os.freemem()/1024/1024) + " GB");

console.log('Total Memory: ' + parseInt(os.totalmem()/1024/1024) + " GB");