const http = require('http')
const cursos = require('./cursos')
console.log(cursos)

const servidor = http.createServer((req, res) => {
    const {method} = req //Extraemos los métodos por medio de destructuring

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        default: 
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`)
    }
})

function manejarSolicitudGET (req, res) {
    const camino = req.url

    if (camino === '/'){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }else if (camino === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos))
    }else if (camino === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }else if(camino === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    res.statusCode = 404;
    res.end('El recurso solicitado no existe')
}

function manejarSolicitudPOST(req, res){
    const path = req.url;
    if (path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        })

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo); //para convertirlo en un objeto de JavaScript
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        })

        res.statusCode = 200;
        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }
}

function manejarSolicitudPUT(req, res){
    const path = req.url;
    if (path === '/cursos/programacion'){
        res.statusCode = 200;
        cursos.infoCursos.programacion[0].vistas = 16001;
        console.log(cursos.infoCursos.programacion[0].vistas)
        return res.end('El servidor recibió una solicitu PUT para /cursos/programacion')
    }
}

const puerto = 3000
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})