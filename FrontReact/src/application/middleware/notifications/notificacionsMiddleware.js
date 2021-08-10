import { getStatusNotifySuccess } from "../../actions/notifications";


const GetStatusNotificationFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "OBTENER_NOTIFICACIONES") {
        try {
            const okr = await api.notifications.getStatusNotify()
            const arraymail = convertirobjetoToarray(okr)
            dispatch(getStatusNotifySuccess(arraymail))
        } catch (error) {
            console.log(error)
        }
    }
}

const ChangeStatusNotificationFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "CAMBIAR_NOTIFICACION") {
        try {
            const objeto = convertirarrayToObjeto(action.payload)
            const okr = await api.notifications.updateStatusNotify(objeto)
            //dispatch(getStatusNotifySuccess(arraymail))
        } catch (error) {
            console.log(error)
        }
    }
}

const convertirarrayToObjeto2 = (array) => {
    const arrayscreen = array
    console.log(array)
    const len = arrayscreen.length;
    for (var i = 0; i < len; i++) {
        arrayscreen[i].splice(1, 1);
    }
    const objeto ={
        mail:Object.fromEntries(array),
        screen:Object.fromEntries(arrayscreen)
    }

    return objeto

}

const convertirarrayToObjeto = (array) => {
    const objeto = {
        "mail": {
            "OkrCreated": array[0][1],
            "KrCreated": array[1][1],
            "OkrUpdated": array[2][1],
            "KrUpdated": array[3][1],
            "OkrFinished": array[4][1],
            "KrFinished": array[5][1],
            "OkrExpired": array[6][1],
            "KrExpired": array[7][1],
            "OkrAssigned": array[8][1],
            "KrAssigned": array[9][1],
            "OkrDeleted": array[10][1],
            "krDeleted": array[11][1]
        },
        "screen": {
            "OkrCreated": array[0][2],
            "KrCreated": array[1][2],
            "OkrUpdated": array[2][2],
            "KrUpdated": array[3][2],
            "OkrFinished": array[4][2],
            "KrFinished": array[5][2],
            "OkrExpired": array[6][2],
            "KrExpired": array[7][2],
            "OkrAssigned": array[8][2],
            "KrAssigned": array[9][2],
            "OkrDeleted": array[10][2],
            "krDeleted": array[11][2]
        }
    }
    return objeto
}


export const convertirobjetoToarray = (okr) => {
    const arraymail = Object.entries(okr.mail);
    const arrayscreen = Object.entries(okr.screen);
    const len = arraymail.length;
    for (var i = 0; i < len; i++) {
        arraymail[i].push(arrayscreen[i][1])
    }
    return arraymail
}

const middlewareNotify = [
    GetStatusNotificationFlow,
    ChangeStatusNotificationFlow
]

export default middlewareNotify