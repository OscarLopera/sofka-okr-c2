import dashboardmiddleware from "../../../middleware/dashboard/dashboardmiddleware";
import {
  loadingOKR,
  loadingOKRSuccess,
  loadingOKRFailure,
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

  const idUser = "61106133609d16f1740ddf34";

  const api = {
    dashboard: {
      loadingOKR: (idUser) => {
        return dummyListOKRs;
      },
    },
  };

  const dispatch = jest.fn();
  const next = jest.fn();

  const [loadingOKRFlow] = dashboardmiddleware;

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
});
