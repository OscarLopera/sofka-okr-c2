import {CalendarTypes} from "../../types/calendar/calendarTypes";

const initialState = {
    events: [],
    error: null,
    loading: false
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CalendarTypes.ADD_EVENT:
            console.log("load")
            return {...state, loading: true}
        case CalendarTypes.ADD_EVENT_SUCCESS:
            const eventsOptional = state.events;
            eventsOptional.push(action.payload)
            return {...state, loading: false, events: eventsOptional, error: null}
        case CalendarTypes.ADD_EVENT_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

export default calendarReducer