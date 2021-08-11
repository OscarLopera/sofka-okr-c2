import React from "react";
import "../../assets/styles/calendar/table.css";

const CalentarTable = ({ children }) => (

    <section>
        <h1>Lista de eventos</h1>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
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
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    </section>

);

export default CalentarTable;