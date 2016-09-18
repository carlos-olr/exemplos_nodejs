var http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

    response.end('Olá Mundo!');

}).listen(9091);

console.log('Server rodando em localhost:9091');