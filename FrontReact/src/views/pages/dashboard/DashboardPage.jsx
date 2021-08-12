
import "../../assets/styles/administration/App.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import React, { useEffect, useState } from "react";
//Redux
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// //Selectors
// import { getAllOkrs } from "./../../application/selectors/dashboard/okrs";
// //Acciones
// import { getAllOkrs } from "../../application/actions/dashboard/index.js";
import UserOkr from "./general/UserOkr";
//Componentes



const DashboardPage = () => {
  return (

    <div className="grey-bg container-fluid mt-4"style={{ backgroundColor:"#050531", borderRadius:"10px" }} >
        <section id="minimal-statistics">
            <div>
              <UserOkr/>
              <UserOkr/>
             </div>
        </section>
    </div>

)
};

export default DashboardPage;
