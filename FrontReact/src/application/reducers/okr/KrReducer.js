import {
  CREATE_KR,
  CREATE_KR_ERROR,
  CREATE_KR_SUCCESS,
  DELETE_KR,
  DELETE_KR_ERROR,
  DELETE_KR_SUCCESS,
  UPDATE_PROGRESS_KR,
  UPDATE_PROGRESS_KR_SUCCESS,
  UPDATE_PROGRESS_KR_ERROR
} from "../../types/okr/KrTypes";

const initialState = {
  kr: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_KR:
      return { ...state, loading: true };
    case CREATE_KR_SUCCESS:
      return { ...state, loading: false, kr: [...state.kr,action.payload] };
    case CREATE_KR_ERROR:
      return { ...state, loading: false, error: action.payload };
    case DELETE_KR:
      return { ...state, loading: true };
    case DELETE_KR_SUCCESS:
      return { ...state, loading: false };
    case DELETE_KR_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_PROGRESS_KR:
      return { ...state, loading: true }
    case UPDATE_PROGRESS_KR_SUCCESS:
      return { ...state, loading: false }
    case UPDATE_PROGRESS_KR_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
};

export default reducer;
