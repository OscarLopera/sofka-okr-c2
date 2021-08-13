import {eventsDummy} from "./CalendarComponent.test";
import {render} from "@testing-library/react";
import {CalendarPage} from "../../pages/calendar/CalendarPage";
import {dummyList} from "../../../application/test/calendar/reducerCalendar/calendarGetEmailsReducer.test";

describe('test calendar page', ()=>{
    test('testing calendar page',()=>{
        const userDummy={
            userToken:"token"
        }
        const events = eventsDummy;
        const DeleteEvent = jest.fn();
        const UpdateEvent = jest.fn();
        const AddEvent = jest.fn();
        const ListEvents = jest.fn();
        const GetEmailUsers = jest.fn();
        const { } = render(
            <CalendarPage events={events}
                          AddEvent={AddEvent}
                          ListEvents={ListEvents}
                          DeleteEvent={DeleteEvent}
                          UpdateEvent={UpdateEvent}
                          user={userDummy}
                          emails={dummyList}
                          GetEmailUsers={GetEmailUsers}/>
        )

        expect(ListEvents).toHaveBeenCalledWith(userDummy.userToken)

    })
})