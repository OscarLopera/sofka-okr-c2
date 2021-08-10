import * as actions from '../../actions/administration/user';
import * as types from '../../types/administration/user';

const loginUserFlow = ({firebase, api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === types.LOGIN_USER){
        try{
            const resultAuth = await firebase.user.authUserWithGoogle();
            
            const userToken = resultAuth.credential.accessToken;
            const userId = await firebase.user.getUser().userId;
            const userEmail = await firebase.user.getUser().userEmail;
            const userName = await firebase.user.getUser().userName;
            const userPhone = await firebase.user.getUser().userPhone || "0000000";
            const userImage = await firebase.user.getUser().userImage;

            const user = await api.user.validateUser(userId);
            let vertical = {verticalname: user.verticalId};
            
            if(user.firstTime){
                const userFirebase = {
                    id: userId,
                    name: userName,
                    email: userEmail,
                    urlPhoto: userImage,
                    phone: userPhone,
                    firstTime: false,
                    verticalId:"verticalId",
                    rol: "rol"
                }
                await api.user.createUser(userFirebase); 
            } else{
                vertical = await api.user.getVertical(user.verticalId);
            }

            const userDataBase = {
                userId: userId,
                userName: userName,
                userImage: userImage,
                userVertical: vertical.verticalname, 
                firstTime: user.firstTime, 
                userToken: userToken
            }
            localStorage.setItem("user", JSON.stringify(userDataBase))
            dispatch(actions.loginUserSuccess(userDataBase));
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