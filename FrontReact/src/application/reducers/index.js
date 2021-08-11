import { combineReducers } from 'redux';
import KrReducer from './okr/KrReducer';
import okr from './okr/okr'
import user from './administration/user';
import notificationReducer from './notifications/notificationReducer';

export default combineReducers({
    okr: okr,
    kr: KrReducer,
    user,
    notification:notificationReducer,
})