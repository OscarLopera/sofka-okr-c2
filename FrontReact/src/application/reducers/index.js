import { combineReducers } from 'redux';

import calendarReducer from "./calendar/calendarReducer";
import user from './administration/user';

export default combineReducers({
    calendar: calendarReducer,
    user: user
})