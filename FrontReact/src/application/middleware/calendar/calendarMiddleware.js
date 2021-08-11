import { CalendarTypes } from "../../types/calendar/calendarTypes";
import { 
    AddEventFailure, 
    AddEventSuccess,
    ListEvents,
    ListEventsFailure, 
    ListEventsSuccess, 
    DeleteEventFailure, 
    DeleteEventSuccess
} from "../../actions/calendar/calendarActions";

const addEventFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.ADD_EVENT) {
        try {
            const event = await api.calendar.addEvent(action.payload, action.token)
            dispatch(AddEventSuccess(event))
            dispatch(ListEvents(action.token))
            console.log(ListEvents)
        } catch (error) {
            dispatch(AddEventFailure(error.message))
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
            dispatch(ListEventsFailure(error.message))
        }
    }
}

const deleteEventFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action)
    if (action.type === CalendarTypes.DELETE_EVENT) {
        try {
            const event = await api.calendar.deleteEvent(action.payload, action.token)
            dispatch(DeleteEventSuccess(event))
            dispatch(ListEvents(action.token))
        } catch (error) {
            dispatch(DeleteEventFailure(error.message))
        }
    }
}

const calendarMiddleware = [
    addEventFlow,
    listEventFlow,
    deleteEventFlow,
]

export default calendarMiddleware