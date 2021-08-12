import { getStatusNotification, getStatusNotifySuccess } from "../../actions/notifications";
import middlewareNotify, { convertirobjetoToarray } from "../../middleware/notifications/notificacionsMiddleware";


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
    const api = {
        notifications: {
            getStatusNotify: () => {
                return dummystatusNotify
            },
            
        }
    }

    const dispatch = jest.fn();
    const next = jest.fn();

    const [GetStatusNotificationFlow] = middlewareNotify;

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

})