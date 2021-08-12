import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gethistory } from '../../../application/actions/notifications';
import { getUser } from '../../../application/selectors/administration/user';


const HistorialNotificaciones= ({gethistory,stateIdUser,initialstate})=> {

    useEffect(() => {
        gethistory(stateIdUser.userId)
    }, [gethistory])
    
    return (
        <div>
            <h1 className="text-center pt-3 pb-4">Historial de notificaciones</h1>
            {initialstate.historynotify && initialstate.historynotify.length &&
                    initialstate.historynotify.map(noti => {
                        return <div>
                            <p className="text-center">🟠   {noti.message} - {noti.date}</p>
                        </div>
                    })
                }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { gethistory  }, dispatch

    );
};

const mapStateToProps = (state) => {
    return {
        stateIdUser: getUser(state),
        initialstate: state.notification
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistorialNotificaciones)
