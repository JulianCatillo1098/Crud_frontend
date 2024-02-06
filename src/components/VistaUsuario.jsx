import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IniciarUsuario } from "./IniciarUsuario";
import { Side } from "./side";
import { activarSide } from "../store/notaSlice";

export const VistaUsuario = () => {
  const { usuarioingresado } = useSelector((state) => state.usuarios);
  const { side } = useSelector((state) => state.notas);
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const onLogin = () => {
    navigate("/");
  };
  const onmenu=()=>{
    dispatch(activarSide())
}

  return (
    <>
      {usuarioingresado ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={onmenu}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {usuarioingresado.name}
              </Typography>
              <Button color="inherit" onClick={onLogin}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ flexGrow: 1 }}>
            {/* Aquí puedes poner tu contenido principal */}
            <Typography variant="h2" component="h1" gutterBottom>
              Contenido principal
            </Typography>
          </Box>
          {side?(<Side/>):("")}
        </Box>
      ) : (
        <IniciarUsuario />
      )}
    </>
  );
};