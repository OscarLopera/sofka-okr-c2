import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";
// Importación Páginas
import HomePage from "../pages/administration/HomePage";
import LoginPage from "../pages/administration/LoginPage";
import OkrPage from "../pages/okr/OkrPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import PrincipalPage from "../pages/administration/PrincipalPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import AdministrationPage from "../pages/administration/AdministrationPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/principal" component={PrincipalPage} />
        <Route exact path="/okr" component={OkrPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/administration" component={AdministrationPage} />
      </Switch>
    </Router>
  );
};

export default App;
