let Modelo = 'Modelo que usamos para acceder a internet y obtener recursos e información'

let Cliente = 'El navegador desde el cual se realizan solicitudes a un servidor. El cliente conoce el formato esperado del mensaje que recibe el servidor'

let Servidor = 'Programa que se ejecuta en un servidor físico para ofrecer un servicio al cliente. Envía información. El servidor conoce el formato esperado del mensaje que envía el cliente'

let Protocolo = 'Conjunto de reglas que permiten trasmitir información entre dispositivos de una red'

let ProtocoloHTTP = 'Define el formato de los mensajes'
//HTTP = Protocolo de trasferencia de hipertexto

let SolicitudesHTTP = 'Cuando un cliente le pide información a un servidor esta realizando una solicitud'
/* Una solicitud HTTP tiene todos los siguientes elementos:
1- Métodos HTTP = Verbo o sustantivo que indica la intención de la solicitud
2- Camino (path)
3- Versión de HTTP
4- Cabeceras(headers) = Proveen información adicional sobre la solicitud
5- Cuerpo(body) = Contiene la información que debe ser enviada al servidor para procesar la solicitud. Este no se incluye en todo tipo de solicitudes, solo en aquellas que requieran enviar información, por ejemplo el método post y put.
*/

/* 
¿Cómo podemos ver las solicitudes HTTP?
Sencillo! Accediendo a cualquier página y dando click derecho en cualquier lado de la misma, luego presionamos inspeccionar/inspeccionar elemento y se nos va a abrir algo en lo que vamos a poder notar un '>>', al cúal si hacemos click nos va a salir la opción de 'Network' y debajo de la gráfica que nos saldra, podremos ver todas las solicitudes HTTP que realiza la página.
Clickeando en cualquiera de las solicitudes podremos ver también los elementos anteriormente mencionados que poseen las mismas :D.
*/

/* 
Ahora les adjunto el link de la documentación por si les surgen otras dudas con respecto al tema así puedan buscarlas por su cuenta: 
https://developer.mozilla.org/es/docs/Web/HTTP   
*/