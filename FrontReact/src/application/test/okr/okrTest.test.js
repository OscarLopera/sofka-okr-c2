import { addOkrs, addOkrsFailure, addOkrsSuccess, deleteOkrs, deleteOkrsFailure, deleteOkrsSuccess, loadOkrs, loadOkrsFailure, loadOkrsSuccess, updateOkrs, updateOkrsFailure, updateOkrsSuccess } from '../../actions/okr/okr'
import middlewareOkr from '../../middleware/okr/okr';
import reducer from "../../reducers/okr/okr";


const initialState = {
    okr:[],
    error : null,
    loading:false
};


const dummyOkrs = {
    id: "12",
    objective: "objective",
    title: "title",
    managerId: "managerId",
    description: "description",
    areaInCharge: "areaInCharge",
    progress: "progress"
}




test('validacion reducer Listar', () =>{    

const action = loadOkrs;
const reduce = reducer;

const initialState = {
    okr:[],
    error : null,
    loading:false
};
const response = {
    okr:[],
    error : null,
    loading:true
};    
    expect(reduce(initialState, action())).toEqual(response);
})

test('validacion reducer ListarSucces', () =>{    

    const action = loadOkrsSuccess;
    const state = reducer(initialState, action);   
   
    expect(state).toEqual({...initialState, loading: false});
    })

    test('validacion reducer ListarFailure', () =>{    

        const action = loadOkrsFailure(("dummyOkrs"));
        const state = reducer(initialState, action);   
       
        expect(state).toEqual({...initialState, loading: false, error: "dummyOkrs" });
        })


test('validacion reducer Crear', () =>{    

    const action = addOkrs(dummyOkrs);
    const state = reducer(initialState, action);   
   
    expect(state).toEqual({...initialState, loading: true});
    })

    test('validacion reducer CrearSucces', () =>{    

        const action = addOkrsSuccess(dummyOkrs);
        const state = reducer(initialState, action);   
       
        expect(state).toEqual({...initialState, loading: false});
        })

        test('validacion reducer CrearFailure', () =>{    

            const action = addOkrsFailure("dummyOkrs");
            const state = reducer(initialState, action);   
           
            expect(state).toEqual({...initialState, loading: false, error: "dummyOkrs" });
            })


            test('validacion reducer Eliminar', () =>{    

                const action = deleteOkrs(dummyOkrs);
                const state = reducer(initialState, action);   
               
                expect(state).toEqual({...initialState, loading: true});
                })
            
                test('validacion reducer ElimianrSucces', () =>{    
            
                    const action = deleteOkrsSuccess(dummyOkrs);
                    const state = reducer(initialState, action);   
                   
                    expect(state).toEqual({...initialState, loading: false});
                    })
            
                    test('validacion reducer Delete Failure', () =>{    
            
                        const action = deleteOkrsFailure("dummyOkrs");
                        const state = reducer(initialState, action);   
                       
                        expect(state).toEqual({...initialState, loading: false, error: "dummyOkrs" });
                        })


                        test('validacion reducer Actualizar', () =>{    

                            const action = updateOkrs(dummyOkrs);
                            const state = reducer(initialState, action);   
                           
                            expect(state).toEqual({...initialState, loading: true});
                            })
                        
                            test('validacion reducer ActualizarSucces', () =>{    
                        
                                const action = updateOkrsSuccess(dummyOkrs);
                                const state = reducer(initialState, action);   
                               
                                expect(state).toEqual({...initialState, loading: false});
                                })
                        
                                test('validacion reducer Actualizar Failure', () =>{    
                        
                                    const action = updateOkrsFailure("dummyOkrs");
                                    const state = reducer(initialState, action);   
                                   
                                    expect(state).toEqual({...initialState, loading: false, error: "dummyOkrs" });
                                    })

                                    test('validacion reducer default', () =>{    
                    
                                        const state = reducer(initialState, "");   
                                       
                                        expect(state).toEqual({...initialState });
                                        })

    
                                           


    





