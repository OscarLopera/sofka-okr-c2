import {eventsDummy} from "./CalendarComponent.test";
import {render} from "@testing-library/react";
import TableEventComponent from "../../components/calendar/TableEventComponent";

describe('Table component test', ()=>{
    test('testing table component',()=>{
        const events = eventsDummy;
        const DeleteEvent = jest.fn();
        const UpdateEvent = jest.fn();
        const dummyToken = "token";
        const email = 'danielaristy22@gmail.com';

        const { getByText } = render(
            <TableEventComponent events={events} DeleteEvent={DeleteEvent} UpdateEvent={UpdateEvent} token={dummyToken} email={email} />
        )

        expect(getByText(/Titulo/).textContent).toEqual("Titulo")

    })
    test('testing table component with undefined events',()=>{
        const DeleteEvent = jest.fn();
        const UpdateEvent = jest.fn();
        const dummyToken = "token";
        const email = 'danielaristy22@gmail.com';

        const { getByText } = render(
            <TableEventComponent DeleteEvent={DeleteEvent} UpdateEvent={UpdateEvent} token={dummyToken} email={email} />
        )

        expect(getByText(/Titulo/).textContent).toEqual("Titulo")

    })
})