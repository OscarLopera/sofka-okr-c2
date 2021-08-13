import * as types from '../../types/administration/user';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    error: null,
    verticals:[],
    questions:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, error: null};
        case types.LOGIN_USER_FAILURE:
            return {...state, user: null, error: action.payload };
        case types.LOGOUT_SUCCESS: 
            return {...state, user: null, error: null };
        case types.LOGOUT_FAILURE:
            return {...state, error: action.payload };
        case types.CLOSE_WELCOME_SUCCESS: 
            return {...state, user: action.payload, error: null};
        case types.LOADING_VERTICALS_SUCCESS: 
            return {...state, verticals: action.payload, error: null };
        case types.LOADING_VERTICALS_FAILURE:
            return {...state, verticals: [], error: action.payload };
        case types.UPDATE_USER_SUCCESS: 
            return {...state, user: action.payload, error: null };
        case types.UPDATE_USER_FAILURE:
            return {...state, error: action.payload };
        case types.LOADING_QUESTIONS_SUCCESS:
            return {...state, questions: action.payload, error: null};
        case types.LOADING_QUESTIONS_FAILURE:
            return {...state, questions: [], error: action.payload };
        default:
            return state;
    }
}

export default reducer;