let devDependencies = 'Algunas dependecias solo la vamos a utilizar cuando estemos desarrollando la aplicación, no las necesitaremos cuando esten en vivo, y por ello, a estas las podemos guardar esas dependencias en una categoría especial llamadas devDependencies'

/*¿Cómo creamos las devDependencies? Agregando --save-dev al final de nuestro npm install nombreDelPaquete, de manera tal que nos quedaría así:
npm install nombreDelPaquete --save-dev
Ejemplo: npm install express --save-dev

¿Cómo sabremos que instalamos la devDependencies de manera correcta? 
Yendo a nuestro package.json y viendo como ahora en vez de 'dependencies', tenemos una categoría nueva llamada 'devDependencies' en la que se guardo el paquete que instalamos.

Te invito a probar siguiendo el mismo ejemplo que puse arriba (tener en cuenta que si aún se tiene express instalado como una dependencies, se debe desintalar e instalar nuevamente como una devDependencies) o instalando un nuevo paquete, añadiendole el --save-dev, buscado por ustedes mismo desde la página de nodejs (https://www.npmjs.com/)
*/