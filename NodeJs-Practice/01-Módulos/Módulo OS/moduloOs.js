let OS ="Contiene funcionalidad para obtener información sobre el sistema operativo en el cual se ejecuta la aplicación";

//Este módulo no es un modulo que este disponible de forma global, por lo que debemos importarlo con require.
const os = require("os")

//La siguiente función que vamos a ver es type, esta nos permite tener acceso al tipo de sistema operativo en el cúal se esta ejecutando nuestra aplicación de node.
os.type()
console.log(os.type()) 

//Si queremos tener acceso al directorio del sistema, vamos a utilizar la siguiente función:
os.homedir()
console.log(os.homedir())

//También podemos ver cuanto tiempo estuvo ejecutandose el sistema operativo con la siguiente función:
os.uptime()
console.log(os.uptime())

//Y si queremos ver la información del usuario:
os.userInfo()
console.log(os.userInfo())
