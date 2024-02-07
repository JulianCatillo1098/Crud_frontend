import { CartNotas } from "../components/CartNotas";

const validarNombre = (nombre) => {
  return nombre.length <= 10;
};



const extrarUsuario = (array, valorBuscar) => {
let objetoUsuario=null
  for (let i = 0; i < array.length; i++) {
    if (array[i].value == valorBuscar) {
      objetoUsuario = array[i];
      break;
    }
  }
  return objetoUsuario
};



export { validarNombre, extrarUsuario,};
