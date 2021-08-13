import { loginUser, loginUserSuccess, loginUserFailure} from "../../actions/administration/user";
import userMiddleware from "../../middleware/administration/user";
import { gethistory } from '../../actions/notifications';

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

const userDummy =  {
    userName: 'Diego Vélez',
    userEmail: 'vegodiego@mail.com',
    userImage: 'https://lh3.googleusercontent.com/a-/AOh14Gj7uZNPmXxUq75fXmElWOoIYVGluejFdU4y5VjiMA=s96-c',
    userId: 'duBJ1kLZHPg1TRNNMilrCG3Nl0J2',
    userPhone: '5412793'
}

const verticalIdDummy = 'ya29a0ARrdaM-HDSgtBlY';
const verticalNameDummy = 'DEV';
const tokenDummy = 'ya29a0ARrdaM-HDSg';


describe('middleware login user test', () => {

    test('login user test happy path', async () => { 
        const api = {     
            user: {               
                validateUser: (id) => {
                    return {
                        verticalId: verticalIdDummy ,
                        firstTime: false,
                        idMongo:"12345" 
                    }
                },
                getVertical: (id) => {
                    return {
                        verticalname: verticalNameDummy
                    };
                }
            }
        }

        const firebase = {       
            user: {               
                getUser: () => {
                    return userDummy
                },
                authUserWithGoogle: () => {
                    return {
                        credential:{                        
                            accessToken: tokenDummy
                        }
                    }
                }
            }
        }
        
        userDummy.firstTime = false;
        userDummy.userVertical = verticalNameDummy,
        userDummy.userToken = tokenDummy;
        userDummy.userRol = "super usuario";
        userDummy.idMongo = "12345"


        const action = loginUser()
        await loginUserFlow({ api, firebase })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loginUserSuccess(userDummy))
        expect(next).toHaveBeenCalledWith(action);
    })

    test('login user test sad path', async () => {
        const api = {     
            user: {               
                validateUser: (id) => {
                    return {
                        verticalId: verticalIdDummy ,
                        firstTime: false,
                        idMongo:"12345" 
                    }
                },
                getVertical: (id) => {
                    return {
                        verticalname: verticalNameDummy
                    };
                }
            }
        }

        const firebase = {       
            user: {               
                getUser: () => {
                    throw new Error("No se obtuvo la informacion del usuario");
                },
                authUserWithGoogle: () => {
                    return {
                        credential:{                        
                            accessToken: tokenDummy
                        }
                    }
                }
            }
        }
        
        userDummy.firstTime = false;
        userDummy.userVertical = verticalNameDummy,
        userDummy.userToken = tokenDummy;
        userDummy.userRol = "super usuario";
        userDummy.idMongo = "12345"


        const action = loginUser()
        await loginUserFlow({ api, firebase })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(loginUserFailure("No se obtuvo la informacion del usuario"))
        expect(next).toHaveBeenCalledWith(action);
    })
})