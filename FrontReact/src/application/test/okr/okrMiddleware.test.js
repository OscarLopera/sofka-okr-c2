import middlewareOkr from "../../middleware/okr/okr";
import { addOkrs, addOkrsSuccess, addOkrsFailure} from "../../actions/okr/okr";

const [addOkrFlow] = middlewareOkr;

const dispatch = jest.fn();
const next = jest.fn();

const dummyOkrs = {
    id: "12",
    objective: "objective",
    title: "title",
    managerId: "managerId",
    description: "description",
    areaInCharge: "areaInCharge",
    progress: "progress"
}

describe('middleware calendar add event test', () => {

test('add event flow test happy path', async () => {
    const api = {
        okr: {
            addOkrs: () => {
                return dummyOkrs;
            }
        }
    }
    const action = addOkrs(dummyOkrs, "token")
    await addOkrFlow({api})({dispatch})(next)(action);
    expect(dispatch).toHaveBeenCalledWith(addOkrsSuccess(dummyOkrs))
    expect(next).toHaveBeenCalledWith(action);
})   })

test('add event flow test sad path', async () => {

    const api = {
        okr: {
            addOkrs: () => {
                throw new Error("error message");
            }
        }
    }
    const action = addOkrs(dummyOkrs, "token")
    await addOkrFlow({api})({dispatch})(next)(action);
    expect(dispatch).toHaveBeenCalledWith(addOkrsFailure("error message"))
    expect(next).toHaveBeenCalledWith(action);
})
