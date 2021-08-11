import React from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusNotificationmail, changeStatusNotificationscreen } from '../../../application/actions/notifications';


export default function OpcionPantallaEmail({props}) {

    const dispatch = useDispatch()
    const cambiarestadomail = () =>{
        dispatch(changeStatusNotificationmail(props))
    }
    const cambiarestadoscreen = () =>{
        dispatch(changeStatusNotificationscreen(props))
    }
    
    return (
        <div class="EditProfilePrivacy-option">
            <div class="EditProfilePrivacy-text">
                <strong>
                    <span>{props[0]}</span></strong></div>
            <label class="switch">
                <input type="checkbox" name="nombre" checked={props[1]} onClick={cambiarestadomail} />
                <span class="slider round"></span>
            </label>
            <label class="switch">
                <input type="checkbox" name="nombre" checked={props[2]} onClick={cambiarestadoscreen} />
                <span class="slider round"></span>
            </label>
        </div>
    )
}
