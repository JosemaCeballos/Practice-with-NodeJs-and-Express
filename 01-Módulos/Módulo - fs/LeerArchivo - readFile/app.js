const fs = require('fs')

fs.readFile('./inde.html', 'utf-8', (error, contenido)=>{
    if(error) {
        throw error;
    }
    console.log(contenido)
})

