import{
    loadingOKRSuccess,
    loadingOKRFailure,
    loadingOKRidSuccess,
    loadingOKRidFailure,
    getidOkrLastSuccess,
    getidOkrLastFailure
} from '../../actions/dashboard/index';
import {OKRConstanst} from '../../types/dashboard/constants';


const loadingOKRFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === OKRConstanst.LIST_OKRS){
        try {
            const okrs = await api.dashboard.loadingOKR(action.payload)
            dispatch(loadingOKRSuccess(okrs))
        } catch (error) {
            dispatch(loadingOKRFailure(error.message))     
        }
    }
}

const loadingOKRidFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === OKRConstanst.LIST_OKRS_ID){
        try {
            const okr = await api.dashboard.loadingOKRid(action.payload)
            dispatch(loadingOKRidSuccess(okr))
        } catch (error) {
            dispatch(loadingOKRidFailure(error))     
        }
    }
}

const getidOKRLastFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === OKRConstanst.GET_OKR_LAST){
        try {
            const okr = await api.dashboard.getidOKRLast(action.payload)
            dispatch(getidOkrLastSuccess(okr))
        } catch (error) {
            dispatch(getidOkrLastFailure(error)) 
            console.log("Error",error, "id", action.payload);    
        }
    }
}

const middlewareOKRs = [
  loadingOKRFlow, 
  loadingOKRidFlow,
  getidOKRLastFlow
]

export default middlewareOKRs