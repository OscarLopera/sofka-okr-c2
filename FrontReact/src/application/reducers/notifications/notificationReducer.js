
const initialState = {
    notificationstatus: JSON.parse(localStorage.getItem('notifymanager')),
    historynotify: JSON.parse(localStorage.getItem('historynotify')),
    validarscreen: JSON.parse(localStorage.getItem('validar'))
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OBTENER_NOTIFICACIONES_SUCCESS":
            return { ...state, notificationstatus: action.payload };
        case "OBTENER_HISTORIAL_NOTIFICACIONES_SUCCESS":
            return { ...state, historynotify: action.payload };
        case "ENVIAR_NOTIFICACION_SUCESS":
            return { ...state, validarscreen: action.payload };
        case "CAMBIAR_NOTIFICACION_MAIL":
            return {
                ...state, notificationstatus: state.notificationstatus.map(notify => {
                    if (notify[0] === action.payload[0])
                        return [notify[0], !notify[1], notify[2]]
                    return notify
                })
            };
        case "CAMBIAR_NOTIFICACION_SCREEN":
            return {
                ...state, notificationstatus: state.notificationstatus.map(notify => {
                    if (notify[0] === action.payload[0])
                        return [notify[0], notify[1], !notify[2]]
                    return notify
                })
            };

        default:
            return state;
    }
}

export default notificationReducer;