import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { IniciarUsuario } from "./IniciarUsuario";
import { Side } from "./side";
import { activarSide, onLogout, todasLasNotas } from "../store/notaSlice";
import { onLogoutUsuario} from "../store/usuariosSlice";
import { TodasLasCartas } from "./TodasLasCartas";
import { MisNotas } from "./MisNotas";
import { CrearNotas } from "./CrearNotas.JSX";

export const VistaUsuario = () => {
  const { usuarioingresado } = useSelector((state) => state.usuarios);
  const { side, misNotas, crearNota } = useSelector((state) => state.notas);
  const dispatch = useDispatch();

  const onLogin = () => {
    localStorage.removeItem('valorSelecionado'); 
    dispatch(onLogout())
    dispatch(onLogoutUsuario())

  };
  const onmenu = () => {
    dispatch(activarSide());
  };

  return (
    <>
      {usuarioingresado ? (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <AppBar>
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
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{ flexGrow: 1 }}
              >
                {usuarioingresado.name}
              </Typography>
              <Button color="inherit" onClick={onLogin}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ flexGrow: 1 }} marginTop={10}>
            <Typography variant="h2" component="h1" gutterBottom>
              {!misNotas ? (
                !crearNota ?  (
                    <TodasLasCartas />
                ) : <CrearNotas/>
              ) : (
                <MisNotas />
              )}
            </Typography>
          </Box>
          {side ? <Side /> : ""}
        </Box>
      ) : (
        <IniciarUsuario />
      )}
    </>
  );
};
