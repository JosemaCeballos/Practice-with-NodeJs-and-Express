function saludar(nombre){
    return `Hola, ${nombre}`
}

function saludarHolaMundo(){
    return 'Hola mundo!'
}

console.log(saludar('Jose'))

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
}

let Módulo = 'Funcionalidad organizada en uno o varios archivos Javascript que puede ser reutilizada en una aplicación';

ventajas = {
    1: 'Evitar repetición del código',
    2: 'Reutilizar el código',
    3: 'Es más fácil encontrar y corregir bugs',
    4: 'Es más fácil modificar el código',
    5: 'Es más fácil agregar nueva funcionalidad',
}

let Importar = 'Darle acceso a funciones y elementos definidos en otro módulo'
let Exportar = 'Nos permite importar un elemento o todos de un archivo javascript a otro'
// modules.export -> import

