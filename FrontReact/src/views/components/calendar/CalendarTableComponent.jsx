import React from "react";
import "../../assets/styles/calendar/table.css";

const CalendarTableComponent = ({ children }) => (

    <section>
        <h1>Lista de eventos</h1>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Ubicación</th>
                        <th>Organizador</th>
                        <th>Link</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>

    </section>

);

export default CalendarTableComponent;