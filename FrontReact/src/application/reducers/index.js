import { combineReducers } from 'redux';

import calendarReducer from "./calendar/calendarReducer";
import user from './administration/user';
import notificationReducer from './notifications/notificationReducer';

export default combineReducers({
<<<<<<< HEAD
    user,
    notification:notificationReducer,
=======
    calendar: calendarReducer,
    user: user
>>>>>>> a7953e8192c5fa4f908e761a9464a8c4bfc2ae97
})