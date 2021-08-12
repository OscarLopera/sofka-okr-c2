import React from 'react';
import Notificacion from './Notificacion';
import '../../assets/styles/notifications/styleCampana.css';
import { useHistory } from 'react-router';

export default function Campana() {

    const history = useHistory();
    return (
        <div className="notifications">
            <div className="icon_wrap"><i className="far fa-bell"/></div>
            <div className="TinkerbellLayout-content">
                <div className="notification_dd">
                    <div className="TinkerbellLayout-top">
                        <div className="TinkerbellLayout-tittle">
                            <span>Tus notificaciones</span>
                        </div>
                        <a onClick={()=>{history.push("/notificaciones")}}>
                            <i className="icon_cog1">⚙️</i>
                        </a>
                    </div>
                    {Notificacion()}
                    {Notificacion()}

                    <div className="NotificationsFooter text-center">
                        <a  onClick={()=>{history.push("/historialnotificaciones")}}>
                            <span className="vertodas">Ver todas ➡</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


