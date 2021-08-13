import React from 'react';
import '../../assets/styles/notifications/styleGestion.css';
import { useDispatch } from 'react-redux';
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
        <div className="EditProfilePrivacy-option">
            <div className="EditProfilePrivacy-text">
                <strong>
                    <span>{props[0]}</span></strong></div>
            <label className="switch pe-1">
                <input type="checkbox" name="nombre" checked={props[1]} onClick={cambiarestadomail} />
                <span className="slider round"/>
            </label>
            <label className="switch">
                <input type="checkbox" name="nombre" checked={props[2]} onClick={cambiarestadoscreen} />
                <span className="slider round"/>
            </label>
        </div>
    )
}
