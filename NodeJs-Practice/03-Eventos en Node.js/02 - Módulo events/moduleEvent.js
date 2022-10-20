let Emitters = 'Objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren. Estos son instancias de la clase EventEmitter, y poseen un método .on() para asociar una función al evento (función que se ejecuta cuándo ocurre el evento y se denomina Event Handler *maneja el evento*) ' //Emisores

// Módulo events nos permite emitir (para nosotros mismos crear esos eventos), definir (para decir que es lo que va a ocurrir cuando el evento ocurra) y escuchar eventos.

const EventEmitter = require('events')

console.log(EventEmitter)
//Al pasarlo por consola podremos ver los métodos que nos ofrece. 

