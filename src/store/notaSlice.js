import { createSlice } from "@reduxjs/toolkit";
import { userIds } from "../datos/datsoQuemados";

export const notasSlice = createSlice({
  name: "notas",
  initialState: {
    notas: {},
  },

  reducers: {
    todosDatos: (state, { payload }) => {
      state.notas = payload;
    },
  },
});

export const { todosDatos } = notasSlice.actions;
