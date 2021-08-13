import * as actions from '../../actions/administration/user';

import { gethistory } from '../../actions/notifications';
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
            let idMongo = user.idMongo;
            
            if(user.firstTime){
                const userFirebase = {
                    idUser: userId,
                    name: userName,
                    email: userEmail,
                    urlPhoto: userImage,
                    phone: userPhone,
                    firstTime: false,
                    verticalId:"verticalId",
                    rol: "rol"
                }
                const userApi = await api.user.createUser(userFirebase);
                idMongo = userApi.id;
                await api.notifications.createHistoryNotification({idUser:userId,emailUser:userEmail})
                await api.notifications.createNotificationsManager({userId:userId})

            } else{
                vertical = await api.user.getVertical(user.verticalId);
            }
            dispatch(gethistory(userId))
            
            const userDataBase = {
                userId: userId,
                userName: userName,
                userEmail: userEmail,
                userImage: userImage,
                userPhone: userPhone,
                firstTime: user.firstTime, 
                userVertical: vertical.verticalname, 
                userToken: userToken,
                userRol: "super usuario",
                idMongo: idMongo
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

const closeWelcomeFlow = () => ({dispatch, getState}) => next => async (action) => { 
    next(action);
    if(action.type === types.CLOSE_WELCOME){
        const currentUser = getState().user.user;
        const newUser = {...currentUser, firstTime: false};
        localStorage.setItem("user", JSON.stringify(newUser));
        dispatch(actions.closeWelcomeSuccess(newUser));
    }
}

const loadingVerticalsFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === types.LOADING_VERTICALS){
        try{   
            const verticals = await api.user.getVerticals();  
            dispatch(actions.loadingVerticalsSuccess(verticals));
        }catch (error){
            dispatch(actions.loadingVerticalsFailure(error.message));
        }
    }
}

const updateUserFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === types.UPDATE_USER){
        try{   
            const user = action.payload;

            const userInfo = {
                idUser: user.userId,
                name: user.userName,
                email: user.userEmail,
                urlPhoto: user.userImage,
                phone: user.userPhone,
                firstTime: false,
                verticalId: user.userVerticalId,
                rol: "super usuario"
            }
            await api.user.updateUser(userInfo); 

            const vertical = await api.user.getVertical(user.userVerticalId);

            const userToState = {
                userId: user.userId,
                userName: user.userName,
                userEmail: user.userEmail,
                userImage: user.userImage,
                userPhone: user.userPhone,
                firstTime: false, 
                userVertical: vertical.verticalname, 
                userToken: user.userToken,
                userRol: "super usuario",
                idMongo: user.idMongo
            }
            localStorage.setItem("user", JSON.stringify(userToState))
            dispatch(actions.updateUserSuccess(userToState));
        }catch (error){
            dispatch(actions.updateUserFailure(error.message));
        }
    }
}

const loadingQuestionsFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === types.LOADING_QUESTIONS){
        try{   
            const questions = await api.user.getQuestions(); 
            dispatch(actions.loadingQuestionsSuccess(questions));
        }catch (error){
            dispatch(actions.loadingQuestionsFailure(error.message));
        }
    }
}

const userMiddleware = [
    loginUserFlow,
    logoutUserFlow,
    closeWelcomeFlow,
    loadingVerticalsFlow,
    updateUserFlow,
    loadingQuestionsFlow
]

export default userMiddleware;