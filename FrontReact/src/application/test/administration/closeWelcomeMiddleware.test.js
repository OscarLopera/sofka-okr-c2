import {closeWelcome, closeWelcomeSuccess} from "../../actions/administration/user";
import userMiddleware from "../../middleware/administration/user";

const [
    loginUserFlow,
    logoutUserFlow,
    closeWelcomeFlow,
    loadingVerticalsFlow,
    updateUserFlow,
    loadingQuestionsFlow
] = userMiddleware;

const dispatch = jest.fn()
const next = jest.fn();
const getState = () => ({
    user: {
        user: userDummy
    }

})

const userDummy = {
    userId: 'duBJ1kLZHPg1TRNNMilrCG3Nl0J2',
    userName: 'Diego Vélez',
    userEmail: 'vegodiego@mail.com',
    userImage: 'https://lh3.googleusercontent.com/a-/AOh14Gj7uZNPmXxUq75fXmElWOoIYVGluejFdU4y5VjiMA=s96-c',
    userPhone: '0000000',
    userVerticalId: 'ya29a0ARrdaM-HDSgtBlYGHeDcDkrmC0NYbZc9V4qW',
    userToken: 'ya29a0ARrdaM',
    userRol: "super usuario",
    firstTime: true
}

describe('close welcome test', () => {
    test('close welcome test happy path', async () => {
        const action = closeWelcome()
        await closeWelcomeFlow()({dispatch, getState})(next)(action);
        expect(dispatch).toHaveBeenCalled()
        expect(next).toHaveBeenCalledWith(action);
    })
})