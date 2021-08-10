import { combineReducers } from 'redux';
import KrReducer from './okr/KrReducer'

export default combineReducers({
    kr: KrReducer,
})