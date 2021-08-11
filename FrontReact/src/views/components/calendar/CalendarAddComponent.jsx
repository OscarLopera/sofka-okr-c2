import React from "react";

const CalendarAddComponent = ({AddEvent, token}) => {

    const addEvent = () => {
        const eventObject = {
            kind: "calendar#event",
            summary: "OKR",
            description: "titulo del OKR",
            location: "veremos....",
            start: {
                dateTime: "2021-08-10T13:00:00",
                timeZone: "America/Bogota"
            },
            end: {
                dateTime: "2021-08-10T14:00:00",
                timeZone: "America/Bogota"
            },

            conferenceData: {
                createRequest: {
                    requestId: "sample13",
                    conferenceSolutionKey: {type: "hangoutsMeet"}
                },
            },
            attendees: [
                {email: "sebas99cano@gmail.com"},
                {email: "sebas.cano1036@gmail.com"},
                {email: "juan_cano82161@elpoli.edu.co"},
                {email: "anahernandez814@gmail.com"}
            ],
            reminders: {
                useDefault: "useDefault",
                overrides: [
                    {method: 'email', minutes: 60 * 24},
                    {method: 'popup', minutes: 10}
                ]
            },
            sendUpdates: "all",
            source: {
                title: "example",
                url: "http://localhost:3000"
            }
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