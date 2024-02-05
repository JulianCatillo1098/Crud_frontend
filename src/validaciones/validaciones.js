const validarNombre = (nombre) => {
  return nombre.length <= 10;
};

const validarUsuarioExistente = (nombre) => {
  return nombre.toLowerCase() != usuarios;
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

export { validarNombre, extrarUsuario };
