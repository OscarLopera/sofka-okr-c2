import React, { useEffect } from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import OpcionPantallaEmail from '../../components/notifications/OpcionPantallaEmail';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeStatusNotification, getStatusNotification,sendNotification} from '../../../application/actions/notifications';
import { getUser } from '../../../application/selectors/administration/user';
import Push from 'push.js';

const GestionNotificaciones = ({ getStatusNotification, changeStatusNotification, stateIdUser, initialstate,sendNotification }) => {



    useEffect(() => {

        getStatusNotification(stateIdUser.userId)
    }, [getStatusNotification,stateIdUser.userId])


    const comprobar = () => {
        changeStatusNotification(initialstate.notificationstatus, stateIdUser.userId)
        sendNotification("CqzZjI0KtrdmiZMT8rGiamI8UUj2",{
            "userEmail": "sergio.pinedas94@gmail.com",
            "message":"Hola Sergio como vamos ! "
        })
        Push.create("nueva notificacion",{
            body:"se ha guardado exitosamente la configuracion de notificaciones",
            icon:"https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5d5c992c13fc0001494f2d/picture"
          })
       
    }


    return (
        <div className="EditProfilePrivacy ">
            <h1 className="text-center">Bienvenido a la gestion de notificaciones</h1>
            <p className="text-center pt-3 pb-3">Seleccione que notificaciones deseas recibir por medio de correo y de pantalla</p>
            <div className="EditProfilePrivacy-options">
                <div className="EditProfilePrivacy-option">
                    <div className="EditProfilePrivacy-text">
                        <h3 className="pb-1">Notificacion</h3>
                    </div>
                       <p className="me-2 text-center">Email💌</p> 
                       <p className="me-2 text-center">Pantalla🖥️</p> 
    
                </div>
                {initialstate.notificationstatus.length &&
                    initialstate.notificationstatus.map(noti => {
                        return <OpcionPantallaEmail props={noti} key={noti[0]} />
                    })
                }

            </div>
            <div className="text-center">
            <button  className="btn btn-noti px-4 mt-3 mb-5 mx-auto " onClick={comprobar} >Guardar cambios</button>
            </div>
            
        </div>



    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { getStatusNotification, changeStatusNotification,sendNotification }, dispatch

    );
};

const mapStateToProps = (state) => {
    return {
        stateIdUser: getUser(state),
        initialstate: state.notification
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GestionNotificaciones)
