import React, { Fragment, useState, useEffect } from 'react'
import Select from "react-select";
import validator from 'validator'

export const CalendarUpdateModal = ({ UpdateEvent, token, item,eventChange,userEmails }) => {
  let date = new Date().toLocaleDateString().split('/')
  date[1] = date[1] < 10 ? '0' + date[1] : date[1]
  date = date[2] + '-' + date[1] + '-' + date[0]
  const currentDate = item.start.dateTime.substring(0, 10)
  const currentDescription = item.description;
  const currentStartTime = item.start.dateTime.substring(11, 16)
  const currentEndTime = item.end.dateTime.substring(11, 16)
  const currentAtendees= item.attendees?item.attendees.map(attendee => attendee.email):[]

  const [startDate, setStartDate] = useState("")
  const [description, setDescription] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [guest, setGuest] = useState('')
  const [guestsList, setGuestList] = useState(currentAtendees)
  const [attendeesList, setAttendeesList] = useState([])
  const [attendees, setAttendees] = useState([])

  useEffect(() => {
    setAttendeesList(listTransform(userEmails))
    setStartDate(currentDate)
    setDescription(currentDescription)
    setStartTime(currentStartTime)
    setEndTime(currentEndTime) 
  },[userEmails]) 


  const listTransform = (list) => {
    return list.map(item => {
        return {
            value: {email: item.email},
            label: item.name + " - " + item.email
        }
    })
}

  const updateGuestList = () => {
    if (guestsList.includes(guest)) {
      setGuest('')
      return guestsList
    }
    if (!validator.isEmail(guest)) {
      setEmailError('Enter valid Email!')
      setTimeout(() => {
          setEmailError("")
      }, 3000)
    }else{
    setGuestList((prevArrau) => [...prevArrau, guest])
    setGuest('')
    }
  }


  const addAttendees = (e) => {
    // eslint-disable-next-line array-callback-return
    e.map(eElement => {
        setAttendeesList(attendeesList.filter(listElement => eElement !== listElement))
    })
    setAttendees(Array.isArray(e) ? e.map(x => x.value) : [])
}


  const deletGuest = (item) => {
    setGuestList(guestsList.filter((element) => item !== element))
  }

  const clearData = () => {
    setGuest('')
    setGuestList([])
    eventChange("")
  }

  const updateEvent = () => {
      let finalAtendees = [...attendees,...guestsList.map(user=>{return {email:user}})]
    const eventObject = {
      id: item.id,
      summary: 'OKR',
      description: description,
      start: {
        dateTime: startDate + 'T' + startTime + ':00-05:00',
        timeZone: 'America/Bogota',
      },
      end: {
        dateTime: startDate + 'T' + endTime + ':00-05:00',
        timeZone: 'America/Bogota',
      },
      conferenceData: {
        createRequest: {
          requestId: 'sample13',
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
      attendees: finalAtendees,
      reminders: {
        useDefault: 'useDefault',
      },
      sendUpdates: 'all',
    }
    UpdateEvent(eventObject, token)
  }


  return (
    <Fragment>

      <div id={'modalUpdateEvent'} 
      className={'modal fade container'} 
      data-backdrop="static" 
      data-keyboard="false" 
      >
        <div className="modal-dialog modal-lg" role="document" >
          <div className="modal-content" >
            <div className="modal-header" >
              <h5 className="modal-title" id="exampleModalLabel">
                Actualizar Evento
              </h5>
            </div>
            <div className="modal-body container row">
              <form onSubmit={updateEvent}>
                <label>Dia del Evento</label>
                <input
                  data-testid={"input-test-start-date"}
                  type={'date'}
                  min={date}
                  required={true}
                  value={startDate}
                  className={'form-control'}
                  onChange={(event) => setStartDate(event.target.value)}
                />
                <hr className="my-4"/>
                <label className="col">Hora Inicial</label>
                <input
                  data-testid={"input-test-start-time"}
                  placeholder="Selected time"
                  type={'time'}
                  id={'input_starttime'}
                  className={'form-control col'}
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                  required={true}/>
                <hr className="my-4"/>
                <label className="col">Hora Final</label>
                <div className="w-100" />
                <input
                  data-testid={"input-test-end-time"}
                  placeholder="Selected time"
                  type={'time'}
                  id={'input_endttime'}
                  className={'form-control timepicker col'}
                  value={endTime}
                  min={startTime}
                  required={true}
                  onChange={(event) => setEndTime(event.target.value)}/>
                <hr className="my-4" />
                <label>Descripcion</label>
                <input
                  data-testid={"input-test-description"}
                  type={'text'}
                  value={description}
                  minLength={10}
                  maxLength={50}
                  className={'form-control'}
                  required={true}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <hr className="my-4" />
                <label>Invitados Internos</label>
                <Select isMulti
                    options={attendeesList}
                    onChange={addAttendees}
                    placeholder={"Selecciona los correos"}/>
                <hr className="my-4" />
                <label>Invitados Externos</label>
                <input
                  data-testid={"input-test-guest-email"}
                  type="email"
                  className="form-control"
                  placeholder="email"
                  onChange={(event) => setGuest(event.target.value)}
                  value={guest}
                />
                <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span>

                <a data-testid={"btn-test-update-guest"}
                  onClick={updateGuestList}
                  className="btn btn-primary form-control"
                >
                  {' '}
                  Agregar invitado
                </a>
                {guestsList.map((item, index) => {
                  return (
                    <label
                      key={index}
                      className="border border-dark rounded bg-light"
                    >
                      {item}{' '}
                      <a data-testid={"btn-test-delete-guest"}
                        onClick={(event) => deletGuest(item)}
                        className="bi bi-x-circle"
                        />
                    </label>
                  )
                })}
                <button data-testid={"button-test-cancel-event"}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={(event) => {
                    clearData()
                  }}
                >
                  Cancelar
                </button>
                <button
                    data-testid={"button-test-update-event"}
                    type="submit" className="btn btn-primary">
                  Actualizar Evento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default CalendarUpdateModal
