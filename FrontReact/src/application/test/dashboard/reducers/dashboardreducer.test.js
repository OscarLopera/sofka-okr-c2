import reducer from "../../../reducers/dashboard/dashboardreducer";
import {
  loadingOKR,
  loadingOKRSuccess,
  loadingOKRFailure,
} from "../../../actions/dashboard/index.js";

describe("Test of Reducer | OKRs por Usuario", () => {
  const dummyListOKRs = [
    {
      id: "61109c8ea304d0a23abc3484",
      objective:
        "Optimizar la planeación del proyecto final del Ciclo 2 - Training - Cristian",
      title:
        "Plan de optimización de la planeación del proyecto final del Ciclo 2 - Training - Cristian",
      managerId: "61106133609d16f1740ddf34",
      description:
        "Se buscará la organización e implementación de una serie de actividades para la optimización de la planeación del proyecto final - Cristian",
      areaInCharge: "Agile Services",
      progress: 100,
      krs: [],
    },
    {
      id: "61109c8ea304d0a23abc3485",
      objective:
        "Optimizar el desarrollo del proyecto final del Ciclo 2 - Training - Cristian",
      title:
        "Plan de optimización del desarrollo del proyecto final del Ciclo 2 - Training - Cristian",
      managerId: "61106133609d16f1740ddf34",
      description:
        "Se buscará la organización e implementación de una serie de actividades para la optimización del desarrollo del proyecto final - Cristian",
      areaInCharge: "Agile Services",
      progress: 15,
      krs: [],
    },
  ];

  const initialState = {
    OKRs: [],
    OKR: null,
    error: null,
    loading: false,
  };

  const idUser = "12345asad";
  test("Reducer LOADINGOKRSUCCESS case", () => {
    const action = loadingOKRSuccess(dummyListOKRs);
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      OKRs: dummyListOKRs,
    });
  });

  test("Reducer LOADINGOKRFAILURE case", () => {
    const action = loadingOKRFailure("un error");
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "un error",
    });
  });

    test("Reducer LOADINGOKR case", () => {
    const action = loadingOKR(idUser);
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,loading:true
    });
  });
});
