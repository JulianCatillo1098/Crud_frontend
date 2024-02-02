import { useDispatch } from "react-redux";
import { datosNuevosDeUsuarios } from "../store/usuariosSlice";


export const useUsuariosStore = () => {

    const dispatch = useDispatch()

  const agregarUsuarioNuevo = (objeto) => {

    try {

      dispatch(datosNuevosDeUsuarios(objeto));

    } catch (error) {
        
      console.log("Error al agregar un nuevo usuario", error);
    }
  };
  
  return {agregarUsuarioNuevo};
};
