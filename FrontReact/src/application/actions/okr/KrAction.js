import { CREATE_KR, CREATE_KR_ERROR, CREATE_KR_SUCCESS, DELETE_KR, DELETE_KR_ERROR, DELETE_KR_SUCCESS, UPDATE_PROGRESS_KR, UPDATE_PROGRESS_KR_SUCCESS, UPDATE_PROGRESS_KR_ERROR } from '../../types/okr/KrTypes'

export const createKr = (kr) => ({
    type: CREATE_KR,
    payload: kr
});

export const createKrSuccess = (kr) => ({
    type: CREATE_KR_SUCCESS,
    payload: kr
});

export const createKrError = (error) => ({
    type: CREATE_KR_ERROR,
    payload: error
});

export const deleteKr = (id) => ({
    type: DELETE_KR,
    payload: id
});

export const deleteKrSuccess = (id) => ({
    type: DELETE_KR_SUCCESS,
    payload: id
});

export const deleteKrError = (error) => ({
    type: DELETE_KR_ERROR,
    payload: error
});

export const updateProgressKr = (idUser, id, krUpdate) => ({
    type: UPDATE_PROGRESS_KR,
    payload: {idUser, id, krUpdate}
});

export const updateProgressKrSuccess = (body) => ({
    type: UPDATE_PROGRESS_KR_SUCCESS,
    payload: body
});

export const updateProgressKrError = (error) => ({
    type: UPDATE_PROGRESS_KR_ERROR,
    payload: error
});