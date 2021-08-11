import * as types from '../../types/administration/user';

export const loginUser = () => ({
    type: types.LOGIN_USER
});

export const loginUserSuccess = user => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
});

export const loginUserFailure = error => ({
    type: types.LOGIN_USER_FAILURE,
    payload: error
});

export const logoutUser = () => ({ 
    type: types.LOGOUT_USER 
});

export const logoutSuccess = () => ({ 
    type: types.LOGOUT_SUCCESS,
});

export const logoutFailure = error => ({ 
    type: types.LOGOUT_FAILURE,
    payload: error
});

export const closeWelcome = () => ({ 
    type: types.CLOSE_WELCOME
});

export const closeWelcomeSuccess = user => ({ 
    type: types.CLOSE_WELCOME_SUCCESS,
    payload: user
});