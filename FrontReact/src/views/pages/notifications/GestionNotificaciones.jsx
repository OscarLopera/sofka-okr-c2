import React, { useEffect, useState } from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import OpcionPantallaEmail from '../../components/notifications/OpcionPantallaEmail';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeStatusNotification, getStatusNotification } from '../../../application/actions/notifications';
import { getUser } from '../../../application/selectors/administration/user';

const GestionNotificaciones=({getStatusNotification,changeStatusNotification,stateIdUser,initialstate})=> {


   
    useEffect(() => {
        
        getStatusNotification(stateIdUser.userId)
    }, [])


    const comprobar = () => {
        changeStatusNotification(initialstate.notificationstatus,stateIdUser.userId)
        console.log()
    }


    return (
        <div class="EditProfilePrivacy">

            <div class="EditProfilePrivacy-options">
                {initialstate.notificationstatus.length  &&
           
                    initialstate.notificationstatus.map(noti => {
                        return <OpcionPantallaEmail props={noti} />
                    })
                }

            </div>
            <button onClick={comprobar} >Probar</button>
        </div>



    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      { getStatusNotification,changeStatusNotification },dispatch
      
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      stateIdUser: getUser(state),
      initialstate: state.notification
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GestionNotificaciones)
