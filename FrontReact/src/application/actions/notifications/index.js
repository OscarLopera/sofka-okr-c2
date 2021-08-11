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

// export const createNotificationManagerForNewUser = (notification) =>({
//     type: "CAMBIAR_NOTIFICACION",
//     payload: notification
// });
// export const changeStatusNotificationSuccess = (notification) =>({
//     type: "CAMBIAR_NOTIFICACION_SUCCESS",
//     payload: notification
// });



