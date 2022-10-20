let SetTimeOut = 'Función que nos permite ejecutar código luego de un número especiífico de milisegundos'

// 1 segundo = 1000 milisegundos

let Sintaxis = 'setTimeOut(funcion, retraso, argumento1, argumento2)' 

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

setTimeout(mostrarTema, 10000, 'Node.js')
// Al ejecutar node setTimeout.js vamos a ver como después de unos segundos (en este caso 10) se ejecuta nuestra función
