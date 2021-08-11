import axios from "axios";

const baseUrl = 'http://localhost:4000/noti';



const notifications = {
    
    getStatusNotify: async (id) => {
        const res = await axios.get("https://pruebabacknoti.herokuapp.com/api/notifications/"+id)
        return res.data
    },

    updateStatusNotify: async (arraynotify) => {
        const response = await axios.put("https://pruebabacknoti.herokuapp.com/api/notifications/update-configuration/611169b3a62cf558eff7a231",arraynotify)
        console.log(response.data)
        return response.data
    }
    
}

export default notifications