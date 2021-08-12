import React from 'react'

const CalendarItem = ({events, DeleteEvent, token}) => {
    const deleteEvent = (id) => {
        DeleteEvent(id, token)
    }
    return (
        (events.length === 0) ? <p>No existen datos</p> : (
            events.map((item, i) => {
                return (<>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{item.summary}</td>
                        <td>{(item.location === undefined) ? 'Quedate en Casa' : item.location}</td>
                        <td>{item.organizer.email}</td>
                        <td><a target={(item.hangoutLink === undefined) ? '' : '_target'}
                               href={(item.hangoutLink === undefined) ? '/calendar' : item.hangoutLink}>{(item.hangoutLink === undefined) ? 'Reunión Presencial' : 'Meet'}</a>
                        </td>
                        <td>{item.end.dateTime}</td>
                        <div>
                            <button className="btn btn-primary mx-2"><i className="bi bi-pencil-square"/></button>
                            <button className="btn btn-danger mx-2" onClick={() => deleteEvent(item.id)}><i
                                className="bi bi-calendar2-x-fill"/></button>
                        </div>
                    </tr>
                </>)
            })
        )
    )

}

export default CalendarItem
