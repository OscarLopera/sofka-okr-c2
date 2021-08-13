import {eventsDummy} from "./CalendarComponent.test";
import { fireEvent, render } from "@testing-library/react";
import {CalendarUpdateModal} from "../../components/calendar/CalendarUpdateModal";
import {dummyList} from "../../../application/test/calendar/reducerCalendar/calendarGetEmailsReducer.test";
import {dummyItem} from "./EventItemComponent.test"

const dommyUsersEmail =[{
    name: 'Victor Mora',
    email: 'morajaramillov@gmail.com',
    id: '6115732da2605b535bfab397'
  },
  {
    name: 'Monica Liliana Arbelaez Lopez',
    email: 'moniarbe233@gmail.com',
    id: '611573b4a2605b535bfab399'
  },
  {
    name: 'Frank Ortegon',
    email: 'frank.ortegon01@gmail.com',
    id: '611573c2a2605b535bfab39a'
  },
  {
    name: 'MATEO JARAMILLO QUIROGA',
    email: 'mateo.jaramilloq@udea.edu.co',
    id: '611578f7a2605b535bfab3a7'
  }]

describe('calendar update component test', () => {
    test('testing update button component', () => {
        
        const UpdateEvent = jest.fn();
        const token = "token"
        const item = dummyItem
        const eventChange= jest.fn();
        const userEmails = dommyUsersEmail

        const {getByTestId} = render(
            <CalendarUpdateModal UpdateEvent={UpdateEvent} token={token} item={item} eventChange={eventChange} userEmails={userEmails}/>
        )

        const inputStartDate = getByTestId('input-test-start-date')
        const inputStartTime = getByTestId('input-test-start-time')
        const inputEndTime = getByTestId('input-test-end-time')
        const inputDescription = getByTestId('input-test-description')
        const inputGuestEmail= getByTestId('input-test-guest-email')    


        const buttonUpdateEvent = getByTestId('button-test-update-event')
        fireEvent.change(inputStartDate, {target: {value: '01-01-2019'}})
        fireEvent.change(inputStartTime, {target: {value: '20:43'}})
        fireEvent.change(inputEndTime, {target: {value: '20:43'}})
        fireEvent.change(inputDescription, {target: {value: 'new description'}})
        fireEvent.change(inputGuestEmail, {target: {value: 'sebas99cano@gmail.com'}})

        fireEvent.click(buttonUpdateEvent)

        expect(UpdateEvent).toHaveBeenCalledWith(dummyItem,token)

    })
    
})