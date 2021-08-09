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