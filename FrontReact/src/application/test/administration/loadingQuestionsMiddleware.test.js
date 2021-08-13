import { loadingQuestions, loadingQuestionsFailure, loadingQuestionsSuccess} from "../../actions/administration/user";
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

const questionsDummy = [{
    id: "6113516023b4da30102139d6",
    pregunta: "¿ Que fue primero?",
    respuesta: "el huevo o la gallina"
}];


describe('middleware loading questions test', () => {

    test('loading questions test happy path', async () => { 
        const api = {
            user: {               
                getQuestions: () => {
                    return questionsDummy;
                }
            }
        }
        const action = loadingQuestions()
        await loadingQuestionsFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loadingQuestionsSuccess(questionsDummy))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('loading questions test sad path', async () => {
        const api = {
            user: {
                getQuestions: () => {
                    throw new Error("No se pudieron obtener las preguntas");
                }
            }
        }
        const action = loadingQuestions()
        await loadingQuestionsFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loadingQuestionsFailure("No se pudieron obtener las preguntas"))
        expect(next).toHaveBeenCalledWith(action);
    })
})