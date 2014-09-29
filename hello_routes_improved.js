var http = require('http');
var url = require('url');

var treatRequisition = function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});

	var result = url.parse(request.url, true);

	if (result.pathname == "/"){
		response.write("<h1>Página Principal</h1>");
	} else if (result.pathname == "/bemvindo"){
		response.write("<h1>É isso ai jovem, seja bem-vindo :)<h1>");
	} else {
		response.write("<h1>" + result.pathname + ": Calma ae jovem, pra onde você foi eim?</h1>");
	}

	response.end();

};

var server = http.createServer(treatRequisition);

server.listen(3000);