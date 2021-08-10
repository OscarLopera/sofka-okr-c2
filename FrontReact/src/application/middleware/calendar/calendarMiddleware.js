import {CalendarTypes} from "../../types/calendar/calendarTypes";
import {AddEventFailure, AddEventSuccess} from "../../actions/calendar/calendarActions";

const addEventFlow = ({api}) => ({dispatch}) => next => async (action) => {
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

const calendarMiddleware = [
    addEventFlow
]

export default calendarMiddleware