var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).any());

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/file_upload.htm');
});

app.post('/file_upload', function(req, res) {
    console.log(req);
    console.log(req.files[0].originalname);
    console.log(req.files[0].path);
    console.log(req.files[0].type);

    var file = __dirname + '/public/upload/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(erro, dados) {
        fs.writeFile(file, dados, function(erro) {
            var response = {};
            if (erro) {
                console.log(erro);
            } else {
                response = {
                    message : 'File uploaded successfully',
                    filename : req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, '127.0.0.1', function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});