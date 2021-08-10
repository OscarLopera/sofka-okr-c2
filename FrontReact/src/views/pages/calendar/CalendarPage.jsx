
import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import {auth} from "../../../infrastructure/services/firebase/config/firebase";
import {getCalendar} from "../../../application/selectors/calendar/calendarSelector";
import {bindActionCreators} from "redux";
import {AddEvent, ListEvents} from "../../../application/actions/calendar/calendarActions";
import {connect} from "react-redux";
import CalendarAddComponent from "../../components/calendar/CalendarAddComponent";
// import CalendarListComponent from '../../components/calendar/CalendarListComponent'

const CalendarPage = ({calendar, AddEvent, ListEvents}) => {

    const [token, setToken] = useState('');

    const load = () => {
        let provider = new auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar.events');
        auth().signInWithPopup(provider).then(result => {
            setToken(result.credential.accessToken)
            console.log("token", token)
        }).catch(error => {
            console.log(error)
        })
    }

    const list = () => ListEvents(token);

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Instructions</h1>
                    <button className=" mr-3 btn btn-primary px-4" data-testid={"btn-test"}
                            onClick={() => load()}>authenticate<i className="bi bi-door-open-fill"/>
                    </button>
                    <CalendarAddComponent AddEvent={AddEvent} token={token}/>
                    <button className=" mr-3 btn btn-primary px-4" data-testid={"btn-test"}
                            onClick={() => list()}>getListEvents<i className="bi bi-door-open-fill"/>
                    </button>
                    {/* <CalendarListComponent ListEvent={ListEvent} events={events} /> */}
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
                        select={""}
                        eventContent={""}
                        eventClick={""}
                        eventsSet={""}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        calendar: getCalendar(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({AddEvent,ListEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);