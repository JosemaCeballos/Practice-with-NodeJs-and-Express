const fs = require('fs')

fs.rename('index.html', 'main.html', (error) => {
    if (error){
        throw error;
    }
    console.log('Nombre cambiado exitosamente')
})

//Al llamar a la función en nuestra terminal vamos a ver como el nombre se cambia de index a main