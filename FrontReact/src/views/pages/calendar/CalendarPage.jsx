import React, {useEffect} from 'react'
import {getEvents} from "../../../application/selectors/calendar/calendarSelector";
import {bindActionCreators} from "redux";
import {AddEvent, DeleteEvent, ListEvents,UpdateEvent} from "../../../application/actions/calendar/calendarActions";
import {connect} from "react-redux";
import CalendarAddComponent from "../../components/calendar/CalendarAddComponent";
import {getUser} from "../../../application/selectors/administration/user";
import TableEvent from '../../components/calendar/TableEvent'
import Calendar from '../../components/calendar/Calendar'

const CalendarPage = ({events, AddEvent, ListEvents, DeleteEvent,UpdateEvent, user}) => {

    useEffect(() => {
        ListEvents(user.userToken)

    }, [ListEvents, user.userToken])

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Eventos</h1>
                    <CalendarAddComponent AddEvent={AddEvent} token={user.userToken}  />
                </div>
            </div>
            <div className={"row"}>
                <CalendarAddComponent AddEvent={AddEvent} token={user.userToken}/>
                <TableEvent events={events} DeleteEvent={DeleteEvent} token={user.userToken} UpdateEvent={UpdateEvent} email={user.userEmail}/>
            </div>
            <Calendar events={events}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: getEvents(state),
        user: getUser(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({AddEvent, ListEvents, DeleteEvent,UpdateEvent}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);