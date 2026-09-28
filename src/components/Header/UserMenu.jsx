import React from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

import logout from "@/handler/actions/logout";
import openApp from "@/handler/actions/openApp";
import { auth_login, auth_register } from "@/constants/main";

const UserMenu = ({ isAuth, lightTheme = false }) => {
  if (!isAuth) {
    return (
      <nav className="flex items-center gap-2">
        <NavLink
          to={auth_login}
          className={[
            "rounded-lg px-3 py-2 font-bold",
            "transition-all duration-300",
            lightTheme
              ? "text-white/90 hover:bg-white/10 hover:text-white"
              : "text-gray-900 hover:bg-black/5",
          ].join(" ")}
        >
          Se connecter
        </NavLink>

        <span
          className={lightTheme ? "text-white/40" : "text-gray-400"}
          aria-hidden="true"
        >
          /
        </span>

        <NavLink
          to={auth_register}
          className={[
            "rounded-xl px-4 py-2 font-bold",
            "transition-all duration-300",
            lightTheme
              ? [
                  "border border-white/25",
                  "bg-white/10",
                  "text-white",
                  "backdrop-blur-sm",
                  "hover:-translate-y-0.5",
                  "hover:border-white/40",
                  "hover:bg-white/20",
                ].join(" ")
              : ["bg-blue-600", "text-white", "hover:bg-blue-700"].join(" "),
          ].join(" ")}
        >
          Créer un compte
        </NavLink>
      </nav>
    );
  }

  return (
    <div className="flex items-stretch">
      <button
        type="button"
        onClick={() => openApp("front")}
        className={[
          "cursor-pointer flex items-center justify-center",
          "rounded-l-full border px-4 py-2",
          "font-bold transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          lightTheme
            ? [
                "border-yellow-300",
                "bg-yellow-300",
                "text-blue-950",
                "shadow-sm",
                "hover:bg-yellow-200",
              ].join(" ")
            : [
                "border-blue-600",
                "bg-blue-600",
                "text-white",
                "hover:bg-blue-700",
              ].join(" "),
        ].join(" ")}
      >
        Ouvrir l'application
      </button>

      <button
        type="button"
        onClick={logout}
        aria-label="Se déconnecter"
        className={[
          "cursor-pointer -ml-px flex items-center justify-center gap-2",
          "rounded-r-full border px-4 py-2",
          "font-bold transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          lightTheme
            ? [
                "border-white/25",
                "bg-white/10",
                "text-white",
                "backdrop-blur-sm",
                "hover:border-red-300/60",
                "hover:bg-red-400/20",
                "hover:text-red-100",
              ].join(" ")
            : [
                "border-gray-300",
                "bg-white",
                "text-gray-700",
                "hover:border-red-300",
                "hover:bg-red-50",
                "hover:text-red-600",
              ].join(" "),
        ].join(" ")}
      >
        <LogOut size={18} aria-hidden="true" />
        <span>Déconnexion</span>
      </button>
    </div>
  );
};

export default UserMenu;
