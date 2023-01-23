const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Estoy aprendiendo Node.js!')
})



const puerto = 3000
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando el puerto ${puerto}`)
})

//En este caso, en vez de hacer node app.js en nuestra terminal 'powershell', vamos a escribir lo siguiente en una nueva terminal llamada 'Command propmt'(podemos acceder a esta dandole a la flechita que esta apuntando hacia abajo, esta se encuentra a la derecha de nuestra palabra Terminal): nodemon app.js

//Para probar el funcionamiento de nodemon, puedes cambiar cualquier contenido de los console.log y guardarlo presionando Ctrl + S, y si luego vas a tu http://localhost:3000 y actualizas la página, podrás ver los cambios reflejados