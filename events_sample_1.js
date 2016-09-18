var events = require('events'); // importar módulo de controle de enventos

var eventEmitter = new events.EventEmitter(); // EventEmitter é uma classe que permiti a criação
                                              // de objetos que lançam eventos

// Handler's são objetos/funções a serem executadas quando um determinado evento for lançado
var connectHandler = function connected(valor) {
    console.log('connection succesful');
    // Função 'emit' lança um evento
    eventEmitter.emit('data_received', valor+1);
};

// Função 'on' mapeia um evento a um handler
// Esse mapeamento é conhecido como BIND
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(valor) {
    console.log('data received succesfully');
    console.log(valor);
});

eventEmitter.emit('connection', 1);

console.log('Programa finalizado');