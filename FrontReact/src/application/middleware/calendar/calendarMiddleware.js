import {CalendarTypes} from "../../types/calendar/calendarTypes";
import {
    AddEventFailure,
    AddEventSuccess,
    ListEvents,
    ListEventsFailure,
    ListEventsSuccess,
    DeleteEventFailure,
    DeleteEventSuccess,
    UpdateEventFailure,
    UpdateEventSuccess, GetEmailUsersSuccess, GetEmailUsersFailure
} from "../../actions/calendar/calendarActions";

const addEventFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.ADD_EVENT) {
        try {
            const event = await api.calendar.addEvent(action.payload, action.token)
            dispatch(AddEventSuccess(event))
            dispatch(ListEvents(action.token))
        } catch (error) {
            dispatch(AddEventFailure(error.message))
        }
    }
}

const updateEventFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.UPDATE_EVENT) {
        try {
            const event = await api.calendar.updateEvent(action.payload, action.token)
            dispatch(UpdateEventSuccess(event))
            dispatch(ListEvents(action.token))
        } catch (error) {
            dispatch(UpdateEventFailure(error.message))
        }
    }
}

const listEventFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.LIST_EVENTS) {
        try {
            const events = await api.calendar.listEvents(action.token)
            await api.calendar.token()
            dispatch(ListEventsSuccess(events))
        } catch (error) {
            dispatch(ListEventsFailure(error.message))
        }
    }
}

const deleteEventFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.DELETE_EVENT) {
        try {
            await api.calendar.deleteEvent(action.payload, action.token)
            dispatch(DeleteEventSuccess())
            dispatch(ListEvents(action.token))
        } catch (error) {
            dispatch(DeleteEventFailure(error.message))
        }
    }
}

const getEmailUsersFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.GET_EMAIL_USERS) {
        try {
            const list = await api.calendar.getEmailUser()
            dispatch(GetEmailUsersSuccess(list))
        } catch (error) {
            dispatch(GetEmailUsersFailure(error.message))
        }
    }
}

const calendarMiddleware = [
    addEventFlow,
    listEventFlow,
    deleteEventFlow,
    updateEventFlow,
    getEmailUsersFlow
]

export default calendarMiddleware