import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";

// Importación Páginas

import HomePage from "../pages/administration/HomePage";
import LoginPage from "../pages/administration/LoginPage";
import PrincipalPage from "../pages/administration/PrincipalPage";

import OkrPage from "../pages/okr/OkrPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import DashboardUserPage from "../pages/dashboard/DashboardUserPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import AdministrationPage from "../pages/administration/AdministrationPage";

import "../assets/styles/administration/App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/okr" component={OkrPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/userdash" component={DashboardUserPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/administration" component={AdministrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/principal" component={PrincipalPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
