import middlewareKr from '../../middleware/okr/KrMiddleware';
import { createKr, createKrSuccess, createKrError, deleteKr, deleteKrSuccess, deleteKrError } from '../../actions/okr/KrAction';


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

const dispatch = jest.fn();
const next = jest.fn();

const [createKrFlow, deleteKrFlow] = middlewareKr;

describe('middleware KR test functions', () => {

    test('create KR flow test', async () => {
        const api = {
            kr: {
                createKr: () => {
                    return dummyKr;
                }
            }
        }
        const action = createKr(dummyKr);
        await createKrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(createKrSuccess(dummyKr));
        expect(next).toHaveBeenCalledWith(action);
    })

    test('create KR flow test error', async () => {
        const api = {
            kr: {
                createKr: () => {
                    throw new Error("Error al crear KR");
                }
            }
        }
        const action = createKr(dummyKr);
        await createKrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(createKrError("Error al crear KR"));
        expect(next).toHaveBeenCalledWith(action);
    })

    test('delete KR flow test', async () => {
        const api = {
            kr: {
                deleteKr: () => {
                    return dummyKr
                }
            }
        }
        const action = deleteKr();
        await deleteKrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(deleteKrSuccess());
        expect(next).toHaveBeenCalledWith(action);
    })

    test('delete KR flow test error', async () => {
        const api = {
            kr: {
                deleteKr: () => {
                    throw new Error("Error al eliminar KR");
                }
            }
        }
        const action = deleteKr();
        await deleteKrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(deleteKrError("Error al eliminar KR"));
        expect(next).toHaveBeenCalledWith(action);
    })
})

