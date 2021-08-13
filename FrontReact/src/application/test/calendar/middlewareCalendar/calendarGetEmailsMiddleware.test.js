import {dummyList} from "../reducerCalendar/calendarGetEmailsReducer.test";
import {GetEmailUsers, GetEmailUsersFailure, GetEmailUsersSuccess} from "../../../actions/calendar/calendarActions";
import calendarMiddleware from "../../../middleware/calendar/calendarMiddleware";

const [addEventFlow,
    listEventFlow,
    deleteEventFlow,
    updateEventFlow,
    getEmailUsersFlow] = calendarMiddleware;

const dispatch = jest.fn();
const next = jest.fn();
const action = GetEmailUsers()

describe('middleware get users emails happy path',() => {
    test('testing get email users flow', async () =>{
        const api = {
            calendar: {
                getEmailUser: () => {
                    return dummyList
                }
            }
        }
        await getEmailUsersFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(GetEmailUsersSuccess(dummyList))
        expect(next).toHaveBeenCalledWith(action)
    })
    test('testing get email users flow sad path', async () =>{
        const api = {
            calendar: {
                getEmailUser: () => {
                    throw new Error("error message");
                }
            }
        }
        await getEmailUsersFlow({api})({dispatch})(next)(action);
        expect(dispatch).toHaveBeenCalledWith(GetEmailUsersFailure("error message"))
        expect(next).toHaveBeenCalledWith(action)
    })
})