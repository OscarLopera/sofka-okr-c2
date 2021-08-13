import React, {useEffect, useState} from 'react';
import Select from "react-select";
import validator from 'validator'

export const CalendarAddComponent = ({AddEvent, token, userEmails}) => {

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
                value: {email: item.email},
                label: item.name + " - " + item.email
            }
        })
    }

    const validateEmail = (e) => {
        if (!validator.isEmail(e)) {
            setExternalAttendees(e)
            setEmailError('Enter valid Email!')
        } else {
            setEmailError("")
            setExternalAttendees(e)
        }
    }

    const updateAttendeesList = () => {
        if (emailError === "") {
            setExternalAttendeesList(list => [...list, externalAttendees])
            setExternalAttendees("")
        } else {
            return null;
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
    }

    const addEvent = () => {
        if (externalAttendeesList.length > 0) {
            externalAttendeesList.forEach(element => {
                let aux = attendees;
                aux.push({email:element})
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
                    conferenceSolutionKey: {type: "hangoutsMeet"}
                },
            },
            attendees: attendees,
            reminders: {
                useDefault: "useDefault",
            },
            sendUpdates: "all"
        }
        AddEvent(eventObject, token)
        clearData()

    }

    return (
        <div>
            <button className=" mr-3 btn btn-primary px-4"
                    data-testid={"btn-test-openModalAddEvent"}
                    data-toggle={"modal"}
                    data-target={"#modalAddEvent"}>
                Agregar Evento <i className="bi bi-plus-square"/>
            </button>
            <div id={"modalAddEvent"} className={"modal fade container"}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar Evento</h5>
                            <button type="button"
                                    className={"btn close"}
                                    data-dismiss="modal">
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                        <div className="modal-body container row">
                            <form onSubmit={addEvent}>
                                <label>Dia del Evento</label>
                                <input data-testid={"input-test-date"}
                                       required={true}
                                       type={"date"}
                                       min={date[0]}
                                       value={startDate}
                                       className={"form-control"}
                                       onChange={event => setStartDate(event.target.value)}/>
                                <hr className="my-4"/>
                                <label className="col">Hora Inicial</label>
                                <input data-testid={"input-test-timeStart"}
                                       required={true}
                                       placeholder="Selected time" type={"time"}
                                       id={"input_starttime"}
                                       className={"form-control col"}
                                       onChange={event => setStartTime(event.target.value)}/>
                                <hr className="my-4"/>
                                <label className="col">Hora Final</label>
                                <input data-testid={"input-test-timeEnd"}
                                       required={true}
                                       placeholder="Selected time"
                                       type={"time"}
                                       id={"input_endttime"}
                                       className={"form-control timepicker col"}
                                       min={startTime}
                                       onChange={event => setEndTime(event.target.value)}/>
                                <hr className="my-4"/>
                                <label>Descripcion</label>
                                <input data-testid={"input-test-descriptionAddEvent"}
                                       required={true}
                                       minLength={10}
                                       maxLength={50}
                                       type={"text"}
                                       value={description}
                                       className={"form-control"}
                                       onChange={event => setDescription(event.target.value)}/>
                                <hr className="my-4"/>
                                <label>Invitados Internos</label>
                                <Select isMulti
                                        options={attendeesList}
                                        onChange={addAttendees}
                                        placeholder={"Selecciona los correos"}/>
                                <hr className="my-4"/>
                                <label>Invitados Externos</label>
                                <br/>
                                {externalAttendeesList.map((item, index) => {
                                    return <label key={index} className="border border-dark rounded bg-light">
                                        {item} <a
                                        onClick={event => deleteExternalAttendees(item)}
                                        className="bi bi-x-circle"/>
                                    </label>
                                })}
                                <br/>
                                <input data-testid={"input-test-external"}
                                       className={"form-control"}
                                       minLength={10}
                                       maxLength={50}
                                       type={"email"}
                                       value={externalAttendees}
                                       onChange={event => validateEmail(event.target.value)}/>
                                <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span>
                                <br/>
                                <button className={"btn btn-primary"}
                                        type={"button"}
                                        onClick={updateAttendeesList}>Agregar Correo
                                </button>
                                <hr className="my-4"/>
                                <button data-testid={"btn-test-cancelEvent"}
                                        type="button"
                                        className={"btn btn-secondary px-5 mr-4"}
                                        data-dismiss="modal"
                                        onClick={() => clearData()}>
                                    Cancelar
                                </button>
                                <button data-testid={"btn-test-addEvent"}
                                        type="submit"
                                        className="btn btn-primary px-5 ">Agregar Evento
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarAddComponent;