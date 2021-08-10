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
// import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

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
  top: 50;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Navbar = ({ logoutUser, user }) => {
  const [sidebar, setSidebar] = useState(false);
  console.log(setSidebar);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navega">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* Usuario con Logueo */}
            {user && (
              <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} className="mx-3" />
                <img src={Logo} alt="logo sofka" />
                <span className="mx-3 my-3 text-white">SOFKA OKR</span>
              </NavIcon>
            )}
            {/* Usuario sin logeo */}
            {!user && (
              <>
                <img src={Logo} alt="logo sofka" />
                <span className="mx-3 my-3 text-white">SOFKA OKR</span>
              </>
            )}
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
                  <Link
                    className={!user ? "nav-link active text-white" : "d-none"}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={!user ? "d-none" : "nav-item"}>
                  <Link className="nav-link text-white" to="/principal">
                    Principal
                  </Link>
                </li>
                <li className={!user ? "d-none" : "nav-item"}>
                  <Link className="nav-link text-white" to="/">
                    Campana
                  </Link>
                </li>
                <li className={!user ? "d-none" : "nav-item"}>
                  <Link className="nav-link" to="/">
                    <img src={LogoUsuario} alt="foto usuario" />
                  </Link>
                </li>
                <button
                  className={!user ? "d-none" : "btn btn-outline-danger"}
                  onClick={logoutUser}
                >
                  Cerrar Sesión
                </button>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <IconContext.Provider value={{ color: "#ff7e06" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
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
