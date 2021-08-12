import { logoutUser, logoutFailure, logoutSuccess } from "../../actions/administration/user";
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

describe('middleware logout user test', () => {

    test('logout user test happy path', async () => {
        const firebase = {
            user: {
                logout: () => {
                    return true;
                }
            }
        }
        const action = logoutUser()
        await logoutUserFlow({ firebase })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(logoutSuccess())
        expect(next).toHaveBeenCalledWith(action);
    })
    
    test('logout user test sad path', async () => {
        const firebase = {
            user: {
                logout: () => {
                    throw new Error("El usuario no se pudo desloguear");
                }
            }
        }
        const action = logoutUser()
        await logoutUserFlow({ firebase })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(logoutFailure("El usuario no se pudo desloguear"))
        expect(next).toHaveBeenCalledWith(action);
    })
})