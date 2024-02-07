import { Grid } from "@mui/material";
import React from "react";
import { CartNotas } from "./CartNotas";
import { useSelector } from "react-redux";

export const TodasLasCartas = () => {
  const { notas } = useSelector((state) => state.notas);
  return (
    <Grid container spacing={2}>
      {notas && Array.isArray(notas) ? (
        notas.map((dato) => (
          <CartNotas key={dato.id} userId={dato.userId} title={dato.title} />
        ))
      ) : (
        <h8>Cargando notas...</h8>
      )}
    </Grid>
  );
};
