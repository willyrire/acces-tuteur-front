import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();

  const tabs = [
    { name: "Accueil", link: "/" },
    { name: "À propos", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Support", link: "/support" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      {tabs
        .filter((tab) => tab.link !== location.pathname) // filtre la page active
        .map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.link}
            className="px-3 py-1 font-bold rounded hover:underline transition text-gray-800"
          >
            {tab.name}
          </NavLink>
        ))}
    </nav>
  );
};

export default NavMenu;