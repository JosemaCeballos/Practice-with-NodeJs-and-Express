let Routing = 'Manejar las solicitudesd del clietne en base a ciertos criterios'
//Routing significa crear distintas rutas para un servidor, así este sepa que es lo que tiene que hacer para manejar una solicitud específica

Criterios = {
    1: 'El método de la solicitud HTTP. De esta forma el servidor sabe qué tipo de operación se realizará',
    //Por ejemplo: GET para obtener un recurso, POST para crear un registro nuevo, PUT para modificar un recurso, DELETE para eliminar un registro, u otros.
    2: 'El path(camino) de la solicitud HTTP. De esta forma el servidor sabe el recurso específico que se vaya a usar, modificar o eliminar',
    //En general, una ruta se puede describir como una combinación de estos 3 elementos (Método + Path + Como manejarlo). Basicamente le vamos a decir al servidor: Si recibes una solicitud GET/POST/etc en /cursos, haz esto... 
}

//Ahora en la carpeta aplicación-routing vamos a ver como aplicamos distitnas rutas a distintas combinaciones de métodos, caminos y formas de manejarlos
