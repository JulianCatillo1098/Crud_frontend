import { useDispatch } from "react-redux";
import { todosDatos } from "../store/notaSlice";
import axios from "axios";

export const useUsuariosStore = () => {


  const dispatch = useDispatch();

  const cargarDatos = async (numero) => {

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      dispatch(todosDatos(data));
    } catch (error) {
      console.log("Error al cargar los pokemones:", error);
    }
  };

  return { cargarDatos };
};
