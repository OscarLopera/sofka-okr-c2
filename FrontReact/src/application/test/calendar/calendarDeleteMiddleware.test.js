import {
    DeleteEvent,
    DeleteEventFailure,
    DeleteEventSuccess,
} from "../../actions/calendar/calendarActions";
import calendarMiddleware from "../../middleware/calendar/calendarMiddleware";

const token = 'AIzaSyC-_eI17Kv6_hl2dtAGTpFvgrb7e21567'

const dummyEvent = {
    id: "4487dfh",
    kind: "calendar#rko",
    summary: "OKR",
    description: "titulo del OKR",
    location: "veremos....",
    start: {
        dateTime: "2021-08-10T13:00:00",
        timeZone: "America/Bogota",
    },
    end: {
        dateTime: "2021-08-10T14:00:00",
        timeZone: "America/Bogota",
    },

    conferenceData: {
        createRequest: {
            requestId: "sample13",
            conferenceSolutionKey: { type: "hangoutsMeet" },
        },
    },
    attendees: [
        { email: "sebas99cano@gmail.com" },
        { email: "sebas.cano1036@gmail.com" },
        { email: "juan_cano82161@elpoli.edu.co" },
        { email: "anahernandez814@gmail.com" },
    ],
    reminders: {
        useDefault: "useDefault",
        overrides: [
            { method: "email", minutes: 60 * 24 },
            { method: "popup", minutes: 10 },
        ],
    },
    sendUpdates: "all",
    source: {
        title: "example",
        url: "http://localhost:3000",
    },
}

const [addEventFlow,
    listEventFlow,
    deleteEventFlow] = calendarMiddleware;
const dispatch = jest.fn();
const next = jest.fn();

describe('delete comment flow', () => {
    test('delete event flow test happy path', async () => {
        const api = {
            calendar: {
                deleteEvent: () => {
                    return dummyEvent.id,token;
                }
            }
        }
        const action = DeleteEvent(dummyEvent.id,token);
        await deleteEventFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(DeleteEventSuccess(dummyEvent.id));
        expect(next).toHaveBeenCalledWith(action);

    })
    test('delete event flow test sad path', async () => {
        const api = {
            calendar: {
                deleteEvent: () => {
                    throw new Error("error message");
                }
            }
        }
        const action = DeleteEvent(dummyEvent.id);
        await deleteEventFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(DeleteEventFailure("error message"));
        expect(next).toHaveBeenCalledWith(action);
    })
})

