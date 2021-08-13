import middlewareOKRs from "../../../middleware/dashboard/dashboardmiddleware";import {
    loadingOKR,
    loadingOKRSuccess,
    loadingOKRFailure,
  
  } from "../../../actions/dashboard";

  const managerId = "611573b4a2605b535bfab399";
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

  const [ loadingOKRFlow, 
    loadingOKRidFlow,
    getidOKRLastFlow,
    getAllOkrsFlow,
    getOkrCompletedFlow,
    getOkrProgressFlow,
    getOkrIdFlow,] = middlewareOKRs;

  const dispatch = jest.fn();
  const next = jest.fn();

 describe("Middleware Test Dashboard", () => {
    test('loading okr', async () => {
        const api = {
            dashboard: {
                loadingOKR: () => {
                    return dummyListOKRs;
                }
            }
        }
        const action = loadingOKR(managerId)
        await loadingOKRFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loadingOKRSuccess(dummyListOKRs))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('loading okr failure', async () => {
      const api = {
          dashboard: {
            loadingOKR: () => {
                  throw new Error("No se pudo listar los eventos");
              }
          }
      }
      const action = loadingOKR(managerId);
      await loadingOKRFlow({ api })({ dispatch })(next)(action);
      expect(dispatch).toHaveBeenCalledWith(loadingOKRFailure("No se pudo listar los eventos"))
      expect(next).toHaveBeenCalledWith(action);
  })
 })

