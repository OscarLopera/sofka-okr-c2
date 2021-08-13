import { fireEvent, render } from "@testing-library/react";
import {EventItemComponent} from "../../components/calendar/EventItemComponent"
import {eventsDummy} from "./CalendarComponent.test";
import '@testing-library/jest-dom'
import {dummyList} from "../../../application/test/calendar/reducerCalendar/calendarGetEmailsReducer.test";

export const dummyItem = {
    kind: 'calendar#event',
    etag: '"3257494568730000"',
    id: 'ululbsrf6lshff5iaeq90vlta',
    status: 'confirmed',
    htmlLink: 'https://www.google.com/calendar/event?eid=dWx1bGJzcmY2bHNoZmY1aWFlcTkwdmx0YW8gZGFuaWVsYXJpc3R5MjJAbQ',
    created: '2021-08-12T05:48:04.000Z',
    updated: '2021-08-12T05:48:04.412Z',
    summary: 'OKR',
    creator: {
        email: 'danielaristy22@gmail.com',
        self: true
    },
    organizer: {
        email: 'danielaristy22@gmail.com',
        self: true
    },
    start: {
        dateTime: '2021-08-12T00:47:00-05:00',
        timeZone: 'America/Bogota'
    },
    end: {
        dateTime: '2021-08-12T00:47:00-05:00',
        timeZone: 'America/Bogota'
    },
    iCalUID: 'ululbsrf6lshff5iaeq90vltao@google.com',
    sequence: 0,
    hangoutLink: 'https://meet.google.com/sie-dzdb-xes',
    conferenceData: {
        createRequest: {
            requestId: 'sample13',
            conferenceSolutionKey: {
                type: 'hangoutsMeet'
            },
            status: {
                statusCode: 'success'
            }
        },
        entryPoints: [
            {
                entryPointType: 'video',
                uri: 'https://meet.google.com/sie-dzdb-xes',
                label: 'meet.google.com/sie-dzdb-xes'
            }
        ],
        conferenceSolution: {
            key: {
                type: 'hangoutsMeet'
            },
            name: 'Google Meet',
            iconUri: 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
        },
        conferenceId: 'sie-dzdb-xes',
        signature: 'ADXwMqNm5Vw34Jduh3dw3CE4Njfs'
    },
    reminders: {
        useDefault: false
    },
    eventType: 'default'
}
describe('Event Items component test', () => {
    test('testing delete button component', () => {
        const events = eventsDummy;
        const DeleteEvent = jest.fn();
        const UpdateEvent = jest.fn();

        const dummyToken = "token";
        const email = 'danielaristy22@gmail.com';

        const { getByTestId } = render(
            <EventItemComponent events={events} DeleteEvent={DeleteEvent} UpdateEvent={UpdateEvent} token={dummyToken} email={email} userEmails={dummyList} userId={"userid"}/>
        )

        const buttonDeleteEvent = getByTestId("btn-test-deleteEvent-ululbsrf6lshff5iaeq90vltad");
        const buttonUpdateEvent = getByTestId("btn-test-modal-ululbsrf6lshff5iaeq90vlta");

        fireEvent.click(buttonDeleteEvent);
        fireEvent.click(buttonUpdateEvent);

        expect(DeleteEvent).toHaveBeenCalledWith('ululbsrf6lshff5iaeq90vltad', dummyToken)
    })
})