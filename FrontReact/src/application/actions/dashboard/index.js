//Importo las constantes
import {OKRConstanst} from '../../types/dashboard/constants';

//Exporto los types y sus payload
export const loadingOKR = (id) =>({
    type: OKRConstanst.LIST_OKRS,
    payload:id
});

export const loadingOKRSuccess = (okrs) =>({
    type: OKRConstanst.LIST_OKRS_SUCCESS,
    payload: okrs
});

export const loadingOKRFailure = (error) =>({
    type: OKRConstanst.LIST_OKRS_FAILURE,
    payload:error
})
export const loadingOKRid = (id) =>({
    type:OKRConstanst.LIST_OKRS_ID,
    payload:id
});

export const loadingOKRidSuccess = (okr) =>({
    type:OKRConstanst.LIST_OKRS_ID_SUCCESS,
    payload:okr
})

export const loadingOKRidFailure = (error) =>({
    type:OKRConstanst.LIST_OKRS_ID_FAILURE,
    payload:error
})

export const getidOkrLast = (id) =>({
    type: OKRConstanst.GET_OKR_LAST,
    payload:id
});

export const getidOkrLastSuccess = (okr) =>({
    type: OKRConstanst.GET_OKR_LAST_SUCCESS,
    payload: okr
});

export const getidOkrLastFailure = (error) =>({
    type: OKRConstanst.GET_OKR_LAST_FAILURE,
    payload: error
});

export const getAllOkrs = () =>({
    type: OKRConstanst.GET_ALL_OKRS,

});

export const getAllOkrsSuccess = (okrs) => ({
    type: OKRConstanst.GET_ALL_OKRS_SUCCESS,
    payload: okrs
});

export const getAllOkrsFailure = (error) => ({
    type: OKRConstanst.GET_ALL_OKRS_FAILURE,
    payload: error
});