import React, { useEffect, useState } from 'react';
import Select from "react-select";
import socket from '../../../infrastructure/services/api/notifications/socket';
import validator from 'validator'

export const CalendarAddComponent = ({ AddEvent, token, userEmails, userId }) => {

    let currentDate = new Date()
    const date = (currentDate.toISOString().split('T', 8))
    const time = currentDate.getHours() + ":" + currentDate.getMinutes()

    const [startDate, setStartDate] = useState(date[0]);
    const [description, setDescription] = useState("");
    const [attendees, setAttendees] = useState([]);
    const [startTime, setStartTime] = useState(time)
    const [endTime, setEndTime] = useState(time)
    const [externalAttendees, setExternalAttendees] = useState("");
    const [externalAttendeesList, setExternalAttendeesList] = useState([])
    const [attendeesList, setAttendeesList] = useState([])
    const [emailError, setEmailError] = useState('')

    useEffect(() => {
        setAttendeesList(listTransform(userEmails))
    }, [userEmails])

    const listTransform = (list) => {
        return list.map(item => {
            return {
                value: { email: item.email },
                label: item.name + " - " + item.email
            }
        })
    }

    const validateEmail = (e) => {
        if (!validator.isEmail(e)) {
            setExternalAttendees(e)
            setEmailError('¡Ingresa un gmail valido para continuar!')
        } else {
            setEmailError("")
            setExternalAttendees(e)
        }
    }

    const updateAttendeesList = () => {
        if (externalAttendeesList.includes(externalAttendees)) {
            setExternalAttendees('')
        } else if (emailError === "" && externalAttendees !== "") {
            setExternalAttendeesList(list => [...list, externalAttendees])
            setExternalAttendees("")
        }
    }

    const deleteExternalAttendees = (item) => {
        setExternalAttendeesList(externalAttendeesList.filter(element => item !== element))
    }

    const addAttendees = (e) => {
        // eslint-disable-next-line array-callback-return
        e.map(eElement => {
            setAttendeesList(attendeesList.filter(listElement => eElement !== listElement))
        })
        setAttendees(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const clearData = () => {
        setStartDate(date[0])
        setDescription("")
        setStartTime(time)
        setEndTime(time)
        setExternalAttendees("")
        setExternalAttendeesList([])
    }

    const addEvent = () => {
        socket.emit("crear-evento",{id:userId.userId,manager:userId.userName})
        if (externalAttendeesList.length > 0) {
            externalAttendeesList.forEach(element => {
                let aux = attendees;
                aux.push({ email: element })
                setAttendees(aux)
            })
        }
        const eventObject = {
            summary: "OKR",
            description: description,
            start: {
                dateTime: startDate + "T" + startTime + ":00-05:00",
                timeZone: "America/Bogota"
            },
            end: {
                dateTime: startDate + "T" + endTime + ":00-05:00",
                timeZone: "America/Bogota"
            },
            conferenceData: {
                createRequest: {
                    requestId: "sample13",
                    conferenceSolutionKey: { type: "hangoutsMeet" }
                },
            },
            attendees: attendees,
            reminders: {
                useDefault: "useDefault",
            },
            sendUpdates: "all"
        }
       
        AddEvent(eventObject, token)
        socket.emit("crear-evento", { id: userId.userId, manager: userId.userName })
        clearData()
    }

    return (
        <div>
            <div className="my-4">
                <button className=" mr-3 btn btn-primary px-4"
                    data-testid={"btn-test-openModalAddEvent"}
                    data-toggle={"modal"}
                    data-target={"#modalAddEvent"}>
                    Agregar Evento <i className="bi bi-plus-square" />
                </button>
            </div>
            <div id={"modalAddEvent"} className={"modal fade"}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title font-weight-bold" id="exampleModalLabel">Agregar Evento</h4>
                            <button type="button"
                                className={"btn close"}
                                data-dismiss="modal">
                                <i className="bi bi-x-lg" />
                            </button>
                        </div>
                        <div className="modal-body container row">

                            <form onSubmit={addEvent}>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Día del evento </span>
                                    <input data-testid={"input-test-date"}
                                        required={true}
                                        type={"date"}
                                        min={date[0]}
                                        value={startDate}
                                        className={"form-control"}
                                        onChange={event => setStartDate(event.target.value)} />

                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-file-earmark-text"/></span>
                                    <input data-testid={"input-test-descriptionAddEvent"}
                                        required={true}
                                        minLength={10}
                                        maxLength={50}
                                        type={"text"}
                                        value={description}
                                        className={"form-control"}
                                        placeholder="Descripción"
                                        onChange={event => setDescription(event.target.value)} />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Hora inicio </span>
                                    <input data-testid={"input-test-timeStart"}
                                        required={true}
                                        placeholder="Selected time" type={"time"}
                                        id={"input_starttime"}
                                        className={"form-control col"}
                                        onChange={event => setStartTime(event.target.value)} />
                                    <span className="input-group-text">Hora final</span>
                                    <input data-testid={"input-test-timeEnd"}
                                        required={true}
                                        placeholder="Selected time"
                                        type={"time"}
                                        id={"input_endttime"}
                                        className={"form-control timepicker col"}
                                        min={startTime}
                                        onChange={event => setEndTime(event.target.value)} />
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
                                {externalAttendeesList.map((item, index) => {
                                    return <label key={index} className="border border-dark rounded bg-light my-3 ms-1">
                                        {item}<a
                                            data-testid={"btn-delete-external-" + item}
                                            onClick={event => deleteExternalAttendees(item)}
                                            className="mx-1" ><i className="bi bi-x-circle-fill"/></a>
                                    </label>
                                })}
                                <br />
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-people"/></span>
                                    <input data-testid={"input-test-external"}
                                        className={"form-control"}
                                        minLength={10}
                                        maxLength={50}
                                        type={"email"}
                                        placeholder="Agregar correos externos"
                                        value={externalAttendees}
                                        onChange={event => validateEmail(event.target.value)} />
                                    <button data-testid={"btn-test-external-update"} className={"btn btn-primary"}
                                        type={"button"}
                                        onClick={updateAttendeesList}>Agregar Correo
                                    </button>
                                </div>
                                <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
                                <hr className="my-4" />

                                <div className="text-center">
                                    <button data-testid={"btn-test-addEvent"}
                                        type="submit"
                                        className="btn btn-success mx-4 px-2">Agregar Evento
                                    </button>

                                    <button data-testid={"btn-test-cancelEvent"}
                                        type="button"
                                        className={"btn btn-danger px-4"}
                                        data-dismiss="modal"
                                        onClick={() => clearData()}>
                                        Cancelar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarAddComponent;