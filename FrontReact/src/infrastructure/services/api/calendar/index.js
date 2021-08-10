import axios from "axios";

const API_KEY = "AIzaSyB-jW7s8YiV1vmb9afOX0873GnPcAHbPUQ";

const functions = {
    addEvent: async (event, token) => {
        return await axios.post(`https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendNotifications=true&sendUpdates=all&key=${API_KEY}`
            , event, {
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
    },

    listEvents: async (token) => {
        let results = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json'
                }
            })

        let filterOkr = results.data.items.filter(item => {
            if (item.summary === 'OKR') {
                return item;
            }
        })
        return filterOkr;
    }
}

export default functions