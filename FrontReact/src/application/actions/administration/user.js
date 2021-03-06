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

export const loadingVerticals = () => ({
    type: types.LOADING_VERTICALS,
});

export const loadingVerticalsSuccess = verticals => ({
    type: types.LOADING_VERTICALS_SUCCESS,
    payload: verticals
});

export const loadingVerticalsFailure = error => ({
    type: types.LOADING_VERTICALS_FAILURE,
    payload: error
});

export const updateUser = user => ({
    type: types.UPDATE_USER,
    payload: user
});

export const updateUserSuccess = user => ({
    type: types.UPDATE_USER_SUCCESS,
    payload: user
});

export const updateUserFailure = error => ({
    type: types.UPDATE_USER_FAILURE,
    payload: error
});

export const loadingQuestions = () => ({
    type: types.LOADING_QUESTIONS
});

export const loadingQuestionsSuccess = questions => ({
    type: types.LOADING_QUESTIONS_SUCCESS,
    payload: questions
});

export const loadingQuestionsFailure = error => ({
    type: types.LOADING_QUESTIONS_FAILURE,
    payload: error
});