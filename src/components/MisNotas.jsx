import React from "react";
import { Grid } from "@mui/material";
import { CartNotas } from "./CartNotas";
import { useSelector } from "react-redux";

export const MisNotas = () => {
  const { notas } = useSelector((state) => state.notas);
  const { usuarioingresado } = useSelector((state) => state.usuarios);

  return (
    <Grid container spacing={2}>
      {notas && Array.isArray(notas) && usuarioingresado && usuarioingresado.value ? (
        notas
          .filter((nota) => nota.userId === usuarioingresado.value)
          .map((dato) => (
            <CartNotas key={dato.id} userId={dato.userId} title={dato.title} />
          ))
      ) : (
        <div>
          La variable 'notas' no está definida o no es un array.
        </div>
      )}
    </Grid>
  );
};
