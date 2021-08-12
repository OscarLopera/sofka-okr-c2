import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gethistory } from '../../../application/actions/notifications';
import { getUser } from '../../../application/selectors/administration/user';


const HistorialNotificaciones= ({gethistory,stateIdUser,initialstate})=> {

    useEffect(() => {
        gethistory("611169b3a62cf558eff7a231")
    }, [gethistory])
    
    return (
        <div>
            <h1>Historial</h1>
            {initialstate.historynotify.length &&
                    initialstate.historynotify.map(noti => {
                        return <li>
                            <h5>{noti.message}</h5>
                        </li>
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
