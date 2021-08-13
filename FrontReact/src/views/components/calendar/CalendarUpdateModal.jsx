import React, { Fragment, useState, useEffect } from 'react'
import Select from "react-select";
import socket from '../../../infrastructure/services/api/notifications/socket';
import validator from 'validator'

export const CalendarUpdateModal = ({ UpdateEvent, token, item, eventChange, userEmails }) => {
    let date = new Date().toLocaleDateString().split('/')
    date[1] = date[1] < 10 ? '0' + date[1] : date[1]
    date = date[2] + '-' + date[1] + '-' + date[0]
    const currentDate = item.start.dateTime.substring(0, 10)
    const currentDescription = item.description;
    const currentStartTime = item.start.dateTime.substring(11, 16)
    const currentEndTime = item.end.dateTime.substring(11, 16)
    const currentAtendees = item.attendees ? item.attendees.map(attendee => attendee.email) : []

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
    }, [currentDate, currentDescription, currentEndTime, currentStartTime, userEmails])

    console.log(userEmails)
    const listTransform = (list) => {
        if (list) {
            return list.map(item => {
                return {
                    value: { email: item.email },
                    label: item.name + " - " + item.email
                }
            })
        }
    }

    const updateGuestList = () => {
        if (guestsList.includes(guest)) {
            setGuest('')
            return guestsList
        }
        if (!validator.isEmail(guest)) {
            setEmailError('¡Ingresa un gmail valido para continuar!')
            setTimeout(() => {
                setEmailError("")
            }, 3000)
        } else {
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
        let finalAtendees = [...attendees, ...guestsList.map(user => {
            return { email: user }
        })]
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
        socket.emit("")
    }


    return (
        <Fragment>

            <div id={'modalUpdateEvent'}
                className={'modal fade'}
                data-backdrop="static"
                data-keyboard="false"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">
                                Actualizar Evento
                            </h4>
                        </div>
                        <div className="modal-body container row">
                            <form onSubmit={updateEvent}>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Día del evento </span>
                                    <input
                                        data-testid={"input-test-start-date"}
                                        type={'date'}
                                        min={date}
                                        required={true}
                                        value={startDate}
                                        className={'form-control'}
                                        onChange={(event) => setStartDate(event.target.value)}
                                    />
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-earmark-text"></i></span>
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
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Hora inicio </span>
                                    <input
                                        data-testid={"input-test-start-time"}
                                        placeholder="Selected time"
                                        type={'time'}
                                        id={'input_starttime'}
                                        className={'form-control col'}
                                        value={startTime}
                                        onChange={(event) => setStartTime(event.target.value)}
                                        required={true} />
                                    <span class="input-group-text">Hora final</span>
                                    <input
                                        data-testid={"input-test-end-time"}
                                        placeholder="Selected time"
                                        type={'time'}
                                        id={'input_endttime'}
                                        className={'form-control timepicker col'}
                                        value={endTime}
                                        min={startTime}
                                        required={true}
                                        onChange={(event) => setEndTime(event.target.value)} />
                                </div>

                                <label>Invitados Internos</label>
                                <br />
                                <Select isMulti
                                    options={attendeesList}
                                    onChange={addAttendees}
                                    placeholder={"Selecciona los correos"} />
                                <br />
                                <label>Invitados Externos</label>
                                <br />
                                {guestsList.map((item, index) => {
                                    return (
                                        <label key={index} className="border border-dark rounded bg-light my-3 ms-1">
                                            {item}{' '}
                                            <a data-testid={"btn-test-delete-guest"}
                                                onClick={(event) => deletGuest(item)}
                                                className="mx-1" ><i class="bi bi-x-circle-fill"></i></a>
                                        </label>
                                    )
                                })}

                                <br />
                                <div class="input-group mb-2">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-people"></i></span>
                                    <input
                                        data-testid={"input-test-guest-email"}
                                        type="email"
                                        className="form-control"
                                        placeholder="email"
                                        onChange={(event) => setGuest(event.target.value)}
                                        value={guest}
                                    />
                                    <button data-testid={"btn-test-external-update"} className={"btn btn-primary"}
                                        type={"button"}
                                        onClick={updateGuestList}>Agregar Correo
                                    </button>
                                </div>
                                <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
                                <hr className="my-4" />

                                <div className="text-center">


                                    <button
                                        data-testid={"button-test-update-event"}
                                        type="submit" 
                                        className="btn btn-success mx-2 px-2">
                                        Actualizar Evento
                                    </button>

                                    <button data-testid={"button-test-cancel-event"}
                                        type="button"
                                        className="btn btn-danger px-5"
                                        data-dismiss="modal"
                                        onClick={(event) => {
                                            clearData()
                                        }}
                                    >
                                        Cancelar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CalendarUpdateModal
