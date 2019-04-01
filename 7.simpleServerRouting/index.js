var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {};
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);