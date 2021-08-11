import { loginUserSuccess } from "../../actions/administration/user";
import reducer from "../../reducers/administration/user";

describe("reducer notification test functions", () => {
  const initialState = {
    user: {},
    error: null,
  };

  const dummyUser = {
    userId: "2lDqBGFz2cdw52lE7Q0hjNtbjSo2",
    userName: "Diego Urrego",
    userImage:
      "https://lh3.googleusercontent.com/a-/AOh14GjWFJkvBe8qfHPvcrU1EfdVW3lr1MCNAXXDws9ZFg=s96-c",
    firstTime: false,
    userToken:
      "ya29.a0ARrdaM-miZk6phn8e-1PhGL16qvbhIIlj9yGHSn08l2BpC6EIYLiiNDBXo9r-WTYEjwy_yZyEiFXOVcb1cAnGJ997SPfPXwuNB5EGhLlOlV6gar6n6BBRFOYIKBOxRlfPryDKXGsYeKRTCGZhg8PmqtEgA3H",
  };

  test("reducer OBTENER_NOTIFICACIONES_SUCCESS case", () => {
    const action = loginUserSuccess(dummyUser);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: dummyUser });
  });
});
