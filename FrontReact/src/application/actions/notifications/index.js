export const getStatusNotification = () =>({
    type: "OBTENER_NOTIFICACIONES",
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

export const changeStatusNotification = (notification) =>({
    type: "CAMBIAR_NOTIFICACION",
    payload: notification
});

// export const changeStatusNotificationSuccess = (notification) =>({
//     type: "CAMBIAR_NOTIFICACION_SUCCESS",
//     payload: notification
// });



