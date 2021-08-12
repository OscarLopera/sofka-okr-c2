import {CalendarItem} from "../../components/calendar/CalendarItem";
import { fireEvent } from "@testing-library/react";


const dummyEvent = {
    summary: "OKR",
    description: "new description",
    start: {
        dateTime: "2021-08-13T20:43:00-05:00",
        timeZone: "America/Bogota"
    },
    end: {
        dateTime: "2021-08-13T20:43:00-05:00",
        timeZone: "America/Bogota"
    },
    conferenceData: {
        createRequest: {
            requestId: "sample13",
            conferenceSolutionKey: {type: "hangoutsMeet"}
        },
    },
    attendees: [],
    reminders: {
        useDefault: "useDefault",
    },
    sendUpdates: "all"
}

describe('calendar item component test',()=>{
    test('testing component test',()=>{
        const events = dummyEvent;

        const DeleteEvent = jest.fn();

        const UpdateEvent = jest.fn();

        const email = jest.fn();

        const dummyToken = "token";



    })


})