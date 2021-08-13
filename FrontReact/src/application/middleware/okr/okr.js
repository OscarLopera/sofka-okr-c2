import {
  LOAD_OKRS,
  ADD_OKRS,
  UPDATE_OKRS,
  DELETE_OKRS, GET_OKRS_USER
} from "../../types/okr/okr";
import {
  loadOkrsFailure,
  loadOkrsSuccess,
  addOkrsSuccess,
  addOkrsFailure,
  updateOkrsSuccess,
  updateOkrsFailure,
  deleteOkrsSuccess,
  deleteOkrsFailure,
  loadOkrs, getAllOkrUserSuccess, getAllOkrUserFailure, getAllOkrUser
} from "../../actions/okr/okr";

const loadOkrFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === LOAD_OKRS) {
            try {
              const okrs = await api.okr.loadOkr(action.payload);
              dispatch(loadOkrsSuccess(okrs));
            } catch (error) {
              dispatch(loadOkrsFailure(error));
            }
          }
        };

const addOkrFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);

          if (action.type === ADD_OKRS) {
            try {
              const values = action.payload;
              const { dataId } = await api.okr.createOkr(values.okrObject);
              const krsByIdOkr = values.krs.map((kr) => {
                return { ...kr, idOkr: dataId };
              });
              krsByIdOkr.forEach(async (kr) => {
                try {
                  await api.kr.createKr(kr);
                } catch (e) {
                  console.log(e);
                }
              });
              dispatch(addOkrsSuccess(values.okrObject));
              dispatch(loadOkrs());
            } catch (error) {
              dispatch(addOkrsFailure(error));
            }
          }
        };

const updateOkrFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === UPDATE_OKRS) {
            try {
              const okrs = await api.okr.updateOkr(action.payload);
              dispatch(updateOkrsSuccess(okrs));
            } catch (error) {
              dispatch(updateOkrsFailure(error));
            }
          }
        };

const deleteOkrFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === DELETE_OKRS) {
            try {
              const okrs = await api.okr.deleteOkr(action.payload);
              dispatch(deleteOkrsSuccess(okrs));
              dispatch(getAllOkrUser(action.payload.idUser))
            } catch (error) {
              dispatch(deleteOkrsFailure(error));
            }
          }
        };

const getAllOkrUserFlow =
  ({ api }) =>
    ({ dispatch }) =>
      (next) =>
        async (action) => {
          next(action);
          if (action.type === GET_OKRS_USER) {
            try {
              const okrs = await api.okr.getAllOkrByUser(action.payload);
              dispatch(getAllOkrUserSuccess(okrs));
            } catch (error) {
              dispatch(getAllOkrUserFailure(error));
            }
          }
        };

const middlewareOkr = [loadOkrFlow, addOkrFlow, updateOkrFlow, deleteOkrFlow, getAllOkrUserFlow];

export default middlewareOkr;
