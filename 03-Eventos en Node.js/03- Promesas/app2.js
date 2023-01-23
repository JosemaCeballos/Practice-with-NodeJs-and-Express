const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido Exitoso! Su pizzita esta en camino :D");
    } else {
      reject("Ocurrio un error. Por favor intente nuevamente");
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmación) => {
  console.log(mensajeDeConfirmación);
};

const rechazarPedido = (mensajeDeRechazo) => {
  console.log(mensajeDeRechazo);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmación) => {console.log(mensajeDeConfirmación)})
    .catch((mensajeDeRechazo) => {console.log(mensajeDeRechazo)})