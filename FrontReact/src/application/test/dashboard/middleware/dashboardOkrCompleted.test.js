import middlewareOKRs from "../../../middleware/dashboard/dashboardmiddleware";
import {
    getOkrCompleted,
    getOkrCompletedSuccess,
    getOkrCompletedFailure,

} from "../../../actions/dashboard/";

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
    test('get all okrs', async () => {
        const api = {
            dashboard: {
                getOkrCompleted: () => {
                    return dummyListOKRs;
                }
            }
        }
        const action = getOkrCompleted(managerId)
        await getOkrCompletedFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getOkrCompletedSuccess(dummyListOKRs))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('get all okrs failure', async () => {
      const api = {
          dashboard: {
            getOkrCompleted: () => {
                  throw new Error("No se pudo listar los eventos");
              }
          }
      }
      const action = getOkrCompleted(managerId);
      await getOkrCompletedFlow({ api })({ dispatch })(next)(action);
      expect(dispatch).toHaveBeenCalledWith(getOkrCompletedFailure("No se pudo listar los eventos"))
      expect(next).toHaveBeenCalledWith(action);
  })
 })