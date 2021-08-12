import {LOAD_OKRS, ADD_OKRS, UPDATE_OKRS, DELETE_OKRS} from '../../types/okr/okr';
import {
    loadOkrsFailure,
    loadOkrsSuccess,
    addOkrsSuccess,
    addOkrsFailure,
    updateOkrsSuccess,
    updateOkrsFailure,
    deleteOkrsSuccess,
    deleteOkrsFailure, loadOkrs
} from '../../actions/okr/okr';

const loadOkrFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === LOAD_OKRS) {
        try {
            const okrs = await api.okr.loadOkr()
            dispatch(loadOkrsSuccess(okrs))
        } catch (error) {
            dispatch(loadOkrsFailure(error))
        }
    }

}

const addOkrFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === ADD_OKRS) {
        try {
            const values = action.payload
            const okrs = await api.okr.createOkr(values.okrObject)
            console.log(okrs)
            dispatch(addOkrsSuccess(okrs))
            dispatch(loadOkrs())
        } catch (error) {
            dispatch(addOkrsFailure(error))
        }
    }

}

const updateOkrFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === UPDATE_OKRS) {
        try {
            const okrs = await api.okr.updateOkr(action.payload)
            dispatch(updateOkrsSuccess(okrs))
        } catch (error) {
            dispatch(updateOkrsFailure(error))
        }
    }

}

const deleteOkrFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === DELETE_OKRS) {
        try {
            const okrs = await api.okr.deleteOkr(action.payload)
            dispatch(deleteOkrsSuccess(okrs))
            dispatch(loadOkrs())
        } catch (error) {
            dispatch(deleteOkrsFailure(error))
        }
    }

}
const middlewareOkr = [
    loadOkrFlow,
    addOkrFlow,
    updateOkrFlow,
    deleteOkrFlow
]

export default middlewareOkr


