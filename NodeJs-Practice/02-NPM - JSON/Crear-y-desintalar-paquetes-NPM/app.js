/*Para instalar paquetes lo hacemos de la siguiente manera:
npm install nombreDelPaquete

¿Cómo buscamos paquetes?
Para ello vamos a la página de node.js(https://www.npmjs.com/), y una vez estamos en ella, en la barra de busqueda buscamos el paquete que quieramos instalar y copiamos su npm install y lo pegamos en el mismo lugar en el que este nuestro package.json. 

Probemos instalando nuestro primer paquete siguiendo los siguientes pasos:
1- Nos vamos a parar en donde se encuentre nuestro package.json desde esta carpeta(NodeJs-Practice\NPM\Crear-y-desintalar-NPM\nuevoPaquete)
2- Vamos a confirmar que nuestro package.json se encuentre escribiendo en nuestra terminal: ls
3- En este caso, el primer paquete que vamos a instalar va a ser express, para ello vamos a escribir en nuestra terminal: npm install express
4- ¿Cómo podemos confirmar que express se ha instalado correctamente? Una vez se termine la instalación vamos a ver 2 cosas nuevas, una carpeta llamada 'node_modules' y un archivo JSON llamado 'package-log.json'(este es una descripción detallada de todo lo que hicimos en nuestro node_modules). Si entramos a nuestra carpeta node_modules, podremos ver la carpeta de express (el resto de carpeta son las que nos va a permitir que express funcione), y además de esto, si vamos a nuestro 'package.json' ahora podremos ver que nos sale algo nuevo lo cual son las 'dependencies' y en esta se va a encontrar instalada express :D.

Desintalar un paquete:
Sencillo, en vez de hacer lo que hacíamos (npm install nombreDelPaquete), solo haremos:
npm uninstall nombreDelPaquete
Y para saber que se desintalo el paquete que queriamos desintalar, vamos a nuestro package.json y debería desaparecer de nuestras dependencias

En caso de que quieramos instalar una versión especifica de un paquete agregamos un @ al lado del nombre del paquete que quieramos instalar, de manera tal que quedaría así
npm install nombreDelPaquete@versión
Ejemplo: npm install express@4.15.1
*/