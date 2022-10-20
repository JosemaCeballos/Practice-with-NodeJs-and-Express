 const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

 console.log(miUrl.hostname) //www.ejemplo.org

 console.log(miUrl.pathname) ///cursos/programacion

 console.log(miUrl.searchParams) // URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
 console.log(miUrl.searchParams.get('ordenar')) //Con el método get podemos acceder a los valores que tenemos guardados en los párametros de searchParams
 console.log(miUrl.searchParams.get('nivel'))