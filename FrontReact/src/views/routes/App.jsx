import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "../assets/styles/administration/index.css";
// Importación componentes

import Navbar from "../components/administration/Navbar";

// Importación Páginas

import HomePage from "../pages/administration/HomePage";
import LoginPage from "../pages/administration/LoginPage";
import PrincipalPage from "../pages/administration/PrincipalPage";

import "../assets/styles/administration/App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/principal" component={PrincipalPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
