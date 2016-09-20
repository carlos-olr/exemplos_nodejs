var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/formulario.html')
});

var montarResposta = function (req, res, atributos) {
    var response = {
        first_name: req[atributos].first_name,
        last_name: req[atributos].last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
};

app.get('/process', function(req, res) {
    montarResposta(req, res, 'query');
});

app.post('/process', urlencodedParser, function(req, res) {
    montarResposta(req, res, 'body');
});

var server = app.listen(8081, '127.0.0.1', function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});