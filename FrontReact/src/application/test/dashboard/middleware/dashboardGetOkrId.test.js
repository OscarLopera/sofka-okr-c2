import middlewareOKRs from "../../../middleware/dashboard/dashboardmiddleware";
import {
    getOkrId,
    getOkrIdSuccess,

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
        
        const action = getOkrId(managerId)
        await getOkrIdFlow()({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(getOkrIdSuccess(managerId))
        expect(next).toHaveBeenCalledWith(action);
    })
 
})