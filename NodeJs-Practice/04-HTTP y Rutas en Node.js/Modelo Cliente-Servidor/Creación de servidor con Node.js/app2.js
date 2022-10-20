//Aqui vamos a ver un poco más sobre los objetos request y response 
const http = require('http')

const servidor = http.createServer((req, res) => {
    console.log('===> req(solicitud)')
    //console.log(req)
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)

    console.log('===> res(respuesta)')
    //console.log(res)
    console.log(res.statusCode) //200 OK!
    //res.statusCode = 404      //404 Not Found
    //console.log(res.statusCode)
    res.setHeader('content-type', 'application/json')
    console.log(res.getHeaders())

    res.end('Hola, mundo')
})

//req:
//El .url nos da el camino que escribimos luego del dominio principal (todo lo que estaría después de 'http://localhost:3000/', por ejemplo si la url fuera 'http://localhost:3000/camino' nuestro camino sería '/camino')
//El .method es lo que nos permite saber el método de la solicitud que le va a decir el servidor el propositu de la solicitud (get, post, put, delete)

//res:
//El .statusCode es para checar el estado de la respuesta(según los valores numericos antes mencionados). Nosotros también podríamso cambiar ese código de estado por el que nosotros querramos (para ver esto desmarquen la linea 14 y 15 si es que quieren). Si queremos ver esto más a detalles, podríamos ir al network y podremos ver como cambio de estado nuestro localhost de azul a rojo(y además de esto, cambio en nuestro status que paso de 200 a 404).
//El .setHeader nos permite configurar la cabecera, dando informaciónm adicional que le vamos a enviar al cliente, como en el ejemplo, primero especificamos el tipo de contenido que le estamos enviando ('content-type') y en este caso al menos, aplicamos uno estandar el cual es 'application/json' (el cuál es esencial para enviar las respuesta desde el servidor hacia el cliente y las solicitudes del cliente hacia el servidor)
//El .getHeaders() nos permite obtener los elementos de la cabecera(header)

const puerto = 3000

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})

//Consejo: Instalar la extensión REST Client, ya que esta nos permitira probar nuestro servidor y nuestra api realizando solicitudes de distinto tipo con distintos métodos y verbos HTTP directamente desde nuestro Visual Studio Code. En nuestro archivo index.http podremos ver algo del funcionamiento de la api