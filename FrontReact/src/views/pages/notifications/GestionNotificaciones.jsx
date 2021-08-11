import React, { useEffect, useState } from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import OpcionPantallaEmail from '../../components/notifications/OpcionPantallaEmail';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeStatusNotification, getStatusNotification } from '../../../application/actions/notifications';
import { getUser } from '../../../application/selectors/administration/user';

const GestionNotificaciones = ({ getStatusNotification, changeStatusNotification, stateIdUser, initialstate }) => {



    useEffect(() => {

        getStatusNotification(stateIdUser.userId)
    }, [])


    const comprobar = () => {
        changeStatusNotification(initialstate.notificationstatus, stateIdUser.userId)
    }


    return (
        <div class="EditProfilePrivacy ">
            <h1 className="text-center">Bienvenido a la gestion de notificaciones</h1>
            <p className="text-center pt-3 pb-3">Seleccione que notificaciones deseas recibir por medio de correo y de pantalla</p>
            <div class="EditProfilePrivacy-options">
                <div className="EditProfilePrivacy-option">
                    <div className="EditProfilePrivacy-text">
                        <h3 className="pb-1">Notificacion</h3>
                    </div>
                       <p className="me-2 text-center">Email💌</p> 
                       <p className="me-2 text-center">Pantalla🖥️</p> 
    
                </div>
                {initialstate.notificationstatus.length &&
                    initialstate.notificationstatus.map(noti => {
                        return <OpcionPantallaEmail props={noti} />
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
        { getStatusNotification, changeStatusNotification }, dispatch

    );
};

const mapStateToProps = (state) => {
    return {
        stateIdUser: getUser(state),
        initialstate: state.notification
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GestionNotificaciones)
