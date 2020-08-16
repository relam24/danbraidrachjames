var http = require('http');

var server = http.createServer(function (req, res) {
	console.log('Hello World');
});

server.listen(5000);
