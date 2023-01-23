let Proceso = 'Provee información sobre el proceso de Node.js que se está ejecutando, y también tiene cierto control sobre el proceso'

console.log(process.argv)
// [node, process.js, lo que nosotros agreguemos al hacer en nuestra terminal node process.js]
//Ejemplo - 1: node process.js 3 4 5 -> [node, process.js, 3, 4, 5]

//Ejemplo - 2:
//Lo inicializamos en 2 dado que ya sabemos que en nuestra posición 0 siempre vamos a tener a node, y en nuestra posición 1 el archivo del que lo estamos llamando.
for(let i=2; i<process.argv.length; i++){
    console.log(process.argv[i])
}

