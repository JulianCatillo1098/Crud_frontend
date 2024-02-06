import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const CartNotas = ({
  userId = "no hay usuario",
  title = "no hay nota",
}) => {
  return (

      <Grid item xs={6} md={4} margin={0}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Usuario
              </Typography>
              <Typography variant="h5" component="div">
                {userId}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Titulo
              </Typography>
              <Typography variant="body2">
                {title}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Editar</Button>
              <Button size="small"> Eiminar</Button>
            </CardActions>
          </React.Fragment>
        </Card>
  
    </Grid>
  );
};
