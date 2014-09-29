var http = require('http');
var url = require('url');

var treatRequisition = function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	if (request.url == "/"){
		response.write("<h1>Página Principal</h1>");
	} else if (request.url == "/bemvindo"){
		response.write("<h1>É isso ai jovem, seja bem-vindo :)<h1>");
	} else {
		response.write("<h1>" + request.url + ": Calma ae jovem, pra onde você foi eim?</h1>");
	}

	response.end();

};

var server = http.createServer(treatRequisition);

server.listen(3000);