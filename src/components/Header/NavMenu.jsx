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
    <nav className="flex gap-6">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.link}
          className={({ isActive }) =>
            `inline-block pb-1 font-bold text-gray-800 transition
           border-b-2
           ${
             isActive
               ? "border-gray-800"
               : "border-transparent hover:border-gray-400"
           }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;
