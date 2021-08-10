import React, { useEffect, useState } from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import OpcionPantallaEmail from '../../components/notifications/OpcionPantallaEmail';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusNotification, getStatusNotification } from '../../../application/actions/notifications';

export default function GestionNotificaciones() {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStatusNotification())
    }, [dispatch])

    const initialstate = useSelector(state => state.notification)

    const comprobar = () => {
        dispatch(changeStatusNotification(initialstate.notificationstatus))
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
