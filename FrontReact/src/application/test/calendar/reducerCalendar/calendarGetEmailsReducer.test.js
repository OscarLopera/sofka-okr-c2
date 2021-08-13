import {GetEmailUsers, GetEmailUsersFailure, GetEmailUsersSuccess} from "../../../actions/calendar/calendarActions";
import calendarReducer from "../../../reducers/calendar/calendarReducer";

const initialState = {
    events: [],
    error: null,
    loading: false,
    emails:[]
}

export const dummyList = [{
    id:"bas7dga",
    name:"Sebastian",
    email:"sebas99cano@gmail.com",
},{
    id:"ab76ags8da",
    name:"juan",
    email:"sebas1036@gmail.com",
}]

describe('reducer calendar get users emails',() => {

    test('reducer [calendar] get_email_users case', () => {
        const action = GetEmailUsers();
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true })
    })
    test('reducer [calendar] get_email_users_success case', () => {
        const action = GetEmailUsersSuccess(dummyList);
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false, emails:dummyList })
    })
    test('reducer [calendar] get_email_users_failure case', () => {
        const action = GetEmailUsersFailure("error");
        const state = calendarReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false, error:"error"})
    })
})

