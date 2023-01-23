const express = require("express");
const { infoCursos } = require("../datos/cursos");
const routerProgramacion = express.Router();

//Middleware: Se ejecutan después de recibir una solicitud y antes de recibir una respuesta.Estos tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el próximo middleware
routerProgramacion.use(express.json());
//Esto nos permite procesar el cuerpo de nuestra solicitud en formato json y trabajar con el cuerpo de solicitud en nuestro body

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  //Parametros query => ?clave=valor  ordenar=vistas de forma ascendente
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))
    );
  }
  //------------------------------------
  res.send(JSON.stringify(resultados));
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (resultados.length === 0) {
    return res
      .status(404)
      .end(`No se encontraron cursos de ${lenguaje} con el nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

//Post
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  infoCursos.programacion.push(cursoNuevo);
  res.send(JSON.stringify(infoCursos.programacion));
});

//Put
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;
  const indice = infoCursos.programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    infoCursos.programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(infoCursos.programacion));
});

//Path
routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = infoCursos.programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = infoCursos.programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(JSON.stringify(infoCursos.programacion));
});

//DELETE
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = infoCursos.programacion.findIndex((curso) => curso.id == id);

  if (indice >=0){
    infoCursos.programacion.splice(indice, 1)
  }
  res.send(JSON.stringify(infoCursos.programacion))
});

module.exports = routerProgramacion;
