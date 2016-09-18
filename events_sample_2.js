var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function() {
    console.log('listener1 executed');
};

var listener2 = function list2() {
    console.log('listener2 executed');
};

function countListener() {
    var listeners = require('events').EventEmitter.listenerCount(eventEmitter, 'event1');
    console.log(listeners + " Listner(s) listening to connection event");
}

eventEmitter.addListener('event1', listener1);
eventEmitter.on('event1', listener2);

countListener();

eventEmitter.emit('event1');

eventEmitter.removeListener('event1', listener1);
console.log('Listener 1 is OFF');

eventEmitter.emit('event1');

countListener();

console.log("Programa Finalizado.");