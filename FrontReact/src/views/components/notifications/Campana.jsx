import React from 'react';
import Notificacion from './Notificacion';
import '../../assets/styles/notifications/styleCampana.css';

/* <button onClick={()=>{history.push("/notificaciones")}}>
                    <i className="icon_cog1">⚙️</i>
                  </button> */

export default function Campana() {
    return (
        <div className="notifications">
            <div className="icon_wrap"><i className="far fa-bell"/></div>
            <div className="TinkerbellLayout-content">
                <div className="notification_dd">
                    <div className="TinkerbellLayout-top">
                        <div className="TinkerbellLayout-tittle">
                            <span>Tus notificaciones</span>
                        </div>
                        <a href="/notificaciones">
                            <i className="icon_cog1">⚙️</i>
                        </a>
                    </div>
                    {Notificacion()}
                    {Notificacion()}

                    <div className="NotificationsFooter text-center">
                        <a href="/historialnotificaciones">
                            <span>Ver todas ➡</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
