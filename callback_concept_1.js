var fs = require('fs'); // Fila System

var dados = fs.readFileSync('input.txt');

console.log(dados.toString());
console.log('Programa Finalizado');