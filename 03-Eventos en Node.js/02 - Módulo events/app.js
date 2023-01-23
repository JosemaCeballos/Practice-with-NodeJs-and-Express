const EventEmitter = require('events')

const emisorProductos = new EventEmitter();

console.log(emisorProductos)

emisorProductos.on('compra', (total) => {
    console.log(`Se realizo una compra de $${total}`)
})

emisorProductos.emit('compra', 25)

//El método on nos permite crear funciones que van a tomar el rol de un Event Handler, y el método emit emitir las funciones que creamos.