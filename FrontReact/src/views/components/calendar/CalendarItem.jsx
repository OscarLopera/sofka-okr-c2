import React from 'react'

const CalendarItem = ({eventos, DeleteEvent, token}) => {
    const deleteEvent = (id)=>{
        DeleteEvent(id,token)
    }
    return (
        (eventos.length == 0)? <p>No existen datos</p>:(
            eventos.map((item, i) => {
                return (<>
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{item.summary}</td>
                        <td>{(item.location === undefined)?'Quedate en Casa':item.location}</td>
                        <td>{item.organizer.email}</td>
                        <td><a target={(item.hangoutLink === undefined)? '':'_target'} href={(item.hangoutLink === undefined)? '/calendar':item.hangoutLink}>{(item.hangoutLink === undefined)? 'Reunión Presencial': 'Meet'}</a></td>
                        <td>{item.end.date}</td>
                        <div >
                            <button className="btn btn-primary mx-2">Actualizar</button>
                            <button className="btn btn-danger mx-2" onClick={()=> deleteEvent(item.id)} >Cancelar</button> 
                        </div>
                    </tr>
                </>)
            })
        )
    )
        
}

export default CalendarItem
