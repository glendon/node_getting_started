var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	//A constante __dirname retorna o diretorio raiz da aplicacao.
	fs.readFile(__dirname + '/index.html', function(erro, html){
		response.writeHeader(200, {"Content-type":"text/html"});
		response.write(html);
		response.end();
	});
});

server.listen(3000, function(){
	console.log('Executando o site maroto...');
});

