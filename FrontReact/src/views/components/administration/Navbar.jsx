import React, { useState } from "react";
// Importaciones para saber si el usuario está logueado y para su conexión con el store.
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logoutUser } from "../../../application/actions/administration/user";
import { getUser } from "../../../application/selectors/administration/user";
import { Link } from "react-router-dom";
// Logos:
import Logo from "../../assets/static/administration/sofka-icono2.png";
import LogoUsuario from "../../assets/static/administration/user-icon.png";
import "../../assets/styles/administration/Navbar.css";

// Importaciones componente Sidebar
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Campana from "../notifications/Campana";

// const Nav = styled.div`
//   background: #050531;
//   height: 20px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const SidebarNav = styled.nav`
  background: #050531;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 100ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar = ({ logoutUser, user }) => {
  const [sidebar, setSidebar] = useState(false);
  // console.log(setSidebar);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navega">
        <div className="container-fluid">
          <div className="navbar-brand">
            {/* Usuario con Logueo */}
            {user && (
              <>
                <NavIcon>
                  <FaIcons.FaBars
                    onClick={showSidebar}
                    className="hamburger mx-3"
                  />
                  <img src={Logo} alt="logo sofka" />
                  <span className="mx-3 my-3 text-white">SOFKA OKR</span>
                </NavIcon>
              </>
            )}
            {/* Usuario sin logeo */}
            {!user && (
              <>
                <img src={Logo} alt="logo sofka" />
                <span className="mx-3 my-3 text-white">SOFKA OKR</span>
              </>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={!user ? "nav-link active text-white" : "d-none"}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={!user ? "d-none" : "nav-item"}>
                  <Campana />
                </li>
                <li className={!user ? "d-none" : "nav-item"}>
                  {/* Usuario no logueado */}
                  {!user && (
                    <Link className="nav-link" to="/">
                      <img src={LogoUsuario} alt="foto usuario" />
                    </Link>
                  )}
                  {/* Usuario Logeado */}
                  {user && (
                    <div>
                      <Link className="nav-link" to="/userPage">
                        <img
                          src={user.userImage}
                          alt="foto usuario"
                          width="40px"
                          height="40px"
                          className="imagen-usuario"
                        />
                        <span className="text-white me-3">{user.userName}</span>
                        {user.userVertical ? (
                          <span className="text-white">
                            {user.userVertical}
                          </span>
                        ) : null}
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </form>
          </div>
        </div>
        <button
          className={!user ? "d-none" : "btn btn-outline-danger mx-3"}
          onClick={logoutUser}
        >
          Logout
        </button>
      </nav>

      {/* Sidebar */}

      {user && (
        <div>
          <IconContext.Provider value={{ color: "#ff7e06" }}>
            <SidebarNav sidebar={sidebar} >
              <SidebarWrap>
                <NavIcon to="#">
                  <AiIcons.AiOutlineClose
                    className="equis mx-4"
                    onClick={showSidebar}
                  />
                </NavIcon>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
