let SetInterval = 'Función que nos permtie ejecutar código un número infinito de veces con un retraso específico de milisegundos'

// 1 segundo = 1000 milisegundos

let Sintaxis = 'setInterval(funcion, argumento1, argumento2)' 

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

setInterval(mostrarTema, 2000, 'Node.js')

// Presionando ctrl + c detenemos la ejecución del código :D 