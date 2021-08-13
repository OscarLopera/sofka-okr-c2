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
export const DeleteEvent = (id,token) => ({
    type: CalendarTypes.DELETE_EVENT,
    token: token,
    payload:id
})
export const DeleteEventSuccess = () => ({
    type: CalendarTypes.DELETE_EVENT_SUCCESS,
})
export const DeleteEventFailure = (error) => ({
    type: CalendarTypes.DELETE_EVENT_FAILURE,
    payload: error
})
export const UpdateEvent = (event, token) => ({
    type: CalendarTypes.UPDATE_EVENT,
    payload: event,
    token: token
})
export const UpdateEventSuccess = (event) => ({
    type: CalendarTypes.UPDATE_EVENT_SUCCESS,
    payload: event
})
export const UpdateEventFailure = (error) => ({
    type: CalendarTypes.UPDATE_EVENT_FAILURE,
    payload: error
})
export const GetEmailUsers = () => ({
  type:CalendarTypes.GET_EMAIL_USERS,
})
export const GetEmailUsersSuccess = (list) => ({
    type:CalendarTypes.GET_EMAIL_USERS_SUCCESS,
    payload: list,
})
export const GetEmailUsersFailure = (error) => ({
    type:CalendarTypes.GET_EMAIL_USERS_FAILURE,
    payload: error,
})
