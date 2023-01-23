const http = require('http')

//Definimos una constante para almacenar ese servidor
const servidor = http.createServer((req, res) => {
    console.log('Solicitud nueva')
    res.end('Hola mundo!')
})
//req = Significa request(solicitud)
//res = Significa response(respuesta)
//.end() = Nos permite enviar la respuesta al cliente(navegador)

const puerto = 3000
servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en el puerto http://localhost:${puerto}...`)
})
//Cuando creamos nuestro servidor y lo iniciamos vamos a lograr que ese servidor escuche(.listen()) a las solicitudes, y para ellos necesitamos un puerto
//Puerto = 'Ubicación virtual del sistema operativo en al cual se peude acceder a una aplicación o a un proceso específico que se esté ejecutando en ese puerto'

/*Para que nuestro servidor se ejecute vamos a seguir los siguientes pasos: 
1- Vamos a abrir nuestra terminal
2- Nos vamos a parar en esta ruta: NodeJs-Practice\HTTP y Rutas en Node.js\Modelo Cliente-Servidor\Creación de servidor con Node.js
3- Vamos a escribir en nuestra terminal: node app.js
4- Solo nos queda abrir nuestro navegador y escribir la siguiente url o darle ctrl + click: http://localhost:3000 */