var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Hello fucking node.js world!");
	response.end();
});

server.listen(3000, function(){
	console.log('A bagaça tá em pé');
});
