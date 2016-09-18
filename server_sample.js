var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    var pathName = url.parse(request.url).pathname;

    console.log('Request for ' + pathName + ' received');

    fs.readFile(pathName.substr(1), function(erro, dados) {
        if (erro) {
            console.log(erro);
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(dados.toString());
        }
        response.end();
    });
}).listen(8081);

console.log('Server rodando em localhost:8081/');