import {
  createKrSuccess,
  createKrError,
  deleteKrSuccess,
  deleteKrError,
  updateProgressKrSuccess,
} from "../../actions/okr/KrAction";
import { getAllOkrUser } from "../../actions/okr/okr";
import {
  CREATE_KR,
  DELETE_KR,
  UPDATE_PROGRESS_KR,
} from "../../types/okr/KrTypes";

const createKrFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === CREATE_KR) {
      try {
        const kr = action.payload;
        dispatch(createKrSuccess(kr));
      } catch (error) {
        console.log("error");
        dispatch(createKrError(error));
      }
    }
  };

const deleteKrFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_KR) {
      try {
        const idKr = await api.kr.deleteKr(action.payload);
        dispatch(deleteKrSuccess(idKr));
        dispatch(getAllOkrUser(action.payload.idUser));
      } catch (error) {
        dispatch(deleteKrError(error));
      }
    }
  };

const updateProgressKrFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === UPDATE_PROGRESS_KR) {
      try {
        const kr = await api.kr.updateProgressKr(action.payload);
        dispatch(updateProgressKrSuccess(kr));
        dispatch(getAllOkrUser(action.payload.idUser));
      } catch (error) {
        dispatch(deleteKrError(error));
      }
    }
  };

const middlewareKr = [createKrFlow, deleteKrFlow, updateProgressKrFlow];

export default middlewareKr;
