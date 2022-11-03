import React from 'react'
import { Formularios } from './components/Formularios';
import { Usuarios } from './components/Usuarios';
// import { Login } from './components/Login';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Funciones } from './typescript/Funciones';
// import Contador from './components/Contador';
// import ContadorConHook from './components/ContadorConHook';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr/>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/>  */}
      {/* <Contador/> */}
      {/* < ContadorConHook /> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}


export default App;