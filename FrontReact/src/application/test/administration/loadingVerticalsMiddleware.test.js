import { loadingVerticals, loadingVerticalsSuccess, loadingVerticalsFailure} from "../../actions/administration/user";
import userMiddleware from "../../middleware/administration/user";

const [
    loginUserFlow,
    logoutUserFlow,
    closeWelcomeFlow,
    loadingVerticalsFlow,
    updateUserFlow,
    loadingQuestionsFlow
] = userMiddleware;

const dispatch = jest.fn();
const next = jest.fn();

const verticalsDummy = [{id: "6113506023b4da30102139d4", verticalname: "QA"}];

describe('middleware loading verticals test', () => {

    test('loading verticals test happy path', async () => { 
        const api = {
            user: {
                getVerticals: () => {
                    return verticalsDummy;
                }
            }
        }
        const action = loadingVerticals()
        await loadingVerticalsFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loadingVerticalsSuccess(verticalsDummy))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('loading verticals test sad path', async () => {
        const api = {
            user: {
                getVerticals: () => {
                    throw new Error("No se pudieron obtener las verticales");
                }
            }
        }
        const action = loadingVerticals()
        await loadingVerticalsFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loadingVerticalsFailure("No se pudieron obtener las verticales"))
        expect(next).toHaveBeenCalledWith(action);
    })
})