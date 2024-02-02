import {
  AppBar,
  Button,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { UseMySelect } from "../hook/UseMySelect";
import { CrearUsuario } from "./CrearUsuario";
import { useDispatch, useSelector } from "react-redux";
import { estadoCrearUsuariotrue } from "../store/usuariosSlice";

export const IniciarUsuario = () => {
  const { datos, crearUsuario} = useSelector((state) => state.usuarios);
  const dispatch = useDispatch()

  const onButonCrear = () => {
    dispatch(estadoCrearUsuariotrue())
    
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Usuario a ingresar
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" alignItems="center">
      
       
          <UseMySelect datos={datos.userIds} nombre="Usuario" />
         
      
        <Grid
          item
          xs={12}
          md={12}
          marginTop={4}
          style={{ textAlign: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "100px", marginRight: "11px" }}
          >
            Ingresar
          </Button>

          <Button
            onClick={onButonCrear}
            variant="contained"
            type="submit"
            style={{ width: "100px", backgroundColor: "green" }}
          >
            Crear
          </Button>
        </Grid>
        {crearUsuario === true  ?<CrearUsuario /> : <></>}
      </Grid>
    </>
  );
};
