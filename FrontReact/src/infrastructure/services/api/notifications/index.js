import axios from "axios";

const notifications = {

    getStatusNotify: async (id) => {
        const res = await axios.get("https://pruebabacknoti.herokuapp.com/api/notifications/" + id)
        return res.data
    },

    updateStatusNotify: async (arraynotify, id) => {
        const response = await axios.put("https://pruebabacknoti.herokuapp.com/api/notifications/update-configuration/" + id, arraynotify)
        return response.data
    },

    addNotification: async (id, message) => {
        const response = await axios.put("https://pruebabacknoti.herokuapp.com/api/notifications/notification/" + id, message)
        return response.data
    },

    createHistoryNotification: async (idemail) => {
        const response = await axios.post('https://pruebabacknoti.herokuapp.com/api/notifications/notification/', idemail)
        console.log(response.data)
        return response.data
    },

    createNotificationsManager: async (id) => {
        const response = await axios.post('https://pruebabacknoti.herokuapp.com/api/notifications', id)
        return response.data
    },




    getHistoryNotifications: async (id) => {
        const response = await axios.get('https://pruebabacknoti.herokuapp.com/api/notifications/usernotifications/' + id)
        return response.data
    },

}

export default notifications