import { createSlice } from "@reduxjs/toolkit";
import { userIds } from "../datos/datsoQuemados";

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuario:null,
    crearUsuario:false,
    usuarioingresado:false,
    datos: { userIds },
  },

  reducers: {
    estadoCrearUsuariotrue: (state) => {
      state.crearUsuario= !state.crearUsuario
    },

    datosNuevosDeUsuarios: (state, { payload }) => {
      state.datos.userIds.push(payload);
    },
  },
});

export const { datosNuevosDeUsuarios,estadoCrearUsuariotrue} = usuariosSlice.actions;
