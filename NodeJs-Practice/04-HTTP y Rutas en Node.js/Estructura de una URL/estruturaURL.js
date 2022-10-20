let URL = 'Dirección de un recurso en la web'
//Uniform Resource Locator - Localizador uniforme de recursos

/* Ahora entendamos la estructura de una url: 
Vamos a usar la siguiente de ejemplo: https://www.ejemplo.com/usuarios/14
1-https representa el protocolo, el cual es el conjunto de reglas que vamos a utilizar para acceder a esa página web. En este caso, https le agrega una capa extra de seguridad para proteger la información, pero podría ser también http para evitar esto mismo.
2-www representa el subdominio, el cuál es información adicional agregada al inicio del dominio de una página web. Este permite a los sitios web organizar y separar la información para distintos propósitos.
3-ejemplo representa nuestro dominio, el cuál es una referencia ÚNICA a un sitio web en internet.
4-.com representa el dominio de nivel superior (en otras páginas podríamos verlo como .org, .net, .int, .edu, .gov)
5-/usuarios representa el camino(path), que sería todo lo que es un archivo o directorio que se encuentre en el servidor web.
Un camino puede tener parámetros para personalizarlo. Estos parámetros son parte de la URL. Existen 2 tipos de parámetros: 
Parametros de ruta: En este caso sería /usuarios/14, y estos parametros nos permiten personalizar la URL para acceder especificamente a los datos que queremos, en este caso, al del usuario numero 14.
Parametros query: Supongamos que en vez de /usuarios/14 tenemos lo siguiente: 'search?q=información+del+usuario+14'. Todo lo que estaría desde el '?' en adelante, sería nuestro parametro query, y estos representan a una busqueda o consulta que no son como tal parte de la URL.
*/