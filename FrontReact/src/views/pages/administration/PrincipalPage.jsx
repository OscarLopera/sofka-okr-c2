import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "../../components/administration/Sidebar";
import "../../assets/styles/administration/index.css";

// Páginas
import OkrPage from "../../pages/okr/OkrPage";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import DashboardUserPage from "../../pages/dashboard/DashboardUserPage";
import CalendarPage from "../../pages/calendar/CalendarPage";
import AdministrationPage from "../../pages/administration/AdministrationPage";

import "../../assets/styles/administration/App.scss";

const PrincipalPage = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Route exact path="/okr" component={OkrPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/userdash" component={DashboardUserPage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/administration" component={AdministrationPage} />
        </div>
      </div>
    </Router>
  );
};

export default PrincipalPage;