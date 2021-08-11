import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";

// Importación Páginas

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

import "../assets/styles/administration/App.scss";
import GestionNotificaciones from "../pages/notifications/GestionNotificaciones";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/okr" component={OkrPage} />
        <Route exact path="/okr/create-okr" component={CrearOkrPage} />
        <Route exact path="/okr/create-kr" component={CrearkrPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/userdash" component={DashboardUserPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/administration" component={AdministrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/principal" component={PrincipalPage} />
        <Route exact path="/notificaciones" component={GestionNotificaciones} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
