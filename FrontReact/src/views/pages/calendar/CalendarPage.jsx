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
import firebase from "firebase";


export const CalendarPage = ({events, AddEvent, ListEvents, DeleteEvent, UpdateEvent, user, emails, GetEmailUsers}) => {

    useEffect(() => {
        ListEvents(user.userToken)
        GetEmailUsers()
        token()
    }, [GetEmailUsers, ListEvents, user.userToken])

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Eventos</h1>
                    <CalendarAddComponent AddEvent={AddEvent} token={user.userToken} userEmails={emails}/>
                </div>
            </div>
            <div className={"row"}>
                <TableEventComponent events={events} DeleteEvent={DeleteEvent} token={user.userToken}
                                     UpdateEvent={UpdateEvent} email={user.userEmail} userEmails={emails}/>
            </div>
            <br/><br/>
            <CalendarComponent events={events}/>
        </div>
    )
}

export const token = () => {
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
        let sessionTimeout = null;
        if (user === null) {
            // User is logged out.
            // Clear the session timeout.
            sessionTimeout && clearTimeout(sessionTimeout);
            sessionTimeout = null;
        } else {
            user.getIdTokenResult().then((idTokenResult) => {
                const authTime = idTokenResult.claims.auth_time * 1000;
                const sessionDuration = 1000 * 60 * 60 * 24 * 30;
                const millisecondsUntilExpiration = sessionDuration - (Date.now() - authTime);
                setTimeout(() => auth.signOut(), millisecondsUntilExpiration);
            });
        }
    })
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