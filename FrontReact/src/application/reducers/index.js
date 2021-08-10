import { combineReducers } from 'redux';
import KrReducer from './okr/KrReducer';
import okr from './okr/okr'

export default combineReducers({
    okr: okr,
    kr: KrReducer,
})