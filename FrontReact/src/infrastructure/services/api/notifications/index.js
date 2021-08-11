import axios from "axios";

const baseUrl = 'http://localhost:4000/noti';



const notifications = {
    
    getStatusNotify: async (id) => {
        const res = await axios.get("https://pruebabacknoti.herokuapp.com/api/notifications/"+id)
        return res.data
    },

    updateStatusNotify: async (arraynotify, id) => {
        const response = await axios.put("https://pruebabacknoti.herokuapp.com/api/notifications/update-configuration/"+id,arraynotify)
        return response.data
    },

    createNotificationsManager: async (id) => {
        const response = await axios.post('https://pruebabacknoti.herokuapp.com/api/notifications',id)
        return response.data
    }
    
}

export default notifications