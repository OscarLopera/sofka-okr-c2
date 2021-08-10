import React from 'react';
import Notificacion from './Notificacion';
import '../../assets/styles/notifications/styleCampana.css'

export default function Campana() {
    return (
        <div class="notifications">
            <div class="icon_wrap"><i class="far fa-bell"></i></div>
            <div className="TinkerbellLayout-content">
              <div class="notification_dd">
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

                <div class="NotificationsFooter text-center">
                  <a href="#">
                    <span>Ver todas ➡</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
    )
}
