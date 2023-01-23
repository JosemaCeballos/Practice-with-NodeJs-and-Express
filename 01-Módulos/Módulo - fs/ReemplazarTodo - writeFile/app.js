const fs = require('fs')

//El writeFile nos permite cambiar todo el contenido por el nuevo que asignemos

fs.writeFile('index.html', 'Contenido nuevo', (error) => {
    if (error){
        throw error
    }
    console.log('Contenido reemplazado exitosamente')
})

//Al ejecutarlo podremos ver como en nuestro index.html solo se encuentra el contenido nuevo que asignamos ('Contenido nuevo')