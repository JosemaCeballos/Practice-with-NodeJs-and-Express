const fs = require('fs')

//El appendFile nos permite agregar algo al final de nuestro archivo

fs.appendFile('index.html', '<p>Contenido Agregado</p>',(error) => {
    if (error){
        throw error
    }
    console.log('Archivo actualizado')
})

//Al ejecutarlo, iremos a nuestro index.html y podremos ver como la etiquet p se agrego al final