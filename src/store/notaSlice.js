import { createSlice } from "@reduxjs/toolkit";

export const notasSlice = createSlice({
  name: "notas",
  initialState: {
    notas: {},
    side: false,
    misNotas:false,
    crearNota:false,
    todasLasNotas:true,
  },

  reducers: {
    todosDatos: (state, { payload }) => {
      state.notas = payload;
    },
    activarSide: (state, ) => {
      state.side = !state.side;
    },
    activarMisNotas: (state, ) => {
      state.misNotas = !state.misNotas;
    },
    crearNotas: (state, ) => {
      state.crearNota = !state.crearNota;
    },
    todasLasNotas: (state, ) => {
      state.todasLasNotas = !state.todasLasNotas;
    },
    
  },
});

export const { todosDatos,activarSide,activarMisNotas,crearNotas,todasLasNotas} = notasSlice.actions;
