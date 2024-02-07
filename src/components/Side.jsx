import * as React from "react";
import Drawer from "@mui/material/Drawer";
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import DatasetTwoToneIcon from '@mui/icons-material/DatasetTwoTone';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { activarMisNotas, activarSide, crearNotas, todasLasNotas } from "../store/notaSlice";
const drawerWidth = 240;
export const Side = () => {
  
   const dispatch=useDispatch()

   const onMisNotas=()=>{
    dispatch(activarSide())
    dispatch(activarMisNotas())
  }
  const onTodasLasNotas=()=>{
    dispatch(activarSide())
    dispatch(todasLasNotas())
  }
  const onCrearNotas=()=>{
    dispatch(activarSide())
    dispatch(crearNotas())
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop:8

        },
      }}
      position="static"
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>

        <ListItem key="Crear nota" disablePadding>
          <ListItemButton onClick={onCrearNotas}>
            <ListItemIcon>
              <AddBoxTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Crear nota" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Mis notas" disablePadding>
          <ListItemButton onClick={onMisNotas}>
            <ListItemIcon>
              <DescriptionTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Mis notas" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Todas las notas" disablePadding>
          <ListItemButton onClick={onTodasLasNotas} >
            <ListItemIcon>
              <DatasetTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Todas la notas" />
          </ListItemButton>
        </ListItem>

       
      </List>
    </Drawer>
  );
};
