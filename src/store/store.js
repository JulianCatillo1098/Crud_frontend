import { configureStore } from "@reduxjs/toolkit";
import { usuariosSlice } from "./usuariosSlice";

export const store = configureStore({
  reducer: {
    usuarios:usuariosSlice.reducer,
  },
});
