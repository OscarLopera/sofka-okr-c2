import { CalendarTypes } from "../../types/calendar/calendarTypes";

const initialState = {
    events: [],
    error: null,
    loading: false,
    emails: []
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CalendarTypes.ADD_EVENT:
            return { ...state, loading: true }
        case CalendarTypes.ADD_EVENT_SUCCESS:
            const eventsOptional = state.events;
            eventsOptional.push(action.payload)
            return { ...state, loading: false, events: eventsOptional, error: null }
        case CalendarTypes.ADD_EVENT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CalendarTypes.LIST_EVENTS:
            return { ...state, loading: true }
        case CalendarTypes.LIST_EVENTS_SUCCESS:
            return { ...state, loading: false, events: action.payload }
        case CalendarTypes.LIST_EVENTS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CalendarTypes.DELETE_EVENT:
            return { ...state, loading: true}
        case CalendarTypes.DELETE_EVENT_SUCCESS:
            return { ...state, loading: false, error: null }
        case CalendarTypes.DELETE_EVENT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CalendarTypes.UPDATE_EVENT:
            return { ...state, loading: true}
        case CalendarTypes.UPDATE_EVENT_SUCCESS:
            const aux = state.events.map(event => event.id !== action.payload.id? action.payload : event)
            return { ...state, loading: false, events: aux, error: null }
        case CalendarTypes.UPDATE_EVENT_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case CalendarTypes.GET_EMAIL_USERS:
            return {...state,loading: true}
        case CalendarTypes.GET_EMAIL_USERS_SUCCESS:
            return {...state,loading: false, emails: action.payload}
        case CalendarTypes.GET_EMAIL_USERS_FAILURE:
            return {...state,loading: false, error: action.payload}
        default:
            return state
    }
}

export default calendarReducer