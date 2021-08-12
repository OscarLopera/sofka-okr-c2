import { fireEvent, render } from "@testing-library/react";
import EventItemComponent from "../../components/calendar/EventItemComponent"
import {eventsDummy} from "./CalendarComponent.test";

describe('Event Items component test', () => {
    test('testing delete button component', () => {
        const events = eventsDummy;
        const DeleteEvent = jest.fn();
        const UpdateEvent = jest.fn();
        const dummyToken = "token";
        const email = 'danielaristy22@gmail.com';

        const { getByTestId } = render(
            <EventItemComponent events={events} DeleteEvent={DeleteEvent} UpdateEvent={UpdateEvent} token={dummyToken} email={email} />
        )

        const buttonDeleteEvent = getByTestId("btn-test-deleteEvent-ululbsrf6lshff5iaeq90vltad");

        fireEvent.click(buttonDeleteEvent);

        expect(DeleteEvent).toHaveBeenCalledWith('ululbsrf6lshff5iaeq90vltad', dummyToken)
    })
})