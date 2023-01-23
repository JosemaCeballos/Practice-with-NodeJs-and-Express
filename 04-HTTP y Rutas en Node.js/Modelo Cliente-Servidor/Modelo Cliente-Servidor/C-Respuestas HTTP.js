let RespuestaHTTP = 'Una vez que el cliente realice su solicitud, el servidor la procesa y realiza una respuesta'

/* 
Una respuesta posee la siguiente estructura:
1- Código de estado = Le dice al cliente si la solicitud fue exitosa o si es que ocurrio algún error.
2- Texto de estado = Para describir el código con más detalle.
3- Versión de HTTP
4- Cabeceras(headers) = Son opcionales y proveen información adicional sobre la respuesta
5- Cuerpo(body) = Contiene la información que debe ser enviada desde el servidor hacia el cliente
*/

/*
¿Cómo podemos ver una respuesta HTTP?
Siguiendo los mismos pasos mencionados en 'A-cliente-servidor.js', solo que al clickear en una solicitud, en vez de tener en cuenta la pestaña de 'General', vamos a tener en cuenta la pestaña de 'Response Headers'
*/