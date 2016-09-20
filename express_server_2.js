var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('Got a Get request for the homepage');
    res.send('Hello GET');
});

app.post('/', function(req, res) {
    console.log('Got a POST request for the homepage');
    res.send('Hello POST');
});

app.delete('/del_user', function(req, res) {
    console.log('Got a DELET request for the /del_user');
    res.send('Hello DELETE');
});

app.get('/list_user', function(req, res) {
    console.log('Got a Get request for the /list_user');
    res.send('Page listing');
});

app.get('/ab*cd', function(req, res) {
    console.log('Got a Get request for the pattern /ab*cd');
    res.send('Page Pattern Match');
});

var server = app.listen(8081, '127.0.0.1', function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});