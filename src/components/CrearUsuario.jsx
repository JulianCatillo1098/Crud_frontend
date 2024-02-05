import { Button, Grid, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import { validarNombre } from '../validaciones/validaciones';
import { useDispatch, useSelector } from 'react-redux';
import { useUsuariosStore } from '../hook/useUsuariosStore';
import { datosNuevosDeUsuarios, estadoCrearUsuariotrue } from '../store/usuariosSlice';



export const CrearUsuario = () => {
  const dispatch= useDispatch()
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

      const { datos } = useSelector((state) => state.usuarios);

    const funcionSubmit = (data)=>{
      const ultimoValor = datos.userIds[datos.userIds.length-1].value
      const nombreDelUsuarioNuevo = data.nombre 
      const nuevoObjeto= {value:ultimoValor+1,name:nombreDelUsuarioNuevo}
      dispatch(datosNuevosDeUsuarios(nuevoObjeto))
      dispatch(estadoCrearUsuariotrue())
  }
      

    
  return (
    <Grid container justifyContent="center" alignItems="center">
        
        <hr>
        </hr>

      

      <Grid item xs={12} md={12} marginTop={5} style={{ textAlign: "center" }}>

        <form  onSubmit={handleSubmit(funcionSubmit)}>

          <Grid item xs={12} md={12}>
            <Typography variant="h7" gutterBottom>
              Nombre del nuevo usuario :
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} marginTop={3}>
            <TextField
              type="text"
              {...register("nombre", {
                required: true,
                validate:validarNombre
              })}
            ></TextField>

            {errors.nombre && (
              <Grid item xs={12} md={12} marginTop={3}>
                <Typography variant="body2" color="red">
                  El nombre debe tener maximo 10 caracteres 
                </Typography>
              </Grid>
            )}
          </Grid>

          <Grid item xs={12} md={12} marginTop={3}>
            <Button variant="contained" color="primary" type="submit">
              Crear
            </Button>
          </Grid>

        </form>
        
      </Grid>
    </Grid>
  )
}
