import React from "react";
import useIsMobile from "@/utils/tools/useIsMobile";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isMobileMenu = false }) => {
  const isMobile = useIsMobile() || isMobileMenu;

  const tabs = [
    { name: "Accueil", link: "/" },
    { name: "À propos", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Support", link: "/support" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav
      className={
        isMobile
          ? "flex flex-col items-center gap-6 mt-8"
          : "flex gap-6"
      }
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.link}
          className={({ isActive }) =>
            `
            border-b-2 hover:border-gray-400 font-bold transition text-gray-800
            ${isMobile ? "text-xl" : "inline-block pb-1"}
            ${
              !isMobile && isActive
                ? "border-b-2 border-gray-800"
                : "border-b-2 border-transparent"
            }
            `
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;