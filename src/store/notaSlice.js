import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notas: {},
  side: false,
  misNotas:false,
  crearNota:false,
  todasLasNotas:true,
}

export const notasSlice = createSlice({
  name: "notas",
  initialState : initialState,

  reducers: {
    todosDatos: (state, { payload }) => {
      state.notas = payload;
    },
    activarSide: (state ) => {
      state.side = !state.side;
    },
    activarMisNotas: (state ) => {
      state.misNotas = true,
      state.crearNota = false,
      state.todasLasNotas = false
    },
    crearNotas: (state, ) => {  
      state.misNotas = false,
      state.crearNota = true,
      state.todasLasNotas = false
    },
    todasLasNotas: (state, ) => {
      state.misNotas = false,
      state.crearNota = false,
      state.todasLasNotas = true
    },
    onLogout: (state ) => {
      return initialState
    },
    
  },
});

export const { todosDatos,activarSide,activarMisNotas,crearNotas,todasLasNotas,onLogout} = notasSlice.actions;
