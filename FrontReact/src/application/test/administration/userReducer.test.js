import * as actions from '../../actions/administration/user';
import reducer from "../../reducers/administration/user";

describe("reducer user test functions", () => {
  const initialState = {
    user: null,
    error: null,
    verticals: [],
    questions: []
  };

  const initialState2 = {
    user: {
      userId: 'duBJ1kLZHPg1TRNNMilrCG3Nl0J2',
      userName: 'Diego Vélez',
      userEmail: 'vegodiego@mail.com',
      userImage: 'https://lh3.googleusercontent.com/a-/AOh14Gj7uZNPmXxUq75fXmElWOoIYVGluejFdU4y5VjiMA=s96-c',
      userPhone: '0000000',
      firstTime: true,
      userToken: 'ya29a0ARrdaM-HDSgtBlYGHeDcDkrmC0NYbZc9V4qW',
      userRol: 'super usuario'
    },
    error: null,
    verticals: [],
    questions: []
  };

  const dummyUser = {
    userId: '2lDqBGFz2cdw52lE7Q0hjNtbjSo2',
    userName: 'Diego Urrego',
    userEmail: 'diego@mail.com',
    userImage: 'https://lh3.googleusercontent.com/a-/AOh14GjWFJkvBe8qfHPvcrU1EfdVW3lr1MCNAXXDws9ZFg=s96-c',
    userPhone: '0000000',
    firstTime: false,
    userVertical: 'DEV',
    userToken: 'pGHFJf0UWoW107jYJQ_dPtz66hBxxEnfTSHRo_jwc76b7SY7rTK2VUO9aLg',
    userRol: 'super usuario'
  };

  const dummyError = "Error de mensaje";

  const dummyVertical = {
    id: "6113506023b4da30102139d4",
    verticalname: "QA"
  }

  const dummyVerticals = [dummyVertical];

  const dummyQuestion = {
    id: "6113516023b4da30102139d6",
    pregunta: "¿ Que fue primero?",
    respuesta: "el huevo o la gallina"
  }

  const dummyQuestions = [dummyQuestion];

  test("reducer LOGIN_USER_SUCCESS case", () => {
    const action = actions.loginUserSuccess(dummyUser);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: dummyUser, error:null});
  });

  test("reducer LOGIN_USER_FAILURE case", () => {
    const action = actions.loginUserFailure(dummyError);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: null, error: dummyError});
  });

  test("reducer LOGOUT_SUCCESS case", () => {
    const action = actions.logoutSuccess();
    const state = reducer(initialState2, action);
    expect(state).toEqual({...initialState2, user: null, error:null });
  });

  test("reducer LOGOUT_FAILURE case", () => {
    const action = actions.logoutFailure(dummyError);
    const state = reducer(initialState2, action);
    expect(state).toEqual({...initialState2, error:dummyError });
  });

  test("reducer CLOSE_WELCOME_SUCCESS case", () => {
    const action = actions.closeWelcomeSuccess(dummyUser);
    const state = reducer(initialState2, action);
    expect(state).toEqual({ ...initialState2, user: dummyUser, error:null});
  });

  test("reducer LOADING_VERTICALS_SUCCESS case", () => {
    const action = actions.loadingVerticalsSuccess(dummyVerticals);
    const state = reducer(initialState, action);
    const optionalVerticals = initialState.verticals;
    optionalVerticals.push(dummyVertical);
    expect(state).toEqual({...initialState, verticals: optionalVerticals, error:null });
  });

  test("reducer LOADING_VERTICALS_FAILURE case", () => {
    const action = actions.loadingVerticalsFailure(dummyError);
    const state = reducer(initialState, action);
    expect(state).toEqual({...initialState, verticals: [], error:dummyError });
  });

  test("reducer UPDATE_USER_SUCCESS case", () => {
    const action = actions.updateUserSuccess(dummyUser);
    const state = reducer(initialState2, action);
    expect(state).toEqual({ ...initialState2, user: dummyUser, error:null});
  });

  test("reducer UPDATE_USER_FAILURE case", () => {
    const action = actions.updateUserFailure(dummyError);
    const state = reducer(initialState2, action);
    expect(state).toEqual({...initialState2, error:dummyError });
  });

  test("reducer LOADING_QUESTIONS_SUCCESS case", () => {
    const action = actions.loadingQuestionsSuccess(dummyQuestions);
    const state = reducer(initialState2, action);
    const optionalQuestions = initialState.questions;
    optionalQuestions.push(dummyQuestion);
    expect(state).toEqual({...initialState2, questions: optionalQuestions, error:null });
  });

  test("reducer LOADING_QUESTIONS_FAILURE case", () => {
    const action = actions.loadingQuestionsFailure(dummyError);
    const state = reducer(initialState2, action);
    expect(state).toEqual({...initialState2, questions: [], error:dummyError });
  });
});
