import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
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
              activeClassName="active"
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