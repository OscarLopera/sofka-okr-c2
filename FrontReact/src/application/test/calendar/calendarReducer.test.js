import { AddEvent, AddEventFailure, AddEventSuccess } from "../../actions/calendar/calendarActions";
import calendarReducer from "../../reducers/calendar/calendarReducer";
const initialState = {
    events: [],
    error: null,
    loading: false
}

describe('reducer calendar add test', () => {
    const dummyEvent = {
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

    test('reducer [calendar] add_event case', () => {
        const action = AddEvent();
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true })
    })

    test('reducer [calendar] add_event_success case', () => {
        const action = AddEventSuccess(dummyEvent);
        const state = calendarReducer(initialState, action);
        const optional = initialState.events;
        optional.push(dummyEvent);
        expect(state).toEqual({ ...initialState, events: optional, loading: false, error: null })
    })

    test('reducer [calendar] add_event_failure case', () => {
        const action = AddEventFailure("error Add_Event")
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, error: "error Add_Event" })
    })

    test('reducer default case', () => {
        const state = calendarReducer(initialState, "");
        expect(state).toEqual({ ...initialState })
    })
})