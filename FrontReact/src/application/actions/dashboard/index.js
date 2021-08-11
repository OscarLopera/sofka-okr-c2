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