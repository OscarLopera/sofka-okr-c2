import reducer from "../../../reducers/dashboard/dashboardreducer";
import {
  
  getOkrId,
  getOkrIdSuccess,
} from "../../../actions/dashboard/index.js";

const initialState ={
    OKRCompleted: [],
    OKRProgress : [],
    OKRsAll:[],
    OKRs:[],
    OKR:null,
    idOkr:null,
    error:null,
    loading:false
};

const idUser = "11111111111111111"
  test("Reducer GET_OKR_ID_SUCESS case", () => {
    const action = getOkrIdSuccess(idUser);
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      idOkr: idUser,
    });
  });
  
  test("Reducer GET_OKR_ID case", () => {
    const action = getOkrId("61106343609d16f1740ddf45");
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState, loading: true
    });
  });