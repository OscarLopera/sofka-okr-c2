import { getStatusNotifySuccess,gethistorysuccess, sendNotificationSucess } from "../../actions/notifications";


const GetStatusNotificationFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "OBTENER_NOTIFICACIONES") {
        try {
            const okr = await api.notifications.getStatusNotify(action.payload)
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
            await api.notifications.updateStatusNotify(objeto, action.id)
        } catch (error) {
            console.log(error)
        }
    }
}

const GetHistoryNotify = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "OBTENER_HISTORIAL_NOTIFICACIONES") {
        try {
            const history = await api.notifications.getHistoryNotifications(action.payload)
            localStorage.setItem("historynotify", JSON.stringify(history))
            dispatch(gethistorysuccess(history))
        } catch (error) {
            console.log(error)
        }
    }
}

const AddNotify = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === "ENVIAR_NOTIFICACION") {
        try {
            const noti = await api.notifications.addNotification(action.id,action.payload)
            localStorage.setItem("validar", JSON.stringify(noti));
            dispatch(sendNotificationSucess(noti))
        } catch (error) {
            console.log(error)
        }
    }
}

export const convertirarrayToObjeto = (array) => {
    const objeto = {
        "mail": {
            "Crear_Okr": array[0][1],
            "Eliminar_Okr": array[1][1],
            "Finalizar_Okr": array[2][1],
            "Asignar_Okr": array[3][1],
            "Reunion_Asignada": array[4][1],
            "Reunion_Cancelada": array[5][1],
          
        },
        "screen": {
            "Crear_Okr": array[0][2],
            "Eliminar_Okr": array[1][2],
            "Finalizar_Okr": array[2][2],
            "Asignar_Okr": array[3][2],
            "Reunion_Asignada": array[4][2],
            "Reunion_Cancelada": array[5][2],
            
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
    ChangeStatusNotificationFlow,
    GetHistoryNotify,
    AddNotify
]

export default middlewareNotify