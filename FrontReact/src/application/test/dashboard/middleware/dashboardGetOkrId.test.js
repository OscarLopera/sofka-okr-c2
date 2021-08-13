import middlewareOKRs from "../../../middleware/dashboard/dashboardmiddleware";
import {
    getOkrId,
    getOkrIdSuccess,
    getOkrIdFailure,

} from "../../../actions/dashboard/";


const managerId = "611573b4a2605b535bfab399";
const dummyOkr = [
    {
        id: "6114ace96bffc40015cf1c62",
        objective: "un objetivo",
        title: "un titulo",
        managerId: "611573b4a2605b535bfab399",
        description: "una descripcion",
        verticalId: "Calidad",
        currentProgress: 0.0,
        historicalProgress: [],
        krs: []
    }
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

    test('get Okr id', async () => {
        const api = {
            dashboard: {
                getOkrId: () => {
                    return dummyOkr;
                }
            }
        }
        const action = getOkrId(managerId)
        await getOkrIdFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getOkrIdSuccess(dummyOkr))
        expect(next).toHaveBeenCalledWith(action);
    })
    test('get okr id failure', async () => {
        const api = {
            dashboard: {
                getOkrId: () => {
                    throw new Error("No se pudo listar los eventos");
                }
            }
        }
        const action = getOkrId(managerId);
        await getOkrIdFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getOkrIdFailure("No se pudo listar los eventos"))
        expect(next).toHaveBeenCalledWith(action);
    })
})