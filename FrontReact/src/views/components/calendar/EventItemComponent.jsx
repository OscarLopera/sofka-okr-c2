import React from 'react'
import socket from '../../../infrastructure/services/api/notifications/socket'
import CalendarUpdateModal from './CalendarUpdateModal'

export const EventItemComponent = ({events, DeleteEvent, UpdateEvent, token, email,userId}) => {
    const deleteEvent = (id) => {
        DeleteEvent(id, token)
        socket.emit("eliminar-evento",{id:userId.userId,manager:userId.userName})
    }

    return (
        (events.length === 0) ? "No hay elementos": (
            events.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.summary}</td>
                        <td>{(item.description === undefined) ? 'No existe descripción' : item.description}</td>
                        <td>{item.organizer.email}</td>
                        <td>
                            <a target={(item.hangoutLink === undefined) ? '' : '_target'}
                               href={(item.hangoutLink === undefined) ? '/calendar' : item.hangoutLink}>{(item.hangoutLink === undefined) ? 'Reunión Presencial' : 'Meet'}</a>
                        </td>
                        <td>{item.start.dateTime.substring(0, 10)}</td>
                        <td>{item.start.dateTime.substring(11, 16)}</td>
                        <td>
                            {item.organizer.email === email ? <>
                                <CalendarUpdateModal item={item} token={token} UpdateEvent={UpdateEvent} />
                                <button
                                    data-testid={"btn-test-deleteEvent-" + item.id}
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteEvent(item.id)}><i
                                    className="bi bi-calendar2-x-fill"/></button>
                            </> : <>
                                <button className="btn btn-secondary mx-2"
                                        data-toggle={"modal"}
                                        data-target={"#modalUpdateEvent"}
                                        disabled
                                ><i className="bi bi-pencil-square"/>
                                </button>
                                <button className="btn btn-secondary mx-2"
                                        disabled><i
                                    className="bi bi-calendar2-x-fill"/>
                                </button>
                            </>}
                        </td>
                    </tr>
                )
            })
        )
    )

}

export default EventItemComponent
