import { createSlice } from "@reduxjs/toolkit";

export const notasSlice = createSlice({
  name: "notas",
  initialState: {
    notas: {},
    side: false,
  },

  reducers: {
    todosDatos: (state, { payload }) => {
      state.notas = payload;
    },
    activarSide: (state, ) => {
      state.side = !state.side;
    },
  },
});

export const { todosDatos,activarSide} = notasSlice.actions;
