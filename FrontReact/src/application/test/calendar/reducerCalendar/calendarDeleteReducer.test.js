import { DeleteEvent, DeleteEventFailure, DeleteEventSuccess } from "../../../actions/calendar/calendarActions";
import calendarReducer from "../../../reducers/calendar/calendarReducer";
const initialState = {
    events: [],
    error: null,
    loading: false
}

const token = 'AIzaSyC-_eI17Kv6_hl2dtAGTpFvgrb7e21567'
const error = 'Ha ocurrido un error'
describe('reducer calendar delete test', ()=>{
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

    test('reducer [calendar] delete_event', ()=>{
        const action = DeleteEvent(dummyEvent.id,token);
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true})
    })

    test('reducer [calendar] delete_events_success',()=>{
        const action = DeleteEventSuccess();
        const state = calendarReducer(initialState, action)
        expect(state).toEqual({...initialState, loading: false, error: null})
    })

    test('reducer [calendar] delete_events_failure',()=>{
        const action = DeleteEventFailure(error);
        const state = calendarReducer(initialState, action)
        expect(state).toEqual({...initialState, loading: false, error: error})
    } )
})