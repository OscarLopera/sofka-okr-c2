import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

const CalendarPage = () => {

    const gapi = window.gapi
    const CLIENT_ID = "618457073189-ef3vd653lm20qg4eajpucqltb5a5vtb5.apps.googleusercontent.com";
    const API_KEY = "AIzaSyC3cJoC1GxeTASWV5HzwG-UUo-OOKn8Bnc";

    gapi.load("client:auth2", function () {
        gapi.auth2.init({client_id: CLIENT_ID});
    });

    const authenticate = () => {
        return gapi.auth2.getAuthInstance().signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly"}).then(() => {
                gapi.client.setApiKey(API_KEY);
                gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest").then(() => {
                    console.log("API connexion OK")
                }, (err) => {
                    console.error("Error loading API", err);
                });
            },
            (err) => {
                console.error("Error signing in", err);
            });
    }

    const executeListEvents = () => {
        return gapi.client.calendar.events.list({
            "calendarId": "primary",
            "orderBy": "updated",
        }).then((response) => {
            const items = response.result.items;
            if (items.length) {
                items.map(element => {
                    if (element.summary === "OKR") {
                        console.log(element)
                    }
                })
            }
        }, (err) => {
            console.error("Execute error", err);
        });
    }

    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo)
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        calendarApi.unselect()
        if (title) {
            const eventoP = {
                id: "aaaaaa",
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            }
            calendarApi.addEvent(eventoP)
            console.log(eventoP)
        }
    }

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }


    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Instructions</h1>
                    <button className=" mr-3 btn btn-primary px-4" data-testid={"btn-test"}
                            onClick={() => authenticate().then(executeListEvents)}>authenticate<i className="bi bi-door-open-fill"/>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        themeSystem={'bootstrap'}
                        headerToolbar={{
                            left: 'today prev',
                            center: 'title',
                            right: 'next dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                        }}
                        contentHeight={600}
                        initialView='dayGridMonth'
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        initialEvents={""}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={""}
                        eventsSet={""}
                    />
                </div>
            </div>
        </div>
    )
}

export default CalendarPage;