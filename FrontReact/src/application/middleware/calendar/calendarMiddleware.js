import { CalendarTypes } from "../../types/calendar/calendarTypes";
import { AddEventFailure, AddEventSuccess, ListEventsFailure, ListEventsSuccess } from "../../actions/calendar/calendarActions";

const addEventFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.ADD_EVENT) {
        try {
            const event = await api.calendar.addEvent(action.payload, action.token)
            dispatch(AddEventSuccess(event))
        } catch (error) {
            dispatch(AddEventFailure(error))
        }
    }
}

const listEventFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.LIST_EVENTS) {
        try {
            const events = await api.calendar.listEvents(action.token)
            dispatch(ListEventsSuccess(events))
        } catch (error) {
            dispatch(ListEventsFailure(error))
        }
    }
}

const calendarMiddleware = [
    addEventFlow,
    listEventFlow
]

export default calendarMiddleware