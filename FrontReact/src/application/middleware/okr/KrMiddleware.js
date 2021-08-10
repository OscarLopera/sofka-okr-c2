import { createKrSuccess, createKrError, deleteKrSuccess, deleteKrError} from '../../actions/okr/KrAction'
import { CREATE_KR, DELETE_KR } from '../../types/okr/KrTypes';

const createKrFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === CREATE_KR) {
        try {
            const kr = await api.kr.createKr(action.payload)
            dispatch(createKrSuccess(kr))
        } catch (error) {
            dispatch(createKrError(error))
        }
    }
}

const deleteKrFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action)
    if (action.type === DELETE_KR) {
        try {
            const idKr = await api.kr.deleteKr(action.payload)
            dispatch(deleteKrSuccess(idKr))
        } catch (error) {
            dispatch(deleteKrError(error))
        }
    }
}

const middlewareKr = [
    createKrFlow,
    deleteKrFlow
]

export default middlewareKr;