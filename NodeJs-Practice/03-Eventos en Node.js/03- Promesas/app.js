const promesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("Promesa cumplida!");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
});

const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
