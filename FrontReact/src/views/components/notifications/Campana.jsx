import React from 'react';
import Notificacion from './Notificacion';
import '../../assets/styles/notifications/styleCampana.css';
import { useHistory } from 'react-router';
import { connect } from "react-redux";

const Campana = ({ initialstate }) => {

    const history = useHistory();
    return (
        <div className="notifications">
            <div className="icon_wrap"><i className="far fa-bell" /></div>
            <div className="TinkerbellLayout-content">
                <div className="notification_dd">
                    <div className="TinkerbellLayout-top">
                        <div className="TinkerbellLayout-tittle">
                            <span>Tus notificaciones</span>
                        </div>
                        <a onClick={() => { history.push("/notificaciones") }}>
                            <i className="icon_cog1">⚙️</i>
                        </a>
                    </div>
                    {initialstate.historynotify !== "este usuario no existe" && initialstate.historynotify.length &&
                        <><Notificacion props={initialstate.historynotify[initialstate.historynotify.length - 1]} />
                            <Notificacion props={initialstate.historynotify[initialstate.historynotify.length - 2]} />

                        </>
                    }

                    <div className="NotificationsFooter text-center">
                        <a onClick={() => { history.push("/historialnotificaciones") }}>
                            <span className="vertodas">Ver todas ➡</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialstate: state.notification
    };
};

export default connect(mapStateToProps, null)(Campana)

