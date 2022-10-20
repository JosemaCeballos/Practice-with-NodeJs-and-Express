const express = require("express");
const { infoCursos } = require("../datos/cursos");
const routerMatematicas = express.Router();
routerMatematicas.use(express.json());

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});

routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body;
  infoCursos.matematicas.push(cursoNuevo);
  res.status(200).send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;
  const indice = infoCursos.matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    infoCursos.matematicas[indice] = cursoActualizado;
  }
  res.status(200).send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.patch("/:id", (req, res) => {
  const infoActualizada = req.body
  const id = req.params.id;

  const indice = infoCursos.matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0 ){
    const cursoAModificar = infoCursos.matematicas[indice];
    Object.assign(cursoAModificar, infoActualizada)
  } 
  res.status(200).send(JSON.stringify(infoCursos.matematicas))
})

routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = infoCursos.matematicas.findIndex((curso) => curso.id == id)

  if(indice >= 0){
    infoCursos.matematicas.splice(indice, 1);
  }
  res.send(JSON.stringify(infoCursos.matematicas))
})

module.exports = routerMatematicas;
