//Aqui vamos a ver un ejemplo de como encadenar promesas:

function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de la tiendita`);
        setTimeout(() => {
            if(producto === 'taza'){
                resolve('Ordenando una taza de la tiendita');
            }else{
                reject('Este producto no esta disponible actualmente')
            }
        }, 2000)
    })
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`)
        setTimeout(() => {
            resolve('Gracias por tu compra!')
        }, 4000)
    })
} 

//El 1, 2, 3, 4 es para que puedas ver el paso a paso, y si quieres ver el error deberías de escribir cualquier palabra distinta a 'taza' entre los parentesis de la linea 27. Lo que escribí en las lineas 35 y 39 es porque más adelante vamos a ver una manera que seguramente les va a gustar más!
ordenarProducto('taza')
    .then(respuesta => {
        console.log('1 - Respuesta recibida')
        console.log(`2 - ${respuesta}`)
        return procesarPedido(`3 - ${respuesta}`);
    })
    .then(respuestaProcesada => {
        console.log(`4 - ${respuestaProcesada}`)
        console.log('--------------------------------------')
    })
    .catch(error => {
        console.log(error)
        console.log('--------------------------------------')
    })
//Como podemos apreciar, lo que escribimos anteriormente es una cadena bastante compleja y de varios niveles de llamada a .then(). Ahora en la siguiente vamos a escribir este código de una manera mucho más concisa y que va a escribir exactamente lo mismo llamada async await.
//Borrar el /* */ para desmarcar la función y ver como funciona 
/* async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto)
        console.log('Respuesta recibida')
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada)
    }catch (error){
        console.log(error)
    }
}

realizarPedido('taza') */