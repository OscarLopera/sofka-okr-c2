import React, {Fragment, useState} from 'react'
import Select from "react-select";
import socket from '../../../infrastructure/services/api/notifications/socket';

const CalendarUpdateModal = ({UpdateEvent, token, item}) => {
    let date = new Date().toLocaleDateString().split('/');
    date[1] = date[1] < 10 ? '0' + date[1] : date[1];
    date = date[2] + '-' + date[1] + '-' + date[0];
    const currentDate = item.start.dateTime.substring(0, 10)
    const currentDescription = item.description
    const currentStartTime = item.start.dateTime.substring(11, 16)
    const currentEndTime = item.end.dateTime.substring(11, 16)
    const currentAtenders = item.attendees
    const [startDate, setStartDate] = useState(currentDate);
    const [description, setDescription] = useState(currentDescription);
    const [attendees, setAttendees] = useState(currentAtenders);
    const [startTime, setStartTime] = useState(currentStartTime)
    const [endTime, setEndTime] = useState(currentEndTime)


    const updateEvent = () => {
        const eventObject = {
            id: item.id,
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
        UpdateEvent(eventObject, token)
        socket.emit("")

    }

    return (
        <Fragment>
            <button className="btn btn-primary mx-2" data-testid={"btn-test"} data-toggle={"modal"}
                    data-target={"#modalUpdateEvent"}
            ><i className="bi bi-pencil-square"/>
            </button>

            <div id={"modalUpdateEvent"} className={"modal fade container"}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar Evento</h5>
                            <button type="button" className={"btn close"} data-dismiss="modal">
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                        <div className="modal-body container row">
                            <label>Dia del Evento</label>
                            <input type={"date"} min={date} value={startDate} className={"form-control"}
                                   onChange={event => setStartDate(event.target.value)}/>
                            <label className="col">Hora Inicial</label>
                            <label className="col">Hora Final</label>
                            <div className="w-100"/>
                            <input placeholder="Selected time" type={"time"} id={"input_starttime"}
                                   className={"form-control col"} value={startTime}
                                   onChange={event => setStartTime(event.target.value)}/>
                            <input placeholder="Selected time" type={"time"} id={"input_endttime"}
                                   className={"form-control timepicker col"} value={endTime}
                                   min={startTime}
                                   onChange={event => setEndTime(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Descripcion</label>
                            <input type={"text"} value={description} className={"form-control"}
                                   onChange={event => setDescription(event.target.value)}/>

                            <hr className="my-4"/>
                            <label>Invitados</label>
                            <Select isMulti options={attendees} placeholder={"Selecciona los correos"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            >Cancelar
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={() => updateEvent()}
                            >Actualizar Evento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CalendarUpdateModal
