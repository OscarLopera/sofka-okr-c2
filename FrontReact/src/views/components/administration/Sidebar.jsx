import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="d-flex">
      <div id="sidebar-container" className="bg-primary">
        <div className="menu">
          <NavLink to="/okr" className="d-block text-light p-3">
            <i className="icon ion-md-apps mx-2 lead"></i>Mis OKR's
          </NavLink>

          <NavLink to="/dashboard" className="d-block text-light p-3">
            <i className="icon ion-md-stats mx-2 lead"></i>Dashboard
          </NavLink>
          <NavLink to="/calendar" className="d-block text-light p-3">
            <i className="icon ion-md-calendar mx-2 lead"></i>Calendario
          </NavLink>
          <NavLink to="/administration" className="d-block text-light p-3">
            <i className="icon ion-md-settings mx-2 lead"></i>Administración
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
