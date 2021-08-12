import {OKRConstanst} from "../../types/dashboard/constants";

const initialState ={
    OKRCompleted: [],
    OKRProgress : [],
    OKRsAll:[],
    OKRs:[],
    OKR:null,
    error:null,
    loading:false
};

const dashboardReducer = (state=initialState,action) =>{
    switch (action.type) {
        case OKRConstanst.LIST_OKRS:
            return{...state,loading:true};
        case OKRConstanst.LIST_OKRS_SUCCESS:
            return{...state,loading:false, OKRs:action.payload};
        case OKRConstanst.LIST_OKRS_FAILURE:
            return{...state,loading:false,error:action.payload};
        case OKRConstanst.LIST_OKRS_ID:
            return{...state,loading:true};
        case OKRConstanst.LIST_OKRS_ID_SUCCESS:
            return{...state,loading:false,OKR:action.payload};
        case OKRConstanst.LIST_OKRS_ID_FAILURE:
            return{...state,loading:false,error:action.payload};
        case OKRConstanst.GET_OKR_LAST:
            return{...state,loading:true};
        case OKRConstanst.GET_OKR_LAST_SUCCESS:
            return{...state,loading:false,OKR:action.payload};
        case OKRConstanst.GET_OKR_LAST_FAILURE:
            return{...state,loading:false,error:action.payload};
        case OKRConstanst.GET_ALL_OKRS:
            return{...state,loading:true};
        case OKRConstanst.GET_ALL_OKRS_SUCCESS:
            return{...state,loading:false, OKRsAll:action.payload};
        case OKRConstanst.GET_ALL_OKRS_FAILURE:
            return{...state,loading:false, error:action.payload};
        case OKRConstanst.GET_OKR_COMPLETED:
            return{...state,loading:true};
        case OKRConstanst.GET_OKR_COMPLETED_SUCCESS:
            return{...state, loading:false, OKRCompleted:action.payload};
        case OKRConstanst.GET_OKR_COMPLETED_FAILURE:
            return{...state, loading:false, error:action.payload};
        case OKRConstanst.GET_OKR_PROGRESS:
            return{...state,loading:true};
        case OKRConstanst.GET_OKR_PROGRESS_SUCCESS:
            return{...state, loading:false, OKRProgress:action.payload};
        case OKRConstanst.GET_OKR_PROGRESS_FAILURE:
            return{...state, loading:false, error:action.payload};
        default:
            return state;
    }
}

export default dashboardReducer;