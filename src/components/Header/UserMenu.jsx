import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut, User } from "lucide-react";

import logout from "@/handler/actions/logout";
import { auth_login, auth_register } from "@/constants/main";

const UserMenu = ({
  isAuth,
  userName,
  lightTheme = false,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

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
          className={
            lightTheme
              ? "text-white/40"
              : "text-gray-400"
          }
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
                  "hover:bg-white/20",
                  "hover:border-white/40",
                ].join(" ")
              : [
                  "bg-blue-600",
                  "text-white",
                  "hover:bg-blue-700",
                ].join(" "),
          ].join(" ")}
        >
          Créer un compte
        </NavLink>
      </nav>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={[
          "rounded-full px-4 py-2 font-bold",
          "transition-all duration-300",
          "hover:cursor-pointer",
          lightTheme
            ? [
                "border border-white/25",
                "bg-white/10",
                "text-white",
                "backdrop-blur-sm",
                "hover:bg-white/20",
              ].join(" ")
            : [
                "bg-green-400",
                "text-gray-900",
                "hover:bg-blue-300",
              ].join(" "),
        ].join(" ")}
      >
        {userName}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-xl"
        >
          <NavLink
            to="/user/profile"
            role="menuitem"
            className="flex items-center gap-2 px-4 py-2.5 transition-colors hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <User size={18} />

            <span>Mon compte</span>
          </NavLink>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut size={18} />

            <span>Déconnexion</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;