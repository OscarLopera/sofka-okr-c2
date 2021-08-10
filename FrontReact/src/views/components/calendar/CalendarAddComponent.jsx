import React from "react";

const CalendarAddComponent = ({AddEvent,token}) => {

    const addEvent = () => {
        const eventObject = {
            kind: "calendar#rko",
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

  return(
      <div>
          <form action="">

          </form>
          <button className=" mr-3 btn btn-primary px-4" data-testid={"btn-test"}
                  onClick={() => addEvent()}>post<i className="bi bi-door-open-fill"/>
          </button>
      </div>
  )
}

export default CalendarAddComponent;