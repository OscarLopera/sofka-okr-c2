import React from "react";

function Sidebar() {
  return (
    <div className="d-flex">
      <div id="sidebar-container" className="bg-primary">
        <div className="menu">
          <a href="/" className="d-block text-light p-3">
            <i className="icon ion-md-apps mx-2 lead"></i>Mis OKR's
          </a>

          <a href="/" className="d-block text-light p-3">
            <i className="icon ion-md-stats mx-2 lead"></i>Dashboard
          </a>
          <a href="/" className="d-block text-light p-3">
            <i class="icon ion-md-calendar mx-2 lead"></i>Calendario
          </a>
          <a href="/" className="d-block text-light p-3">
            <i className="icon ion-md-settings mx-2 lead"></i>Administración
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
