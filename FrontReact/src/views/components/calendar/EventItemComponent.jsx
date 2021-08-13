import React, { useState, useEffect } from 'react'
import CalendarUpdateModal from './CalendarUpdateModal'

export const EventItemComponent = ({events,DeleteEvent,UpdateEvent,token,email,}) => {
  const [event, setEvent] = useState("")

  const deleteEvent = (id) => {
    DeleteEvent(id, token)
  }

  let updateModal = (item) => {
      setEvent(item)
  }
  return events.length === 0 ? null : (
    <>
      {(event) ? ( <CalendarUpdateModal
        item={event}
        token={token}
        UpdateEvent={UpdateEvent}
        eventChange={setEvent}
      />) : null}

      {events.map((item, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.summary}</td>
            <td>
              {item.description === undefined
                ? 'No existe descripción'
                : item.description}
            </td>
            <td>{item.organizer.email}</td>
            <td>
              <a
                target={item.hangoutLink === undefined ? '' : '_target'}
                href={
                  item.hangoutLink === undefined
                    ? '/calendar'
                    : item.hangoutLink
                }
              >
                {item.hangoutLink === undefined ? 'Reunión Presencial' : 'Meet'}
              </a>
            </td>
            <td>{item.start.dateTime.substring(0, 10)}</td>
            <td>{item.start.dateTime.substring(11, 16)}</td>
            <td>
              {item.organizer.email === email ? (
                <>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => updateModal(item)}
                    data-testid={'btn-test'}
                    data-toggle={'modal'}
                    data-target={'#modalUpdateEvent'}
                  >
                    <i className="bi bi-pencil-square" />
                  </button>
                  <button
                    data-testid={'btn-test-deleteEvent-' + item.id}
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEvent(item.id)}
                  >
                    <i className="bi bi-calendar2-x-fill" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-secondary mx-2"
                    data-toggle={'modal'}
                    data-target={'#modalUpdateEvent'}
                    disabled
                  >
                    <i className="bi bi-pencil-square" />
                  </button>
                  <button className="btn btn-secondary mx-2" disabled>
                    <i className="bi bi-calendar2-x-fill" />
                  </button>
                </>
              )}
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default EventItemComponent
