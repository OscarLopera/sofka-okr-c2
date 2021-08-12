import {UpdateEvent, UpdateEventFailure,UpdateEventSuccess} from "../../actions/calendar/calendarActions";
import calendarReducer from "../../reducers/calendar/calendarReducer";
const initialState = {
    events: [],
    error: null,
    loading: false
}

const token = 'AIzaSyC-_eI17Kv6_hl2dtAGTpFvgrb7e21567'
const error = 'Ha ocurrido un error'

describe('reducer calendar update test', ()=>{
    const dummyEvent = {
        id: "4487dfh",
        kind: "calendar#rko",
        summary: "OKR",
        description: "titulo del OKR",
        location: "veremos....",
        start: {
            dateTime: "2021-08-10T13:00:00",
            timeZone: "America/Bogota"
        },
        end: {
            dateTime: "2021-08-10T14:00:00",
            timeZone: "America/Bogota"
        },

        conferenceData: {
            createRequest: {
                requestId: "sample13",
                conferenceSolutionKey: { type: "hangoutsMeet" }
            },
        },
        attendees: [
            { email: "sebas99cano@gmail.com" },
            { email: "sebas.cano1036@gmail.com" },
            { email: "juan_cano82161@elpoli.edu.co" },
            { email: "anahernandez814@gmail.com" }
        ],
        reminders: {
            useDefault: "useDefault",
            overrides: [
                { method: 'email', minutes: 60 * 24 },
                { method: 'popup', minutes: 10 }
            ]
        },
        sendUpdates: "all",
        source: {
            title: "example",
            url: "http://localhost:3000"
        }
    }

    test('reducer [calendar] update_event', ()=>{
        const action = UpdateEvent(dummyEvent,token);
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true})
    })

    test('reducer [calendar] update_event_success', ()=>{
        const action = UpdateEventSuccess(dummyEvent);
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false, events:[], error: null})
    })

    test('[calendar] update_event_failure', ()=>{
        const action = UpdateEventFailure(error);
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false,error: error})
    })
})