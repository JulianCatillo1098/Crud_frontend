import { configureStore } from "@reduxjs/toolkit";
import { usuariosSlice } from "./usuariosSlice";
import { notasSlice } from "./notaSlice";

export const store = configureStore({
  reducer: {
    usuarios:usuariosSlice.reducer,
    notas:notasSlice.reducer
  },
});
