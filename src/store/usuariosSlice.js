import { createSlice } from "@reduxjs/toolkit";
import { userIds } from "../datos/datsoQuemados";
const initialState = {
  crearUsuario: false,
  usuarioingresado: false,
  datos: { userIds },
};

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: initialState,

  reducers: {
    estadoCrearUsuariotrue: (state) => {
      state.crearUsuario = !state.crearUsuario;
    },

    datosNuevosDeUsuarios: (state, { payload }) => {
      state.datos.userIds.push(payload);
    },
    usuarioIngresado: (state, { payload }) => {
      state.usuarioingresado = payload;
    },
    onLogoutUsuario: () => {
      return initialState;
    },
  },
 
});

export const {
  datosNuevosDeUsuarios,
  estadoCrearUsuariotrue,
  usuarioIngresado,
  onLogoutUsuario,
} = usuariosSlice.actions;
