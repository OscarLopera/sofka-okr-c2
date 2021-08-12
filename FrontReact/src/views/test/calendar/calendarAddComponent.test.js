import {CalendarAddComponent} from "../../components/calendar/CalendarAddComponent";
import {fireEvent, render} from "@testing-library/react";

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

describe('calendar add component test',() => {

    test('testing add button component', () => {

        const AddEvent = jest.fn();

        const dummyToken = "token";

        const {getByTestId} = render(
            <CalendarAddComponent AddEvent={AddEvent} token={dummyToken}/>
        )

        const inputDescription = getByTestId("input-test-descriptionAddEvent")

        const inputTimeStart = getByTestId("input-test-timeStart")

        const inputTimeEnd= getByTestId("input-test-timeEnd")

        const inputDate= getByTestId("input-test-date")

        const buttonAddEvent = getByTestId("btn-test-addEvent")

        const buttonOpenModalAddEvent = getByTestId("btn-test-openModalAddEvent")

        fireEvent.click(buttonOpenModalAddEvent);

        fireEvent.change(inputDate,{target:{value:"2021-08-13"}})

        fireEvent.change(inputTimeStart,{target:{value:"20:43"}})

        fireEvent.change(inputTimeEnd,{target:{value:"20:43"}})

        fireEvent.change(inputDescription,{target:{value:"new description"}});

        fireEvent.click(buttonAddEvent);

        expect(AddEvent).toHaveBeenCalledWith(dummyEvent,dummyToken)
    })

    test('testing cancel button in add event', () => {
        const AddEvent = jest.fn();

        const dummyToken = "token";

        const {getByTestId} = render(
            <CalendarAddComponent AddEvent={AddEvent} token={dummyToken}/>
        )
        const buttonCancelEvent = getByTestId("btn-test-cancelEvent")

        const inputDescription = getByTestId("input-test-descriptionAddEvent")

        const buttonOpenModalAddEvent = getByTestId("btn-test-openModalAddEvent")

        fireEvent.click(buttonOpenModalAddEvent);

        fireEvent.change(inputDescription,{target:{value:"new description"}});

        fireEvent.click(buttonCancelEvent);

        expect(inputDescription.value).toEqual("");

    })
})