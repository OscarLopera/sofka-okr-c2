import React, { useState } from 'react';
import Select from "react-select";
import Modal from 'react-bootstrap/Modal'

export const CalendarAddComponent = ({ AddEvent, token }) => {

    let currentDate = new Date()

    const date = (currentDate.toISOString().split('T', 8))
    const time = currentDate.getHours() + ":" + currentDate.getMinutes()

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(date[0]);
    const [description, setDescription] = useState("");
    const [attendees, setAttendees] = useState([]);
    const [startTime, setStartTime] = useState(time)
    const [endTime, setEndTime] = useState(time)
    const [externalAttendees, setExternalAttendees] = useState("");
    const [attendeesList, setAttendeesList] = useState([
        {
            value: { email: "sebas99cano@gmail.com" },
            label: "sebas99cano@gmail.com"
        },
        {
            value: { email: "sebas.cano1036@gmail.com" },
            label: "sebas.cano1036@gmail.com"
        },
        {
            value: { email: "anahernandez814@gmail.com" },
            label: "anahernandez814@gmail.com"
        },
        {
            value: { email: "danielaristy22@gmail.com" },
            label: "danielaristy22@gmail.com"
        },
        {
            value: { email: "dacastamerd@gmail.com" },
            label: "dacastamerd@gmail.com"
        }
    ])

    const addAttendees = (e) => {
        // eslint-disable-next-line array-callback-return
        e.map(eElement => {
            setAttendeesList(attendeesList.filter(listElement => eElement !== listElement))
        })
        setAttendees(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const clearData = () => {
        setStartDate(date[0])
        setDescription("")
        setStartTime(time)
        setEndTime(time)
        setExternalAttendees("")
        setShow(false)
    }

    const addEvent = () => {

        if (externalAttendees !== "") {
            let inv = attendees;
            inv.push({ email: externalAttendees });
            setAttendees(inv)
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
        setDescription("")
        setAttendees([])
        setStartTime(time)
        setEndTime("")
        AddEvent(eventObject, token)
        clearData()
        handleClose()
    }

    return (
        <div>
            <button className=" mr-3 btn btn-primary px-4"
                onClick={handleShow}>Agregar Event0 <i className="bi bi-plus-square" />
            </button>
            
            <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h5 className="modal-title" id="exampleModalLabel">Agregar Evento</h5>
                    </Modal.Title>
                    <closeButton type="button" onClick={clearData}><i className="bi bi-x-lg" /></closeButton>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addEvent} >
                        <label>Dia del Evento</label>
                        <input data-testid={"input-test-date"}
                            required={true}
                            type={"date"}
                            min={date[0]}
                            value={startDate}
                            className={"form-control"}
                            onChange={event => setStartDate(event.target.value)} />
                        <hr className="my-4" />
                        <label className="col">Hora Inicial</label>
                        <input data-testid={"input-test-timeStart"}
                            required={true}
                            placeholder="Selected time" type={"time"}
                            id={"input_starttime"}
                            className={"form-control col"}
                            onChange={event => setStartTime(event.target.value)} />
                        <hr className="my-4" />
                        <label className="col">Hora Final</label>
                        <input data-testid={"input-test-timeEnd"}
                            required={true}
                            placeholder="Selected time"
                            type={"time"}
                            id={"input_endttime"}
                            className={"form-control timepicker col"}
                            min={startTime}
                            onChange={event => setEndTime(event.target.value)} />
                        <hr className="my-4" />
                        <label>Descripcion</label>
                        <input data-testid={"input-test-descriptionAddEvent"}
                            required={true}
                            minLength={5}
                            maxLength={20}
                            type={"text"}
                            value={description}
                            className={"form-control"}
                            onChange={event => setDescription(event.target.value)} />
                        <hr className="my-4" />
                        <label>Invitados Internos</label>
                        <Select isMulti
                            options={attendeesList}
                            onChange={addAttendees}
                            placeholder={"Selecciona los correos"} />
                        <hr className="my-4" />
                        <label>Invitados Externos</label>
                        <input data-testid={"input-test-external"}
                            className={"form-control"}
                            minLength={5}
                            maxLength={35}
                            type={"email"}
                            value={externalAttendees}
                            onChange={event => setExternalAttendees(event.target.value)} />
                        <hr className="my-4" />
                        <button type="button" className={"btn btn-secondary px-5 mr-4"} onClick={() => clearData()}>
                             Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary px-5">
                             Agregar Evento
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CalendarAddComponent;