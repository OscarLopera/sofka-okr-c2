import { changeStatusNotification, getStatusNotification, getStatusNotifySuccess } from "../../actions/notifications";
import middlewareNotify, { convertirobjetoToarray,ChangeStatusNotificationFlow, convertirarrayToObjeto } from "../../middleware/notifications/notificacionsMiddleware";


describe('middleware user test functions', () => {
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
        ["OkrCreated",true,false],
        ["KrCreated",true,false],
        ["OkrUpdated",true,false],
        ["KrUpdated",true,false],
        ["OkrFinished",true,false],
        ["KrFinished",true,false],
        ["OkrExpired",true,false],
        ["KrExpired",true,false],
        ["OkrAssigned",true,false],
        ["KrAssigned",true,false],
        ["OkrDeleted",true,false],
        ["krDeleted",true,false],]
    const api = {
        notifications: {
            getStatusNotify: () => {
                return dummystatusNotify
            },
            updateStatusNotify:()=>{
                return dummystatusNotify
            }
            
        }
    }

    const dispatch = jest.fn();
    const next = jest.fn();

    const [GetStatusNotificationFlow,ChangeStatusNotificationFlow] = middlewareNotify;

    describe('status notification flow test', () => {

        const action = getStatusNotification();

        test('status notification flow test', async () => {
            await GetStatusNotificationFlow({api})({dispatch})(next)(action);
            const okr = await api.notifications.getStatusNotify()
            const arraymail = convertirobjetoToarray(okr)
            expect(dispatch).toHaveBeenCalledWith(getStatusNotifySuccess(arraymail))
            expect(next).toHaveBeenCalledWith(action);
        });

    })


    describe('status getnotificationmanager flow test', () => {

        const action = changeStatusNotification(dummyarray);

        test('status changenotificationmanager flow test', async () => {
            await ChangeStatusNotificationFlow({api})({dispatch})(next)(action);
            const objeto = convertirarrayToObjeto(action.payload)
            await api.notifications.updateStatusNotify(objeto, action.id)
            expect(next).toHaveBeenCalledWith(action);
        });

    })

})