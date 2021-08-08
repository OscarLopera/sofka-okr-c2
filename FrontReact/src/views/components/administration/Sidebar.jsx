import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/okr">Mis OKR's</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/calendar">Calendario</Link>
        </li>
        <li>
          <Link to="/administration">Administración</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
