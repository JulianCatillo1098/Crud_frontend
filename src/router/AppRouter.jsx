import React from 'react'
import { IniciarUsuario } from '../components/IniciarUsuario'
import { VistaUsuario } from '../components/vistaUsuario'
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    

      <Routes>
        <Route path='/*' element={<IniciarUsuario/>}></Route>
        <Route path='/ingreasadousuario' element={<VistaUsuario/>}></Route>
        <Route path='/*' element={<Navigate to= '/*'/>}/>
      </Routes>
      
    );    
  
}
