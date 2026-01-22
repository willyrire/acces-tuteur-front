import React from "react";
import { NavLink } from "react-router-dom"; // pour les routes React
const Logo = ({ bigTitleColorWhite = false }) => {
  return (
      <NavLink to="/">
        <div className="flex items-center gap-2">
          <img
            src="/images/acces-tuteur-no-text-no-bg.png"
            alt="Logo"
            className="w-25 h-25"
          />
          <h1 className={`text-2xl font-bold ${bigTitleColorWhite ? "text-white" : "text-gray-800"}`}>Accès Tuteur</h1>
        </div>
      </NavLink>
  );
};

export default Logo;
