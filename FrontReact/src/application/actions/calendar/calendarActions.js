import {CalendarTypes} from "../../types/calendar/calendarTypes";

export const AddEvent = (event, token) => ({
    type: CalendarTypes.ADD_EVENT,
    payload: event,
    token: token
})
export const AddEventSuccess = (event) => ({
    type: CalendarTypes.ADD_EVENT_SUCCESS,
    payload: event
})
export const AddEventFailure = (error) => ({
    type: CalendarTypes.ADD_EVENT_FAILURE,
    payload: error
})
export const ListEvents = (token) => ({
    type: CalendarTypes.LIST_EVENTS,
    token: token
})
export const ListEventsSuccess = (events) => ({
    type: CalendarTypes.LIST_EVENTS_SUCCESS,
    payload: events
})
export const ListEventsFailure = (error) => ({
    type: CalendarTypes.LIST_EVENTS_FAILURE,
    payload: error
})