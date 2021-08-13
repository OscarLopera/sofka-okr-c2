import { updateUser, updateUserSuccess, updateUserFailure} from "../../actions/administration/user";
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

const userDummy = {
    userId: 'duBJ1kLZHPg1TRNNMilrCG3Nl0J2',
    userName: 'Diego Vélez',
    userEmail: 'vegodiego@mail.com',
    userImage: 'https://lh3.googleusercontent.com/a-/AOh14Gj7uZNPmXxUq75fXmElWOoIYVGluejFdU4y5VjiMA=s96-c',
    userPhone: '0000000',
    userVerticalId: 'ya29a0ARrdaM-HDSgtBlYGHeDcDkrmC0NYbZc9V4qW',
    userToken: 'ya29a0ARrdaM',
    userRol: "super usuario",
    firstTime : false
}

const verticalNameDummy  = {
    verticalname: "DEV"
};


describe('middleware update user test', () => {

    test('update user test happy path', async () => { 
        const api = {
            user: {               
                updateUser: (userInfo) => {
                    return true;
                },
                getVertical: (verticalId) => {
                    return verticalNameDummy;
                }
            }
        }
        const action = updateUser(userDummy);
        await updateUserFlow({ api })({ dispatch })(next)(action);
        userDummy.userVertical = verticalNameDummy.verticalname;
        delete userDummy.userVerticalId;
        expect(dispatch).toHaveBeenCalledWith(updateUserSuccess(userDummy))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('update user test sad path', async () => {
        const api = {
            user: {               
                updateUser: (userInfo) => {
                    throw new Error("No se pudo actualizar el usuario");
                },
                getVertical: (verticalId) => {
                    throw new Error("No se obtuvo el nombre de la vertical");
                }
            }
        }
        const action = updateUser(userDummy);
        await updateUserFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(updateUserFailure("No se pudo actualizar el usuario"))
        expect(next).toHaveBeenCalledWith(action);
    })
})