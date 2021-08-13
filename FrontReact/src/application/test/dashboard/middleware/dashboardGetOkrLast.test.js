import middlewareOKRs from "../../../middleware/dashboard/dashboardmiddleware";
import {
    getidOkrLast,
    getidOkrLastSuccess,
    getidOkrLastFailure

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

    test('get user with okr last', async () => {
        const api = {
            dashboard: {
                getidOKRLast: (managerId) => {
                    return dummyOkr;
                }
            }
        }
        const action = getidOkrLast(managerId)
        await getidOKRLastFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getidOkrLastSuccess(dummyOkr))
        expect(next).toHaveBeenCalledWith(action);
    })
    test('get user whith okr last failure', async () => {
        const api = {
            dashboard: {
                getidOKRLast: () => {
                    throw new Error("No se pudo listar los eventos");
                }
            }
        }
        const action = getidOkrLast(managerId);
        await getidOKRLastFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getidOkrLastFailure("No se pudo listar los eventos"))
        expect(next).toHaveBeenCalledWith(action);
    })
})