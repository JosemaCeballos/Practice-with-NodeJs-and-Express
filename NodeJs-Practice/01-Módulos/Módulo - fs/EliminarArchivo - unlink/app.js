const fs = require('fs')

// El unlink nos permite eliminar un archivo

fs.unlink('main.html', (error) => {
    if (error) {
        throw error
    }
    console.log('Archivo eliminado')
})

// Al ejecutarlo podremos ver como se nos borra nuestro archivo main.html