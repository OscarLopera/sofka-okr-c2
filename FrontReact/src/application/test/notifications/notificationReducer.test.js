import { changeStatusNotification, changeStatusNotificationmail, changeStatusNotificationscreen,  gethistorysuccess, getStatusNotifySuccess } from '../../actions/notifications';
import notificationReducer from '../../reducers/notifications/notificationReducer';

describe('reducer notification test functions', () => {

   
    const dummystatusNotify={
            "mail": {
              "OkrCreated": true,
              "KrCreated": true,
              "OkrUpdated": true,
              "KrUpdated": true,
              "OkrFinished": true,
              "KrFinished": true,
              "OkrExpired": true,
              "KrExpired": true,
              "OkrAssigned": true,
              "KrAssigned": true,
              "OkrDeleted": true,
              "krDeleted": true
            },
            "screen": {
              "OkrCreated": true,
              "KrCreated": true,
              "OkrUpdated": true,
              "KrUpdated": true,
              "OkrFinished": true,
              "KrFinished": true,
              "OkrExpired": true,
              "KrExpired": true,
              "OkrAssigned": true,
              "KrAssigned": true,
              "OkrDeleted": true,
              "krDeleted": true
            }
          
    }

    const dummyarray=[
        ["OkrCreated",true,true],
        ["KrCreated",true,true],
        ["OkrUpdated",true,true],
        ["OkrFinished",true,true],
        ["KrFinished",true,true],
        ["OkrExpired",true,true],
        ["KrExpired",true,true],
        ["OkrAssigned",true,true],
        ["KrAssigned",true,true],
        ["OkrDeleted",true,true],
        ["krDeleted",true,true],

    ]

    const dummyhistory =[{message:"hola mundo",
    date:"12/7/2021"}]

    const dummymail = [
        "OkrCreated",false,true
    ]

    const dummyscreen = [
        "OkrCreated",true,false
    ]

    const initialstate = {
        notificationstatus: {}
    }

    test('reducer OBTENER_NOTIFICACIONES_SUCCESS case', () => {
        const action = getStatusNotifySuccess(dummyarray);
        const state = notificationReducer(initialstate, action);
        expect(state).toEqual({ ...initialstate,  notificationstatus: dummyarray})
    })


    test('reducer OBTENER_HISTORIAL_NOTIFICACIONES case', () => {
        const action = gethistorysuccess(dummyhistory);
        const state = notificationReducer(initialstate, action);
        expect(state).toEqual({ ...initialstate,  historynotify: dummyhistory})
    })

    test('reducer CAMBIAR_NOTIFICACION_MAIL case', () => {
        const initialstate2 = {...initialstate,notificationstatus:dummyarray}
        const action = changeStatusNotificationmail(dummymail);
        const state = notificationReducer(initialstate2, action);
        const dummy2 = [...dummyarray]
        dummy2[0][1]=false
        expect(state).toEqual({ ...initialstate,  notificationstatus: dummy2})
    })

    test('reducer CAMBIAR_NOTIFICACION_SCREEN case', () => {
        const initialstate2 = {...initialstate,notificationstatus:dummyarray}
        const action = changeStatusNotificationscreen(dummyscreen);
        const state = notificationReducer(initialstate2, action);
        const dummy2 = [...dummyarray]
        dummy2[0][2]=false
        expect(state).toEqual({ ...initialstate,  notificationstatus: dummy2})
    })

    test('reducer CAMBIAR_NOTIFICACION_SCREEN case', () => {
        const state = notificationReducer(initialstate, "CASO_TRISTE");
        expect(state).toEqual({ ...initialstate})
    })
    
    



})
