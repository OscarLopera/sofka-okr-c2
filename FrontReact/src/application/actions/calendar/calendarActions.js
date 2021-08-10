import {CalendarTypes} from "../../types/calendar/calendarTypes";
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