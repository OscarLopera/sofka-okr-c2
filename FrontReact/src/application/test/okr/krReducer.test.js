import reducer from '../../reducers/okr/KrReducer';
import { createKr, createKrSuccess, createKrError, deleteKr, deleteKrSuccess, deleteKrError } from '../../actions/okr/KrAction'

describe('Test reducer KR functions', () => {

    const dummyKr = {
        id: "abc",
        idOkr: "abc",
        title: "Un titulo",
        description: "Un descripcion para un KR",
        startDate: "10/08/2021",
        endDate: "11/08/2021",
        loadValue: 20,
        managerName: "David Perez",
        managerEmail: "david@correo.com",
    }

    const initialState = {
        kr: [],
        loading: false,
        error: null
    };

    test('reducer CREATE_KR case', () => {
        const action = createKr(dummyKr);
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true })
    });

    test('reducer CREATE_KR_SUCCESS case', () => {
        const action = createKrSuccess(dummyKr);
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false })
    });

    test('reducer CREATE_KR_ERROR case', () => {
        const action = createKrError("Create Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false, error: "Create Error" })
    });

    test('reducer DELETE_KR case', () => {
        const action = deleteKr();
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: true })
    });

    test('reducer DELETE_KR_SUCCESS case', () => {
        const action = deleteKrSuccess();
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false })
    });

    test('reducer DELETE_KR_ERROR case', () => {
        const action = deleteKrError("Delete Error");
        const state = reducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading: false, error: "Delete Error" })
    });

    test('reducer default case', () => {
        const state = reducer(initialState, "");
        expect(state).toEqual({ ...initialState })
    });
})