import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUser } from "../../application/selectors/administration/user";
import { connect } from "react-redux";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";

// Importación Páginas
import {PrivateRoute, PublicRoute} from "./Routes"
import HomePage from "../pages/administration/HomePage";
import LoginPage from "../pages/administration/LoginPage";
import PrincipalPage from "../pages/administration/PrincipalPage";

//Rutas OKR
import OkrPage from "../pages/okr/OkrPage";
import CrearOkrPage from "../pages/okr/CrearOkrPage";
import CrearkrPage from "../pages/okr/CrearKrPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import DashboardUserPage from "../pages/dashboard/DashboardUserPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import AdministrationPage from "../pages/administration/AdministrationPage";
import UserPage from "../pages/administration/UserPage";

import "../assets/styles/administration/App.scss";
import GestionNotificaciones from "../pages/notifications/GestionNotificaciones";

const App = ({user}) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path={"/okr"} component={OkrPage} user={user}/>
        <PrivateRoute exact path={"/okr/create-okr"} component={CrearOkrPage} user={user}/>
        <PrivateRoute exact path={"/okr/create-kr"} component={CrearkrPage} user={user}/>
        <PrivateRoute exact path={"/dashboard"} component={DashboardPage} user={user}/>
        <PrivateRoute exact path={"/userdash"} component={DashboardUserPage} user={user}/>
        <PrivateRoute exact path={"/calendar"} component={CalendarPage} user={user}/>
        <PrivateRoute exact path={"/administration"} component={AdministrationPage} user={user}/>
        <Route exact path={"/login"} component={LoginPage} />
        {/* <PrivateRoute exact path={"/principal"} component={PrincipalPage} user={user} /> */}
        <PrivateRoute exact path={"/notificaciones"} component={GestionNotificaciones} user={user} />
        <PrivateRoute exact path={"/userPage"} component={UserPage} user={user} />
        <PublicRoute exact path="/" component={HomePage} user={user}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  };
};

export default connect(mapStateToProps)(App);

