import * as actions from '../../actions/administration/user';
import * as types from '../../types/administration/user';

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === types.LOGIN_USER){
        try{
            await firebase.user.authUserWithGoogle()

            const userId = await firebase.user.getUser().userId;
            const userEmail = await firebase.user.getUser().userEmail;
            const userName = await firebase.user.getUser().userName;
            const userPhone = await firebase.user.getUser().userPhone;
            const userImage = await firebase.user.getUser().userImage;

            const userFirebase = {
                userId: userId,
                userEmail: userEmail,
                userName: userName,
                userPhone: userPhone,
                userImage: userImage
            }
            const user = await api.user.validateUser(userFirebase); //API

            const userDataBase = {
                userId: userId,
                userName: userName,
                userImage: userImage,
                userVertical: user.vertical //API
            }
            localStorage.setItem("user", JSON.stringify(userDataBase))
            dispatch(actions.loginUserSuccess(user));
        }catch (error){
            dispatch(actions.loginUserFailure(error.message));
        }
    }
}

const logoutUserFlow = ({firebase}) => ({dispatch}) => next => async (action) => { 
    next(action);
    if(action.type === types.LOGOUT_USER){
        try{
            await firebase.user.logout()
            localStorage.removeItem('user');
            dispatch(actions.logoutSuccess());
        }catch (error){
            dispatch(actions.logoutFailure(error.message));
        }
    }
}


export default [
    loginUserFlow,
    logoutUserFlow
]