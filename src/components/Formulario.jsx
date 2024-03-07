import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCtia}) =>{
const [cita , actualizarCita ] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    Sintomas: ''
});

const [ error, actualizarError] = useState(false);
const actualizarState = e =>{   
    actualizarCita({
         ...cita,
        [e.target.name]: e.target.value
   }) 
}

const { mascota, dueño , fecha, hora, Sintomas } = cita;

 const submitCita = e => {
    e.preventDefault();
    // validar    
    if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === ''  || hora.trim() === ''  || Sintomas.trim() === ''){
        actualizarError(true);
        return
    }
    // Asignar un id
     actualizarCita(false)
     cita.id = uuidv4();
    // crear la citas
    crearCtia(cita);

    // reinciar el form

    actualizarCita({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        Sintomas: ''

    })
} 

    return(
       <>
       <h2>Crear Cita</h2>

       {error ? <p className="alerta-error"> Todo los campos son obligatorios</p> : null }
       <form onSubmit={submitCita}>
         <label htmlFor="">Nombre Mascota</label>
         <input type="text" name="mascota"
          className="u-full-width" placeholder="Nombre mascota"
           onChange={actualizarState}
           value={mascota}
            />

         <label htmlFor="">Nombre Dueño</label>
         <input type="text" name="dueño"
          className="u-full-width" placeholder="Nombre Dueño"
          onChange={actualizarState} 
           value={dueño}/>

         <label htmlFor="">Fecha</label>
         <input type="date" name="fecha"
          className="u-full-width"
          onChange={actualizarState}
           value={fecha}
          />

         <label htmlFor="">hora</label>
         <input type="time" name="hora"
          className="u-full-width"
          onChange={actualizarState}
           value={hora}
          />
           
           <label htmlFor="">Sintomas</label>
           <textarea className="u-full-width" name="Sintomas"
           onChange={actualizarState}
             value={Sintomas}></textarea>

           <button type="submit" className="u-full-width button-primary">Agregar cita</button>
       </form>
       </> 
       
    )
}

export default  Formulario;