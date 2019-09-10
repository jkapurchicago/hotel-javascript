

const EventEmittter = require('events'); 
const emitter = new EventEmittter(); 

emitter.emit('messageLogged'); 

//A class is a container for related methods and properties. 
//Making a noise, produce - signalling 

//Register a listener 
emitter.on('messageLogged', (arg) => { // e, eventArg 
    console.log('Listener called', arg); 
}); 

//Raise an Event 
//emitter.emit('messageLogged', 1, 'url'); 

emitter.emit('messageLogged', { id: 1, url: 'http://'}); 


// Raise: logging (data: message) 

const logging - requcat is