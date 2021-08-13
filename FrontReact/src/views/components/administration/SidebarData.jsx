import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Mis OKRs",
    path: "/okr",
    icon: <FaIcons.FaGripHorizontal />,
  },
  {
    title: "Dashboard",
    // path: "/dashboard",
    icon: <FaIcons.FaChartBar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Todas las dashboards",
        path: "/dashboard",
        icon: <FaIcons.FaChartArea />,
      },
      {
        title: "Usuario",
        path: "/userdash",
        icon: <FaIcons.FaChartLine />,
      },
    ],
  },
  {
    title: "Calendario",
    path: "/calendar",
    icon: <FaIcons.FaCalendarAlt />,
  },
  {
    title: "Administración",
    // path: "/administration",
    icon: <FaIcons.FaRegSun />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Soporte",
        path: "/administration",
        icon: <FaIcons.FaOsi />,
      },
    ],
  },
];

export default SidebarData;
