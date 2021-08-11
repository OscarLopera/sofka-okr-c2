import { combineReducers } from 'redux';
import user from './administration/user';
import notificationReducer from './notifications/notificationReducer';

export default combineReducers({
    user,
    notification:notificationReducer,
})