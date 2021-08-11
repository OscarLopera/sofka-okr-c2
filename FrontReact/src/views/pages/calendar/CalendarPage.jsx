import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { getEvents } from "../../../application/selectors/calendar/calendarSelector";
import { bindActionCreators } from "redux";
import { AddEvent, ListEvents, DeleteEvent } from "../../../application/actions/calendar/calendarActions";
import { connect } from "react-redux";
import CalendarAddComponent from "../../components/calendar/CalendarAddComponent";
import { getUser } from "../../../application/selectors/administration/user";
import CalendarItem from '../../components/calendar/CalendarItem'


const CalendarPage = ({ eventos, AddEvent, ListEvents, DeleteEvent, user }) => {
    useEffect(() => {
        ListEvents(user.userToken)
    }, [ListEvents])

    const listEventsCalendar = () => {

        const test = eventos.map(function (event) {
            return {
                title: event.summary,
                start: event.start.dateTime
            }
        })

        return test;
    }

    console.log(listEventsCalendar())


    return (
        <>
            <div className={"container"}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Instructions</h1>
                        <CalendarAddComponent AddEvent={AddEvent} token={user.userToken} />
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
                            initialView="dayGridMonth"
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            eventClick={""}
                            eventsSet={""}
                            events={listEventsCalendar()}
                        />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <CalendarAddComponent AddEvent={AddEvent} token={user.userToken} />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Ubicación</th>
                            <th scope="col">Organizador</th>
                            <th scope="col">Link</th>
                            <th scope="col">Fecha Reunión</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (eventos === undefined) ? (<div className="spinner-border text-info m-5 justify-content-center" role="status">
                                <span className="sr-only" ></span></div>) :
                                <CalendarItem eventos={eventos} DeleteEvent={DeleteEvent} token={user.userToken} />
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        eventos: getEvents(state),
        user: getUser(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AddEvent, ListEvents, DeleteEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);