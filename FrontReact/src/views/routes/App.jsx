import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUser } from "../../application/selectors/administration/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//importacion socket
import socket from "../../infrastructure/services/api/notifications/socket";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";

// Importación Páginas
import { PrivateRoute, PublicRoute } from "./Routes"
import HomePage from "../pages/administration/HomePage";

//Rutas OKR
import OkrPage from "../pages/okr/OkrPage";
import CrearOkrPage from "../pages/okr/CrearOkrPage";
import CrearkrPage from "../pages/okr/CrearKrPage";

//Dashboard
import DashboardPage from "../pages/dashboard/DashboardPage";
import DashboardUserPage from "../pages/dashboard/DashboardUserPage";
import StateOkrs from './../pages/dashboard/user/StateOkrs';
import StateOkrsp from './../pages/dashboard/user/StateOkrsp';
import ViewOKR from '../pages/dashboard/user/ViewOKR.js';

//Calendar
import CalendarPage from "../pages/calendar/CalendarPage";

//Administration
import AdministrationPage from "../pages/administration/AdministrationPage";
import UserPage from "../pages/administration/UserPage";


import "../assets/styles/administration/App.scss";
import GestionNotificaciones from "../pages/notifications/GestionNotificaciones";
import HistorialNotificaciones from "../pages/notifications/HistorialNotificaciones";

//importacion historial de notificaciones
import { gethistory, sendNotification } from "../../application/actions/notifications";
import Push from 'push.js';

//import moment from "moment";

const App = ({ user, gethistory, sendNotification, initialstate }) => {
  localStorage.setItem("notifymanager", JSON.stringify(initialstate.notificationstatus));
  useEffect(() => {
    if (user !== null) {
      socket.on(user.userId, (data) => {
          console.log(initialstate.notificationstatus[data.indicei][1])
          console.log(initialstate.notificationstatus[data.indicei][2])
        if (initialstate.notificationstatus[data.indicei][1]) {
          console.log("si envia email")
        sendNotification(user.userId, {
          "userEmail": user.userEmail,
          "message": data.mensaje
        })
      }
      if (!initialstate.notificationstatus[data.indicei][1]) {
        console.log("no envia email")
        sendNotification(user.userId, {
          "userEmail": null,
          "message": data.mensaje
        })
      }
        if (initialstate.notificationstatus[data.indicei][2]) {
          console.log("envia pantalla")
          Push.create("Nueva notificacion Sofka Okr", {
            body: data,
            icon: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5d5c992c13fc0001494f2d/picture"
          })
        }
        console.log("entro a socket")
        setTimeout(() => {
          gethistory(user.userId)
        }, 500);

      })
    }
  }, [gethistory])


  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path={"/okr"} component={OkrPage} user={user} />
        <PrivateRoute exact path={"/okr/create-okr"} component={CrearOkrPage} user={user} />
        <PrivateRoute exact path={"/okr/create-kr"} component={CrearkrPage} user={user} />
        <PrivateRoute exact path={"/dashboard"} component={DashboardPage} user={user} />
        <PrivateRoute exact path={"/userdash"} component={DashboardUserPage} user={user} />
        <PrivateRoute exact path={"/statedashokrs"} component={StateOkrs} user={user} />
        <PrivateRoute exact path={"/statedashokrsp"} component={StateOkrsp} user={user} />
        <PrivateRoute exact path={"/viewdashokr"} component={ViewOKR} user={user} />
        <PrivateRoute exact path={"/calendar"} component={CalendarPage} user={user} />
        <PrivateRoute exact path={"/administration"} component={AdministrationPage} user={user} />
        <PrivateRoute exact path={"/historialnotificaciones"} component={HistorialNotificaciones} user={user} />
        <PrivateRoute exact path={"/notificaciones"} component={GestionNotificaciones} user={user} />
        <PrivateRoute exact path={"/userPage"} component={UserPage} user={user} />
        <PublicRoute exact path="/" component={HomePage} user={user} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { gethistory, sendNotification }, dispatch

  );
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    initialstate: state.notification
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

