import React, {useEffect} from 'react'
import {getEmails, getEvents} from "../../../application/selectors/calendar/calendarSelector";
import {bindActionCreators} from "redux";
import {
    AddEvent,
    DeleteEvent,
    GetEmailUsers,
    ListEvents,
    UpdateEvent
} from "../../../application/actions/calendar/calendarActions";
import {connect} from "react-redux";
import CalendarAddComponent from "../../components/calendar/CalendarAddComponent";
import {getUser} from "../../../application/selectors/administration/user";
import TableEventComponent from '../../components/calendar/TableEventComponent'
import CalendarComponent from '../../components/calendar/CalendarComponent'


export const CalendarPage = ({events, AddEvent, ListEvents, DeleteEvent, UpdateEvent, user, emails, GetEmailUsers}) => {

    useEffect(() => {
        ListEvents(user.userToken)
        GetEmailUsers()
    }, [GetEmailUsers, ListEvents, user.userToken])

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center pt-3">Bienvenido, a tu agenda personal</h2>
                    <CalendarAddComponent AddEvent={AddEvent} token={user.userToken} userId={user} userEmails={emails}/>
                </div>
            </div>
            <div className={"row"}>
                <TableEventComponent events={events} DeleteEvent={DeleteEvent} token={user.userToken}
                                     UpdateEvent={UpdateEvent} email={user.userEmail} userEmails={emails}
                                     userId={user}/>
            </div>
            <br/><br/>
            <CalendarComponent events={events}/>
            <br/><br/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        emails: getEmails(state),
        events: getEvents(state),
        user: getUser(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({AddEvent, ListEvents, DeleteEvent, UpdateEvent, GetEmailUsers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);