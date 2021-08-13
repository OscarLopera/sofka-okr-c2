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
    DELETE_OKRS_FAILURE, GET_OKRS_USER,GET_OKRS_USER_FAILURE,GET_OKRS_USER_SUCESS
} from '../../types/okr/okr'

export const loadOkrs = (okrName) => ({
    type: LOAD_OKRS,
    payload: okrName
})

export const loadOkrsSuccess = (okr) => ({
    type: LOAD_OKRS_SUCCESS,
    payload: okr
})

export const loadOkrsFailure = (error) => ({
    type: LOAD_OKRS_FAILURE,
    payload: error
})

export const addOkrs = okr => ({
    type: ADD_OKRS,
    payload: okr
})

export const addOkrsSuccess = (okr) => ({
    type: ADD_OKRS_SUCCESS,
    payload: okr
})

export const addOkrsFailure = (error) => ({
    type: ADD_OKRS_FAILURE,
    payload: error
})

export const updateOkrs = (okr) => ({
    type: UPDATE_OKRS,
    payload: okr
})

export const updateOkrsSuccess = (okr) => ({
    type: UPDATE_OKRS_SUCCESS,
    payload: okr
})

export const updateOkrsFailure = (error) => ({
    type: UPDATE_OKRS_FAILURE,
    payload: error
})

export const deleteOkrs = (idOkr) => ({
    type: DELETE_OKRS,
    payload:idOkr
})

export const deleteOkrsSuccess = (id) => ({
    type: DELETE_OKRS_SUCCESS,
    payload: id
})

export const deleteOkrsFailure = (error) => ({
    type: DELETE_OKRS_FAILURE,
    payload: error
})

export const getAllOkrUser = (idUser) => ({
    type: GET_OKRS_USER,
    payload:idUser
})

export const getAllOkrUserSuccess = (okrs) => ({
    type: GET_OKRS_USER_SUCESS,
    payload: okrs
})

export const getAllOkrUserFailure = (error) => ({
    type: GET_OKRS_USER_FAILURE,
    payload: error
})