const express = require("express");
const app = express();
const { infoCursos } = require("./datos/cursos");

//Router
const routerProgramacion = require('./Routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)
const routerMatematicas = require('./Routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

//Rutas/Routing en Express
app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express. Cursos :D");
});

//Agregar Rutas en Express
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}`);
});
