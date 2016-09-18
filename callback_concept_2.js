var fs = require('fs'); // Fila System

fs.readFile('input.txt', function (erro, dados) {
    if (erro) return console.error(erro);
    console.log(dados.toString());
});

console.log('Programa Finalizado');