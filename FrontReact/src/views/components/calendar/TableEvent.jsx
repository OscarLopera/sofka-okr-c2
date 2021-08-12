import React from 'react'
import EventItem from '../../components/calendar/EventItem'

const TableEvent = ({events, DeleteEvent, UpdateEvent, email, token}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Organizador</th>
                <th scope="col">Link</th>
                <th scope="col">Fecha Reunión</th>
                <th scope="col">Hora</th>
                <th scope="col">Opciones</th>
            </tr>
            </thead>
            <tbody>
            {
                (events === undefined) ? (
                        <div className="spinner-border text-info m-5 justify-content-center" role="status">
                            <span className="sr-only"/></div>) :
                    <EventItem events={events}
                               DeleteEvent={DeleteEvent}
                               token={token}
                               UpdateEvent={UpdateEvent}
                               email={email}/>
            }
            </tbody>
        </table>
    )
}

export default TableEvent;
