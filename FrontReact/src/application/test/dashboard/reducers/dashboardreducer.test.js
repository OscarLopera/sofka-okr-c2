import reducer from "../../../reducers/dashboard/dashboardreducer";
import {
  loadingOKR,
  loadingOKRSuccess,
  loadingOKRFailure,
  loadingOKRid,
  loadingOKRidSuccess,
  loadingOKRidFailure,

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

describe("Test of Reducer OKR selected", () => {
  const dummyOKRs =[
    {
      "id":1,
      "objetivo":"Un objetivo de un usuario",
      "title":"Titulo del OKR",
      "description":"Descripcion del OKR",
      "managerId":"1245",
      "areainCharge":"Agile services",
      "progress":80,
      "krs":[
          {
          "_id": {
          "$oid": "61106343609d16f1740ddf45"
          },
        "idOkr": "611061c6609d16f1740ddf39",
        "description": "Socialización de la dificultades que no permitieron el alcance de objetivos",
        "managerId": "Pepito perez",
        "startDate": "2021/08/14",
        "endDate": "2021/08/16",
        "loadValue": 5,
        "progress": 10
        },
        {
          "_id": {
          "$oid": "61106343609d16f1740dd233"
          },
        "idOkr": "611061c6609d16f1740dd222",
        "description": "Socialización de la dificultades que no permitieron el alcance de objetivos",
        "managerId": "Juanito Valenzuela",
        "startDate": "2021/08/14",
        "endDate": "2021/08/16",
        "loadValue": 5,
        "progress": 10
        }
      ]
    }
  
  ]
  const initialState = {
    OKRs: [],
    OKR: null,
    error: null,
    loading: false,
  };
  test("Reducer LOADINGOKRIDSUCCESS", () => {
    const action = loadingOKRidSuccess(dummyOKRs);
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      OKR: dummyOKRs,
    });
  });
  test("Reducer LOADINGOKRIDFAILURE", () => {
    const action = loadingOKRidFailure("un error");
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      error: "un error",
    });
  });

    test("Reducer LOADINGOKR case", () => {
    const action = loadingOKRid("61106343609d16f1740ddf45");
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,loading:true
    });
  });
})
