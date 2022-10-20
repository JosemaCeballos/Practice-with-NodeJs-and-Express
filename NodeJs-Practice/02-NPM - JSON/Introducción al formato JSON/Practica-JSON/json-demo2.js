//Esta es otra manera de convertir un objeto a JSON desde nuestro JavaScript: 
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 11234,
    "numLikes": 12421,
    "temas": ["JavaScript", "Node.js"],
    "esPublico": true
}
console.log(infoCurso)
console.log(typeof infoCurso)

//.stringify nos permite convertirlo a una cadena de caracteres
// Objeto -> Cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso)
console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)

// .parse nos permite convertirlo a un objeto
// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto)

//En la terminal vamos a poder ver las diferencias de uno y otro 
