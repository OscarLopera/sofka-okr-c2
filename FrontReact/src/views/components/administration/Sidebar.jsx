import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #050531;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  console.log(setSidebar);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink
            to="/okr"
            className="text-dark rounded py-2 w-100 d-inline-block px-6"
            activeClassName="active"
          >
            <FaIcons.FaGripHorizontal className="me-2" />
            Mis OKR's
          </NavLink>
        </li>
        <li>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn dropdown-toggle text-dark rounded py-2 w-100 d-inline-block px-6"
             // activeClassName="active"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaIcons.FaChartBar className="me-2" />
              Dashboard
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <NavLink
                  to="/dashboard"
                  className="dropdown-item text-dark rounded py-2 w-100 d-inline-block px-6"
                >
                  <FaIcons.FaChartArea className="me-2" />
                  Dashboard General
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/userdash"
                  className="dropdown-item text-dark rounded py-2 w-100 d-inline-block px-6"
                >
                  <FaIcons.FaChartLine className="me-2" />
                  Dashboard Usuario
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <NavLink
            to="/dashboard"
            className="text-dark rounded py-2 w-100 d-inline-block px-6"
            activeClassName="active"
          >
            <FaIcons.FaChartBar className="me-2" />
            Dashboard
          </NavLink> */}
        </li>
        <li>
          <NavLink
            to="/calendar"
            className="text-dark rounded py-2 w-100 d-inline-block px-6"
            activeClassName="active"
          >
            <FaIcons.FaCalendarAlt className="me-2" />
            Calendario
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/administration"
            className="text-dark rounded py-2 w-100 d-inline-block px-6"
            activeClassName="active"
          >
            <FaIcons.FaRegSun className="me-2" />
            Administración
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
