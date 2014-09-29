var http = require('http');
var url = require('url');

var treatRequisition = function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});

	response.write("<h1>Dados da query string</h1>");

	var result = url.parse(request.url, true);

	for (var key in result.query){
		response.write("<h2>"+ key + " : " + result.query[key] + "</h2>");
	}

	response.end();
};

var server = http.createServer(treatRequisition);

server.listen(3000, function(){console.log('Node.js server na veia rolando');});