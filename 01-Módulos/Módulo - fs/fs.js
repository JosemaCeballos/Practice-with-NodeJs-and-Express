// fs = File System => Sistema de archivos

let moduloFs = "Este módulo contiene funcionalidad muy útil para trabajar con el sistema de archivos. Además de eso, todos los métodos de este módulo son asíncronos por defecto, pero podemos escoger versiones síncronas de estos métodos agregando Sync a sus nombres";

//Para llamar al modulo hacemos lo siguiente:
const fs = require("fs");

/*Operaciones útiles que nos provee fs sobre un archivo y con carpetas: 
1-Leerlo
2-Modificarlo
3-Copiarlo
4-Eliminarlo
5-Cambiarle el Nombre */

/* Para convertir un metodo a síncrono hacemos lo siguiente:
fs.rename() -> En vez de escribirlo así
fs.renameSync() -> Lo escribiríamos así */
