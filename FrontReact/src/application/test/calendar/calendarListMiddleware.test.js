import { ListEvents, ListEventsFailure, ListEventsSuccess } from "../../actions/calendar/calendarActions";
import calendarMiddleware from "../../middleware/calendar/calendarMiddleware"

const token = 'AIzaSyC-_eI17Kv6_hl2dtAGTpFvgrb7e21567';
const listEventsDummy = [
    {
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
    },
    {
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
]

const [addEventFlow,listEventFlow] = calendarMiddleware;

const dispatch = jest.fn();
const next = jest.fn();

describe('middleware calendar list event test', () => {

    test('list event flow test happy path', async () => {
        const api = {
            calendar: {
                listEvents: () => {
                    return listEventsDummy;
                }
            }
        }
        const action = ListEvents(token)
        await listEventFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(ListEventsSuccess(listEventsDummy))
        expect(next).toHaveBeenCalledWith(action);
    })
    test('list event flow test sad path', async () => {
        const api = {
            calendar: {
                listEvents: () => {
                    throw new Error("No se pudo listar los eventos");
                }
            }
        }
        const action = ListEvents(token);
        await listEventFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(ListEventsFailure("No se pudo listar los eventos"))
        expect(next).toHaveBeenCalledWith(action);
    })
})