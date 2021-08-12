import React, {useState} from 'react';
import Select from "react-select";

const CalendarAddComponent = ({AddEvent, token}) => {

    let currentDate =  new Date().toLocaleDateString().split('/');
    currentDate[1]= currentDate[1] < 10 ? '0'+currentDate[1] : currentDate[1];
    currentDate = currentDate[2]+'-'+currentDate[1]+'-'+currentDate[0];

    const date = (currentDate.toISOString().split('T', 8))
    const time = currentDate.getHours()+":"+ currentDate.getMinutes()

    const [startDate, setStartDate] = useState(date[0]);
    const [description, setDescription] = useState("");
    const [attendees, setAttendees] = useState([]);
    const [startTime,setStartTime]= useState(time)
    const [endTime,setEndTime]= useState(time)

    const attendeesList = [
        {
            value: {email: "sebas99cano@gmail.com"},
            label: "sebas99cano@gmail.com"
        },
        {
            value: {email: "sebas.cano1036@gmail.com"},
            label: "sebas.cano1036@gmail.com"
        },
        {
            value: {email: "anahernandez814@gmail.com"},
            label: "anahernandez814@gmail.com"
        },
        {
            value: {email: "danielaristy22@gmail.com"},
            label: "danielaristy22@gmail.com"
        },
        {
            value: {email: "dacastamerd@gmail.com"},
            label: "dacastamerd@gmail.com"
        }
    ]


    const addAttendees = (e) => {
        setAttendees(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const clearData = () => {
        setStartDate(date[0])
        setDescription("")
        setAttendees([])
        setStartTime(time)
        setEndTime(time)
    }

    const addEvent = () => {
        const eventObject = {
            summary: "OKR",
            description: description,
            start: {
                dateTime: startDate+"T"+startTime + ":00-05:00",
                timeZone: "America/Bogota"
            },
            end: {
                dateTime: startDate + "T" + endTime+":00-05:00",
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
        setDescription("")
        setAttendees([])
        setStartTime(time)
        setEndTime("")
        AddEvent(eventObject, token)
        clearData()
    }

    return (
        <div>
            <button className=" mr-3 btn btn-primary px-4"
                    data-testid={"btn-test-openModalAddEvent"}
                    data-toggle={"modal"}
                    data-target={"#modalAddEvent"}>Agregar Evento <i className="bi bi-plus-square"/>
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
                            <label>Dia del Evento</label>
                            <input data-testid={"input-test-date"}
                                   type={"date"}
                                   min={date[0]}
                                   value={startDate}
                                   className={"form-control"}
                                   onChange={event => setStartDate(event.target.value)}/>
                            <label className="col">Hora Inicial</label>
                            <label className="col">Hora Final</label>
                            <div className="w-100"/>
                            <input data-testid={"input-test-timeStart"}
                                   placeholder="Selected time" type={"time"}
                                   id={"input_starttime"}
                                   className={"form-control col"}
                                   onChange={event => setStartTime(event.target.value)}/>
                            <input data-testid={"input-test-timeEnd"}
                                   placeholder="Selected time"
                                   type={"time"}
                                   id={"input_endttime"}
                                   className={"form-control timepicker col"}
                                   min={startTime}
                                   onChange={event => setEndTime(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Descripcion</label>
                            <input data-testid={"input-test-descriptionAddEvent"}
                                   type={"text"}
                                   value={description}
                                   className={"form-control"}
                                   onChange={event => setDescription(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Invitados</label>
                            <Select isMulti
                                    options={attendeesList}
                                    onChange={addAttendees}
                                    placeholder={"Selecciona los correos"}/>
                        </div>
                        <div className="modal-footer">
                            <button data-testid={"btn-test-cancelEvent"}
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() => clearData()}>
                                    Cancelar</button>
                            <button data-testid={"btn-test-addEvent"}
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={() => addEvent()}
                                    >Agregar Evento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarAddComponent;