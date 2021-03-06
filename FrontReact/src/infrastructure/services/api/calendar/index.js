import axios from "axios";
import firebase from "firebase";

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
        return results.data.items.filter(item => (item.summary === 'OKR') ? item : null);
    },

    deleteEvent: async (id, token) => {
        await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}?sendUpdates=all&key=${API_KEY}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
    },

    updateEvent: async (event, token) => {
        return await axios.put(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${event.id}?conferenceDataVersion=1&sendNotifications=true&sendUpdates=all&key=${API_KEY}`,
            event, {
            headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
    },
    getEmailUser: async () => {
         const data = await axios.get('https://okr-final-app.herokuapp.com/api/calendar/getallusers');
        return data.data
    },
    token : async () => {
        const auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
            let sessionTimeout = null;
            if (user === null) {
                sessionTimeout && clearTimeout(sessionTimeout);
                sessionTimeout = null;
            } else {
                user.getIdTokenResult().then((idTokenResult) => {
                    const authTime = idTokenResult.claims.auth_time * 1000;
                    const sessionDuration = 1000 * 60 * 60 * 24 * 30;
                    const millisecondsUntilExpiration = sessionDuration - (Date.now() - authTime);
                    setTimeout(() => auth.signOut(), millisecondsUntilExpiration);
                });
            }
        })
    }
}

export default functions