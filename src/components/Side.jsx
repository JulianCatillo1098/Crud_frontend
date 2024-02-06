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
const drawerWidth = 240;
export const Side = () => {
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
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>

        <ListItem key="Crear nota" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddBoxTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Crear nota" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Mis notas" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DescriptionTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Mis notas" />
          </ListItemButton>
        </ListItem>

        <ListItem key="Todas las notas" disablePadding>
          <ListItemButton>
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
