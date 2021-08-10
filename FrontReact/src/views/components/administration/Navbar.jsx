import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/static/administration/sofka-icono2.png";
import LogoUsuario from "../../assets/static/administration/user-icon.png";
import "../../assets/styles/administration/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navega">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo sofka" />
          <span className="mx-3 my-3 text-white">SOFKA OKR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/principal">
                  Principal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Campana
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src={LogoUsuario} alt="foto usuario" />
                </Link>
              </li>
              <button className="btn btn-outline-danger">Cerrar Sesión</button>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
