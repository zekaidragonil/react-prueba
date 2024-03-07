import React from "react";

const Citas = ({cita, eliminarCita}) => (
    
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.dueño}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintoma: <span>{cita.Sintomas}</span></p>

        <button className="button eliminar u-full-width"
         onClick={() => eliminarCita(cita.id)}>
            Eliminar &time;
        </button>
    </div>
)

export default Citas;