import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Grid } from "@mui/material";

export const UseMySelect = ({
  datos = {},
  nombre = "Nombre del imput",
  informacion = "seleciona una opcion",
}) => {
  const [opcion, setOpcion] = useState("");

  const handleChange = (event) => {
    setOpcion(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12} marginTop={4} style={{ textAlign: "center" }}>
        <InputLabel id={nombre}>{nombre}</InputLabel>
        <Select
          labelId={nombre}
          id={nombre}
          value={opcion}
          label={nombre}
          onChange={handleChange}
          style={{ width: 170 }}
        >
          {datos.map((dato) => (
            <MenuItem key={dato.value} value={dato.value}>
              {dato.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText style={{ textAlign: 'center' }}>{informacion}</FormHelperText>
      </Grid>
    </Grid>
  );
};
