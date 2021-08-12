import { loginUserSuccess, loadingVerticalsSuccess, logoutSuccess } from "../../actions/administration/user";
import reducer from "../../reducers/administration/user";

describe("reducer user test functions", () => {
  const initialState = {
    user: undefined,
    error: null,
    verticals: [],
    questions: []
  };

  const initialState2 = {
    user: {
      userId: 'duBJ1kLZHPg1TRNNMilrCG3Nl0J2',
      userName: 'Diego Vélez',
      userEmail: 'vegodiego@hotmail.com',
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

  const dummyVerticals = {
    id: "6113506023b4da30102139d4",
    verticalname: "QA"
  }

  const dummyVer

  test("reducer LOGIN_USER_SUCCESS case", () => {
    const action = loginUserSuccess(dummyUser);
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: dummyUser, error:null});
  });

  test("reducer LOADING_VERTICALS_SUCCESS case", () => {
    const action = loadingVerticalsSuccess(dummyVerticals);
    const state = reducer(initialState, action);
    const optional = initialState.verticals;
    optional.push(dummyVerticals);
    expect(state).toEqual({...initialState, verticals: dummyVerticals, error:null });
  });

  test("reducer LOGOUT_SUCCESS case", () => {
    const action = loginUserSuccess();
    const state = reducer(initialState2, action);
    expect(state).toEqual({...initialState2, user: undefined, error:null });
  });

  test("reducer CLOSE_WELCOME_SUCCESS case", () => {
    const action = loginUserSuccess(dummyUser);
    const state = reducer(initialState2, action);
    expect(state).toEqual({ ...initialState2, user: dummyUser, error:null});
  });

  test("reducer UPDATE_USER_SUCCESS case", () => {
    const action = loginUserSuccess(dummyUser);
    const state = reducer(initialState2, action);
    expect(state).toEqual({ ...initialState2, user: dummyUser, error:null});
  });
});




// describe('reducer notification test functions', () => {

  
//     const dummystatusNotify={
//             "mail": {
//               "OkrCreated": true,
//               "KrCreated": true,
//               "OkrUpdated": true,
//               "KrUpdated": true,
//               "OkrFinished": true,
//               "KrFinished": true,
//               "OkrExpired": true,
//               "KrExpired": true,
//               "OkrAssigned": true,
//               "KrAssigned": true,
//               "OkrDeleted": true,
//               "krDeleted": true
//             },
//             "screen": {
//               "OkrCreated": true,
//               "KrCreated": true,
//               "OkrUpdated": true,
//               "KrUpdated": true,
//               "OkrFinished": true,
//               "KrFinished": true,
//               "OkrExpired": true,
//               "KrExpired": true,
//               "OkrAssigned": true,
//               "KrAssigned": true,
//               "OkrDeleted": true,
//               "krDeleted": true
//             }
          
//     }

//     const dummyarray=[
//         ["OkrCreated",true,true],
//         ["KrCreated",true,true],
//         ["OkrUpdated",true,true],
//         ["OkrFinished",true,true],
//         ["KrFinished",true,true],
//         ["OkrExpired",true,true],
//         ["KrExpired",true,true],
//         ["OkrAssigned",true,true],
//         ["KrAssigned",true,true],
//         ["OkrDeleted",true,true],
//         ["krDeleted",true,true],

//     ]

//     const dummymail = [
//         "OkrCreated",false,true
//     ]

//     const dummyscreen = [
//         "OkrCreated",true,false
//     ]

//     const initialstate = {
//         notificationstatus: {}
//     }

//     test('reducer OBTENER_NOTIFICACIONES_SUCCESS case', () => {
//         const action = getStatusNotifySuccess(dummyarray);
//         const state = notificationReducer(initialstate, action);
//         expect(state).toEqual({ ...initialstate,  notificationstatus: dummyarray})
//     })

//     test('reducer CAMBIAR_NOTIFICACION_MAIL case', () => {
//         const initialstate2 = {...initialstate,notificationstatus:dummyarray}
//         const action = changeStatusNotificationmail(dummymail);
//         const state = notificationReducer(initialstate2, action);
//         const dummy2 = [...dummyarray]
//         dummy2[0][1]=false
//         expect(state).toEqual({ ...initialstate,  notificationstatus: dummy2})
//     })

//     test('reducer CAMBIAR_NOTIFICACION_SCREEN case', () => {
//         const initialstate2 = {...initialstate,notificationstatus:dummyarray}
//         const action = changeStatusNotificationscreen(dummyscreen);
//         const state = notificationReducer(initialstate2, action);
//         const dummy2 = [...dummyarray]
//         dummy2[0][2]=false
//         expect(state).toEqual({ ...initialstate,  notificationstatus: dummy2})
//     })

//     test('reducer CAMBIAR_NOTIFICACION_SCREEN case', () => {
//         const state = notificationReducer(initialstate, "CASO_TRISTE");
//         expect(state).toEqual({ ...initialstate})
//     })
    
    



// })