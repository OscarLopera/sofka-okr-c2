import React, {useState} from 'react';
import Select from "react-select";

const CalendarAddComponent = ({AddEvent, token}) => {

    const date = (new Date().toISOString().split('T', 8))

    const [startDate, setStartDate] = useState(date[0]);
    const [endDate, setEndDate] = useState(date[0]);
    const [description, setDescription] = useState("");
    const [attendees, setAttendees] = useState([]);

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

    const addEvent = () => {
        const eventObject = {
            summary: "OKR",
            description: description,
            start: {
                date: startDate,
                timeZone: "America/Bogota"
            },
            end: {
                date: endDate,
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
    }

    return (
        <div>
            <button className=" mr-3 btn btn-primary px-4" data-testid={"btn-test"} data-toggle={"modal"}
                    data-target={"#modalAddEvent"}
            >Agregar Evento <i className="bi bi-plus-square"/>
            </button>
            <div id={"modalAddEvent"} className={"modal fade"}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar Evento</h5>
                            <button type="button" className={"btn close"} data-dismiss="modal">
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input value={'OKR'}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary"
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