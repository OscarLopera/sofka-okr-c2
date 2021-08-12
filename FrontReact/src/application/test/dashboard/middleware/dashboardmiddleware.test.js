import dashboardmiddleware from "../../../middleware/dashboard/dashboardmiddleware";
import {
  loadingOKR,
  loadingOKRSuccess,
  loadingOKRFailure,
  loadingOKRid,
  loadingOKRidSuccess,
  loadingOKRidFailure,
  getidOKRLast,
  getidOkrLastSuccess,
  getidOkrLastFailure

} from "../../../actions/dashboard/index.js";

describe("Middleware Test Dashboard", () => {
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

    const dummyListidOKR = [
    {
      id:1,
      objetivo:"Un objetivo de un usuario",
      title:"Titulo del OKR",
      description:"Descripcion del OKR",
      managerId:"61106133609d16f1740ddf34",
      areainCharge:"Agile services",
      progress:80,
      krs:[
          {
          _id: {
          $oid: "61106343609d16f1740ddf45"
          },
        idOkr: "611061c6609d16f1740ddf39",
        description: "Socialización de la dificultades que no permitieron el alcance de objetivos",
        managerId: "Pepito perez",
        startDate: "2021/08/14",
        endDate: "2021/08/16",
        loadValue: 5,
        progress: 10
        }
      ]
    }
  ];

 

  const idUser = "61106133609d16f1740ddf34";
  const idOkr = "611061c6609d16f1740dd222";

  const api = {
    dashboard: {
      loadingOKR: () => {
        return dummyListOKRs;
      },
      getidOKRLast : () => {
        return dummyListOKR;
      }, 
    },
  };

  const dispatch = jest.fn();
  const next = jest.fn();

  const [loadingOKRFlow,loadingOKRidFlow,getidOKRLastFlow] = dashboardmiddleware;

  const action = loadingOKR(idUser);

  test("Test Functional", async () => {
    await loadingOKRFlow({ api })({ dispatch })(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  test("Test Happy", async () => {
    await loadingOKRFlow({ api })({ dispatch })(next)(action);
    expect(dispatch).toHaveBeenCalledWith(loadingOKRSuccess(dummyListOKRs));
  });

  //Test Failure
  test("Test Failure", async () => {
  const api = {
    dashboard: {
      loadingOKR: (idUser) => {
        throw new Error ("Se ha generado un error");
      },
    },
  };
    const action = loadingOKR(idUser);
    await loadingOKRFlow({ api })({ dispatch })(next)(action);
    expect(dispatch).toHaveBeenCalledWith(loadingOKRFailure("Se ha generado un error"));
  });

  //Test por id OKR
  test("Test Functional idOKR", async () => {
   await loadingOKRidFlow({ api })({dispatch})(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  // test("Test Happy idOKR", async () =>{
  //   await loadingOKRidFlow({api})({dispatch})(next)(action);
  //   expect(dispatch).toHaveBeenCalledWith(loadingOKRidSuccess(dummyListidOKR));
  // });

  test("Test failure idOKR", async() =>{
    const api = {
      dashboard: {
        loadingOKRid: (idUser) => {
          throw new Error ("Se ha generado un error");
        },
      },
    };
      const action = loadingOKRid(idUser);
      await loadingOKRidFlow({ api })({ dispatch })(next)(action);
      expect(dispatch).toHaveBeenCalledWith(loadingOKRidFailure("Se ha generado un error"));
  });

  //Test por id de usuario traer el ultimo OKR 

  test("Test Functional OKRLast", async () => {
    await getidOKRLastFlow({ api })({ dispatch })(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  // test("Test Happy OKRLast", async() =>{
  //   await getidOKRLastFlow({ api })({ dispatch })(next)(action);
  //   expect(dispatch).toHaveBeenCalledWith(getidOkrLastSuccess(dummyListOKR));
  // });

  test("Test Failure OKRLast", async () => {
      await getidOKRLastFlow({ api })({ dispatch })(next)(action);
      expect(dispatch).toHaveBeenCalledWith(getidOkrLastFailure("Se ha generado un error"));
    });

})
 
