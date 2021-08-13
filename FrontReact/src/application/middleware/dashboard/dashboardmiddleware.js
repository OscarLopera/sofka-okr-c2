import{
    loadingOKRSuccess,
    loadingOKRFailure,
    loadingOKRidSuccess,
    loadingOKRidFailure,
    getidOkrLastSuccess,
    getidOkrLastFailure,
    getAllOkrsSuccess,
    getAllOkrsFailure,
    getOkrCompletedSuccess,
    getOkrCompletedFailure,
    getOkrProgressSuccess,
    getOkrProgressFailure,
    getOkrId,
    getOkrIdSuccess,
    getOkrIdFailure,
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
            dispatch(loadingOKRidFailure(error.message))     
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
            dispatch(getidOkrLastFailure(error.message))   
        }
    }
}

const getAllOkrsFlow = ({api}) => ({dispatch}) => next => async(action) => {
    next(action);
    if(action.type === OKRConstanst.GET_ALL_OKRS){
        try{
            const okrs = await api.dashboard.getAllOkrs(action.payload)
            dispatch(getAllOkrsSuccess(okrs))
        }catch(error) {
            dispatch(getAllOkrsFailure(error.message))
        }
    }
}

const getOkrCompletedFlow = ({api}) => ({dispatch}) => next => async(action) => {
    next(action);
    if(action.type === OKRConstanst.GET_OKR_COMPLETED){
        try{
            const okrs = await api.dashboard.getOkrCompleted(action.payload)
            dispatch(getOkrCompletedSuccess(okrs))
        }catch(error){
            dispatch(getOkrCompletedFailure(error.message))
        }
    }
}

const getOkrProgressFlow = ({api}) => ({dispatch}) => next => async(action) => {
    next(action);
    if(action.type === OKRConstanst.GET_OKR_PROGRESS){
        try{
            const okrs = await api.dashboard.getOkrProgress(action.payload)
            dispatch(getOkrProgressSuccess(okrs))
        }catch(error){
            dispatch(getOkrProgressFailure(error.message))
        }
    }
}

const getOkrIdFlow = () => ({dispatch}) => next => async(action) => {
    next(action);
    if(action.type === OKRConstanst.GET_OKR_ID){
        try{
            dispatch(getOkrIdSuccess(action.payload))
        }catch(error){
            dispatch(getOkrIdFailure(error.message))
        }
    }
}

const middlewareOKRs = [
  loadingOKRFlow, 
  loadingOKRidFlow,
  getidOKRLastFlow,
  getAllOkrsFlow,
  getOkrCompletedFlow,
  getOkrProgressFlow,
  getOkrIdFlow,
]

export default middlewareOKRs