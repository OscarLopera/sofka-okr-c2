import * as types from '../../types/administration/user';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {user: action.payload, error: null};
        case types.LOGIN_USER_FAILURE:
            return { user: null, error: action.payload };
        case types.LOGOUT_SUCCESS: 
            return { user: null, error: null };
        case types.LOGOUT_FAILURE:
            return { user: null, error: action.payload };
        case types.CLOSE_WELCOME_SUCCESS: 
            return {user: action.payload, error: null};
        default:
            return state;
    }
}

export default reducer;