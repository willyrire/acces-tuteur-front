import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold">
          <NavLink to="/">Accès Tuteur</NavLink>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white transition"
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white transition"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white transition"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/legal"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white transition"
            }
          >
            Légal
          </NavLink>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Accès Tuteur
        </div>
      </div>
    </footer>
  );
};

export default Footer;
