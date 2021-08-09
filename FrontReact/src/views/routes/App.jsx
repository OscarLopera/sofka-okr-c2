import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navegacion from "../components/administration/Navegacion";

// Importación Páginas

import HomePage from "../pages/administration/HomePage";
import LoginPage from "../pages/administration/LoginPage";
import PrincipalPage from "../pages/administration/PrincipalPage";

import "../assets/styles/administration/App.scss";

const App = () => {
  return (
    <Router>
      {/* <Navegacion /> */}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/principal" component={PrincipalPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
