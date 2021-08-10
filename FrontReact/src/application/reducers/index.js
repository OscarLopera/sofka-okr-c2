import { combineReducers } from 'redux';
import calendarReducer from "./calendar/calendarReducer";

export default combineReducers({
    calendar: calendarReducer
})