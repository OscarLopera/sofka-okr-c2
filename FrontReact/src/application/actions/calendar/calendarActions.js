import {CalendarTypes} from "../../types/calendar/calendarTypes";

export const AuthenticatedCalendar = (gapi) => ({
    type: CalendarTypes.AUTHENTICATED_CALENDAR,
    payload: gapi,
})
export const AuthenticatedCalendarSuccess = (payload) => ({
    type: CalendarTypes.AUTHENTICATED_CALENDAR,
    payload: payload,
})
export const AuthenticatedCalendarFailure = (error) => ({
    type: CalendarTypes.AUTHENTICATED_CALENDAR,
    payload: error,
})
export const AddEvent = (event,token) => ({
    type: CalendarTypes.ADD_EVENT,
    payload: event,
    token:token
})
export const AddEventSuccess = (event) => ({
    type: CalendarTypes.ADD_EVENT_SUCCESS,
    payload: event
})
export const AddEventFailure = (error) => ({
    type: CalendarTypes.ADD_EVENT_FAILURE,
    payload: error
})