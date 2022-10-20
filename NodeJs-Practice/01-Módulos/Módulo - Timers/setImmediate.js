let SetImmediate = 'Función que nos permite ejecutar código asíncronico en la próxima iteración del ciclo de eventos(lo más pronto posible)'
//Esta se ejecuta después del código síncrono

let Sintaxis = 'setImmediate(funcion, argumento1, argumento2)' 

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

console.log('Antes de setImmediate()')
setImmediate(mostrarTema, 'Node.js')
console.log('Después de setImmediate()')