export const getStatusNotification = (id) =>({
    type: "OBTENER_NOTIFICACIONES",
    payload:id
});

export const getStatusNotifySuccess = (notify) =>({
    type: "OBTENER_NOTIFICACIONES_SUCCESS",
    payload: notify
});

export const changeStatusNotificationmail = (notification) =>({
    type: "CAMBIAR_NOTIFICACION_MAIL",
    payload: notification
});

export const changeStatusNotificationscreen = (notification) =>({
    type: "CAMBIAR_NOTIFICACION_SCREEN",
    payload: notification
});

export const changeStatusNotification = (notification, id) =>({
    type: "CAMBIAR_NOTIFICACION",
    payload: notification,
    id: id
});

export const gethistory = (id) =>({
    type: "OBTENER_HISTORIAL_NOTIFICACIONES",
    payload: id
});

export const gethistorysuccess = (history) =>({
    type: "OBTENER_HISTORIAL_NOTIFICACIONES_SUCCESS",
    payload: history
});

export const sendNotification = (id,message) =>({
    type: "ENVIAR_NOTIFICACION",
    payload: message,
    id:id
});


