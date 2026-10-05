import React from "react";
import useIsMobile from "@/utils/tools/useIsMobile";
import { NavLink } from "react-router-dom";

const NavMenu = ({
  isMobileMenu = false,
  lightTheme = false,
}) => {
  const isMobile = useIsMobile() || isMobileMenu;

  const tabs = [
    { name: "Accueil", link: "/" },
    { name: "À propos", link: "/about" },
    { name: "Services", link: "/services" },
  ];

  // Le thème blanc concerne uniquement le Header desktop transparent.
  const useLightTheme = lightTheme && !isMobileMenu;

  return (
    <nav
      className={
        isMobile
          ? "mt-8 flex flex-col items-center gap-6"
          : "flex gap-6 pt-1.5"
      }
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.link}
          className={({ isActive }) =>
            [
              "border-b-2 font-bold transition-colors duration-300",

              isMobile
                ? "text-xl"
                : "inline-block pb-1",

              useLightTheme
                ? "text-white/80 hover:border-white/50 hover:text-white"
                : "text-gray-800 hover:border-gray-400 hover:text-gray-950",

              !isMobile && isActive
                ? useLightTheme
                  ? "border-white text-white"
                  : "border-gray-800"
                : "border-transparent",
            ].join(" ")
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;