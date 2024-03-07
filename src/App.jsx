
import React, { useState } from "react"
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {
  const [citas , guardarCitas] = useState([]);

  const CitaActual = cita =>{
   guardarCitas([
    ...citas, 
     cita
   ]);

  } 
 const eliminarCita = id =>{
  const nuevaCitas = citas.filter(citas => citas.id !== id )
  guardarCitas(nuevaCitas);

 }
  
 const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas'

  return (
    <>
     <h1>administador de pacientes</h1>

     <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario 
             crearCtia={CitaActual}
           />
          </div>
          
          <div className="one-half column">
               <h2>{titulo}</h2>
               {citas.map(citas =>(
                <Citas 
                  key={citas.id}
                  cita={citas}
                  eliminarCita={eliminarCita}
                />
               ))}
          </div>

        </div>
     </div>
     </>
  )
}

export default App
