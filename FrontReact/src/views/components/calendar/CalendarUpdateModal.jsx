import React, {Fragment, useState} from 'react'
import Select from "react-select";

const CalendarUpdateModal = ({UpdateEvent, token, item}) => {
   
    let date = new Date().toLocaleDateString().split('/');
    date[1] = date[1] < 10 ? '0' + date[1] : date[1];
    date = date[2] + '-' + date[1] + '-' + date[0];
    const currentDate = item.start.dateTime.substring(0, 10)
    const currentDescription = item.description
    const currentStartTime = item.start.dateTime.substring(11, 16)
    const currentEndTime = item.end.dateTime.substring(11, 16)
    let currentAtenders = item.attendees!==[] ? item.attendees : []
    currentAtenders= currentAtenders.map(element => element.email)

    const [startDate, setStartDate] = useState(currentDate);
    const [description, setDescription] = useState(currentDescription);
    const [startTime, setStartTime] = useState(currentStartTime)
    const [endTime, setEndTime] = useState(currentEndTime)
    
    const [errorEmail,setErrorEmail] =useState(false);
    const [guest,setGuest] =useState("");
    const [guestsList, setGuestList] = useState(currentAtenders);
    
    const updateGuestList = () => {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(guest)){
        setGuestList(prevArrau=> [...prevArrau,guest]);
        setGuest('');
        }
        setErrorEmail(true);
        setTimeout(function(){ 
            setErrorEmail(false);
        }, 3000);
    }
    const deletGuest = (item) => {
        setGuestList(guestsList.filter((element)=> item!==element));
    }

    const clearData=() => {
        setGuest("")
        setGuestList([])
    }
   

    const updateEvent = () => {
        const eventObject = {
            id: item.id,
            summary: "OKR",
            description: description,
            start: {
                dateTime: startDate + "T" + startTime + ":00-05:00",
                timeZone: "America/Bogota"
            },
            end: {
                dateTime: startDate + "T" + endTime + ":00-05:00",
                timeZone: "America/Bogota"
            },
            conferenceData: {
                createRequest: {
                    requestId: "sample13",
                    conferenceSolutionKey: {type: "hangoutsMeet"}
                },
            },
            attendees: guestsList,
            reminders: {
                useDefault: "useDefault",
            },
            sendUpdates: "all"
        }
        UpdateEvent(eventObject, token)

    }

    return (
        <Fragment>
            <button className="btn btn-primary mx-2" 
                    data-testid={"btn-test"} data-toggle={"modal"}
                    data-target={"#modalUpdateEvent"}
                     ><i className="bi bi-pencil-square"/>
            </button>

            <div id={"modalUpdateEvent"} className={"modal fade container"}>
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar Evento</h5>
                            <button type="button" className={"btn close"} data-dismiss="modal">
                                <i className="bi bi-x-lg"/>
                            </button>
                        </div>
                        <div className="modal-body container row">
                        <form onSubmit={updateEvent}>
                            <label>Dia del Evento</label>
                            <input type={"date"}
                                   min={date} 
                                   required={true}
                                   value={startDate} 
                                   className={"form-control"}
                                   onChange={event => setStartDate(event.target.value)}/>
                            <label className="col">Hora Inicial</label>
                            <label className="col">Hora Final</label>
                            <div className="w-100"/>
                            <input placeholder="Selected time" 
                                   type={"time"} 
                                   id={"input_starttime"}
                                   className={"form-control col"} 
                                   value={startTime}
                                   onChange={event => setStartTime(event.target.value)}
                                   required={true}/>
                            <input placeholder="Selected time" 
                                   type={"time"} id={"input_endttime"}
                                   className={"form-control timepicker col"} 
                                   value={endTime}
                                   min={startTime}
                                   required={true}
                                   onChange={event => setEndTime(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Descripcion</label>
                            <input type={"text"} value={description} 
                                   className={"form-control"}
                                   required={true}
                                   onChange={event => setDescription(event.target.value)}/>
                            <hr className="my-4"/>
                            <label>Invitados</label>

                           {errorEmail?<label>Ingrese un correo valido</label>:<></>}
                            <input type="email" className="form-control" placeholder="email" onChange={event =>setGuest(event.target.value)} value={guest} />
                            <a onClick={updateGuestList} className="btn btn-primary form-control"> Agregar invitado</a>
                            {
                                guestsList.map((item, index) =>{
                                    return <label 
                                                className="border border-dark rounded bg-light" >
                                                     {item} <a 
                                                                onClick={event=> deletGuest(item, index)} 
                                                                className="bi bi-x-circle"></a></label>
                                })
                            }
                            <button type="button" 
                                    className="btn btn-secondary" 
                                    data-dismiss="modal"
                                    onClick={event=>{clearData()}}
                            >Cancelar
                            </button>
                            <button type="submit" 
                                    className="btn btn-primary" 
                            >Actualizar Evento
                            </button>
                       </form> 

                       
                       </div>

                    </div>
                    
                </div>
                
            </div>
            
        </Fragment>
    )
}

export default CalendarUpdateModal
