import calendarMiddleware from "../../../middleware/calendar/calendarMiddleware";
import {AddEvent, AddEventFailure, AddEventSuccess} from "../../../actions/calendar/calendarActions";

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
            conferenceSolutionKey: {type: "hangoutsMeet"}
        },
    },
    attendees: [
        {email: "sebas99cano@gmail.com"},
        {email: "sebas.cano1036@gmail.com"},
        {email: "juan_cano82161@elpoli.edu.co"},
        {email: "anahernandez814@gmail.com"}
    ],
    reminders: {
        useDefault: "useDefault",
        overrides: [
            {method: 'email', minutes: 60 * 24},
            {method: 'popup', minutes: 10}
        ]
    },
    sendUpdates: "all",
    source: {
        title: "example",
        url: "http://localhost:3000"
    }
}


const [addEventFlow] = calendarMiddleware;

const dispatch = jest.fn();
const next = jest.fn();

describe('middleware calendar add event test', () => {

    test('add event flow test happy path', async () => {
        const api = {
            calendar: {
                addEvent: () => {
                    return dummyEvent;
                }
            }
        }
        const action = AddEvent(dummyEvent, "token")
        await addEventFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(AddEventSuccess(dummyEvent))
        expect(next).toHaveBeenCalledWith(action);
    })
    test('add event flow test sad path', async () => {
        const api = {
            calendar: {
                addEvent: () => {
                    throw new Error("error message");
                }
            }
        }
        const action = AddEvent(dummyEvent, "token")
        await addEventFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(AddEventFailure("error message"))
        expect(next).toHaveBeenCalledWith(action);
    })
})