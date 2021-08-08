import React from "react";

import Sidebar from "../../components/administration/Sidebar";
import "../../assets/styles/administration/index.css";

const DashboardPage = () => {
  return (
    <div>
      <Sidebar />
      <div id="content">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h1>Bienvenido Usuario</h1>
                <p>Holiwi</p>
              </div>
              <div className="col-lg-3">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
