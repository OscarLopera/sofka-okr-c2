import middlewareOkr from "../../middleware/okr/okr";
import { addOkrs, addOkrsSuccess, addOkrsFailure} from "../../actions/okr/okr";





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
        expect(dispatch).toHaveBeenCalledWith(addOkrsSuccess(dummyKr));
        expect(next).toHaveBeenCalledWith(action);
    })

    test('create KR flow test error', async () => {
        const api = {
            okr: {
                addOkrs: () => {
                    throw new Error("Error al crear KR");
                }
            }
        }
        const action = createKr(dummyKr);
        await addOkrFlow({ api })({ dispatch })(next)(action);
        expect(dispatch).toHaveBeenCalledWith(addOkrsFailure("Error al crear KR"));
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

