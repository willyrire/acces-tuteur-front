import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = ({ isAuth, userName }) => {
  return (
    <nav>
      {isAuth ? (
        <NavLink
          to="/user/profile"
          className="px-4 py-2 font-bold rounded-full bg-green-400 hover:bg-blue-300 transition"
        >
        {userName}
        </NavLink>
      ) : (
        <div className="gap-1">
          <NavLink
            to="/auth/login"
            className="px-3 py-1 font-bold rounded hover:underline transition text-gray-800"
          >
            Se connecter
          </NavLink> /
          <NavLink
            to="/auth/create-account"
            className="px-3 py-1 font-bold rounded hover:underline transition text-gray-800"
          >
            Créer un compte
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default UserMenu;
