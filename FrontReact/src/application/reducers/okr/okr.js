import {
    LOAD_OKRS,
    LOAD_OKRS_FAILURE,
    LOAD_OKRS_SUCCESS,
    ADD_OKRS,
    ADD_OKRS_SUCCESS,
    ADD_OKRS_FAILURE,
    UPDATE_OKRS,
    UPDATE_OKRS_SUCCESS,
    UPDATE_OKRS_FAILURE,
    DELETE_OKRS,
    DELETE_OKRS_SUCCESS,
    DELETE_OKRS_FAILURE, GET_OKRS_USER, GET_OKRS_USER_FAILURE, GET_OKRS_USER_SUCESS
} from '../../types/okr/okr'

const initialState = {
    okr: [],
    okrs:[],
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OKRS:
            return { ...state, loading: true };
        case LOAD_OKRS_SUCCESS:
            return { ...state, loading: false, okr: action.payload, error: null };
        case LOAD_OKRS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_OKRS:
            return { ...state, loading: true };
        case ADD_OKRS_SUCCESS:
            return { ...state, loading: false };
        case ADD_OKRS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_OKRS:
            return { ...state, loading: true };
        case UPDATE_OKRS_SUCCESS:
            const okrUpdate = state.okr
            okrUpdate.push(action.payload)
            return { ...state, loading: false, okr: okrUpdate };
        case UPDATE_OKRS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_OKRS:
            return { ...state, loading: true };
        case DELETE_OKRS_SUCCESS:
            return { ...state, loading: false };
        case DELETE_OKRS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_OKRS_USER:
            return { ...state, loading: true };
        case GET_OKRS_USER_SUCESS:
            return { ...state, loading: false, okrs: action.payload, error: null };
        case GET_OKRS_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default reducer

