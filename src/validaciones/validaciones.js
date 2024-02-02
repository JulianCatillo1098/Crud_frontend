const validarNombre = (nombre) => {
  return nombre.length <= 10;
};

const validarUsuarioExistente = (nombre) => {
  return nombre.toLowerCase() != usuarios;
};

export{validarNombre}