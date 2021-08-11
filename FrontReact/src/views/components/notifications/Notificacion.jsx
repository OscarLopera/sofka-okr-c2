import React from 'react';
import '../../assets/styles/notifications/styleCampana.css';

export default function Notificacion() {
    return (
        <div className="NotificationHeader">
            <div className="NotificationHeader-type">
                <i className="icon-newspaper">📰</i>
            </div>
            <div className="NotificationHeader-info">
                <div className="NotificationHeader-avatares"/>
                <div className="NotificationHeader-title">
                    Se te asigno un nuevo KR
                </div>

                <div className="NotificationHeader-time">2 d</div>
            </div>

            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="/tinkerbell/blog-read/11627/?notification_id=1415679" className="NotificationHeader-url"/>
        </div>
    )
}
