import React from 'react'
import CalendarUpdateModal from './CalendarUpdateModal'

const CalendarItem = ({events, DeleteEvent,UpdateEvent, token,email}) => {
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
                        <td>{item.start.dateTime.substring(0, 10).replaceAll("-","/")}</td>
                        <td>{item.start.dateTime.substring(11, 16)}</td>
                        <div>

                        {item.organizer.email=== email?<>
                            <CalendarUpdateModal item={item} token={token} UpdateEvent={UpdateEvent}/>
                        <button className="btn btn-danger mx-2" onClick={() => deleteEvent(item.id)}><i
                                className="bi bi-calendar2-x-fill"/></button>
                        </>:<>
                        <button className="btn btn-secondary mx-2" data-testid={"btn-test"} data-toggle={"modal"}
                        data-target={"#modalUpdateEvent"} disabled
                        ><i className="bi bi-pencil-square"/>
                        </button>
                        <button className="btn btn-secondary mx-2" disabled ><i
                        className="bi bi-calendar2-x-fill"/></button>
                                </>}
                        </div>
                    </tr>
                </>)
            })
        )
    )

}

export default CalendarItem
