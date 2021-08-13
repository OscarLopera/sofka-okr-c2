import middlewareOkr from "../../middleware/okr/okr";
import { addOkrs, addOkrsSuccess, addOkrsFailure, deleteOkrs, deleteOkrsSuccess, deleteOkrsFailure } from "../../actions/okr/okr";

const dummyOkrs = {

    objective: "objective",
    title: "title",
    managerId: "managerId",
    description: "description",
    areaInCharge: "areaInCharge",

}

const dispatch = jest.fn();
const next = jest.fn();

const [addOkrFlow, deleteOkrFlow] = middlewareOkr;

describe('middleware OKR test functions', () => {

    test('create OKR flow test', async () => {
        const api = {
            okr: {
                addOkrs: () => {
                    return dummyOkrs;
                }
            }
        }
        const action = addOkrs(dummyOkrs);
        await addOkrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(addOkrsSuccess(dummyOkrs));
        expect(next).toHaveBeenCalledWith(action);
    })

    test('create OKR flow test error', async () => {
        const api = {
            okr: {
                addOkrs: () => {
                    throw new Error("Error al crear KR");
                }
            }
        }
        const action = addOkrs(dummyOkrs);
        await addOkrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(addOkrsFailure("Error al crear OKR"));
        expect(next).toHaveBeenCalledWith(action);
    })

    test('delete OKR flow test', async () => {
        const api = {
            kr: {
                deleteOkrs: () => {
                    return dummyOkrs
                }
            }
        }
        const action = deleteOkrs();
        await deleteOkrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(deleteOkrsSuccess());
        expect(next).toHaveBeenCalledWith(action);
    })

    test('delete OKR flow test error', async () => {
        const api = {
            kr: {
                deleteOkrs: () => {
                    throw new Error("Error al eliminar OKR");
                }
            }
        }
        const action = deleteOkrs();
        await deleteOkrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(deleteOkrsFailure("Error al eliminar KR"));
        expect(next).toHaveBeenCalledWith(action);
    })
})

